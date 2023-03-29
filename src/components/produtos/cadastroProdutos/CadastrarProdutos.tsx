import React, { useState, useEffect, ChangeEvent } from 'react'
import { Container, Typography, TextField, Button, Select, InputLabel, MenuItem, FormControl, FormHelperText, Grid } from '@material-ui/core';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { busca, buscaId, post, put } from '../../../service/Service';
import './CadastrarProdutos.css';
import Categorias from '../../../models/Categorias';
import Produtos from '../../../models/Produtos';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/TokensReducer';
import { toast } from 'react-toastify';
import Usuario from '../../../models/Usuario';

function CadastroProdutos() {
    let navigate = useNavigate();
    const { id } = useParams<{id: string}>();
    const [categorias, setCategorias] = useState<Categorias[]>([])
    const token = useSelector<TokenState, TokenState['token']>(
    (state)=>state.token
);
const userId = useSelector<TokenState, TokenState['id']>(
    (state) => state.id
  );

useEffect(() => {
    if (token == "") {
        toast.warn('Você precisa estar logado', {
            theme: "colored",
        });
        navigate("/login")
    }
}, [token])

const [categoria, setCategoria] = useState<Categorias>(
    {
        id: 0,
        tipo: ''
    })
    const [produtos, setProdutos] = useState<Produtos>({
        id: 0,
        nome:'',
        descricao:'',
        preco: 0,
        dicasPlantacao:'',
        regiao:'',
        embalagem: '',
        categorias: null,
        usuario: null
})
const [usuario, setUsuario] = useState<Usuario>({
    id: +userId,
    nome: '',
    usuario: '',
    senha: '',
    cpf: ''
  })

useEffect(() => { 
    setProdutos({
        ...produtos,
        categorias: categoria,
        usuario: usuario
    })
}, [categoria])

useEffect(() => {
    getCategorias()
    if (id !== undefined) {
        findByIdProdutos(id)
    }
}, [id])

async function getCategorias() {
    await busca("/categorias", setCategorias, {
        headers: {
            'Authorization': token
        }
    })
}

async function findByIdProdutos(id: string) {
    await buscaId(`/produtos/${id}`, setProdutos, {
        headers: {
            'Authorization': token
        }
    })
}

function updatedProdutos(e: ChangeEvent<HTMLInputElement>) {

    setProdutos({
        ...produtos,
        [e.target.name]: e.target.value,
        categorias: categoria
    })
}

useEffect(() => {
    setProdutos({
      ...produtos,
      categorias: categoria,
      usuario: usuario
    });
  }, [categoria]);

async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()

    if (id !== undefined) {
        put(`/produtos`, produtos, setProdutos, {
            headers: {
                'Authorization': token
            }
        })
        toast.success('Produto atualizado com sucesso',{
            theme: "colored"
        });
    } else {
        post(`/produtos`, produtos, setProdutos, {
            headers: {
                'Authorization': token
            }
        })
        toast.success('Produto cadastrado com sucesso',{
            theme: "colored"
        });
    }
    back()
}
function back() {
    navigate('/produtos')
}

return (
    <Container maxWidth="sm" className="topo">
        <form onSubmit={onSubmit}>
        <Typography variant="h3" align='center'>
        {produtos.id != 0 ? 'Edite o Produto' : 'Cadastre um Produto  '}
        </Typography>
            <TextField value={produtos.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProdutos(e)} id="nome" label="Nome" variant="outlined" name="nome" margin="normal" fullWidth />
            <TextField value={produtos.descricao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProdutos(e)} id="descricao" label="Descrição" name="descricao" variant="outlined" margin="normal" fullWidth />
            <TextField value={produtos.dicasPlantacao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProdutos(e)} id="dicasPlantacao" label="Dicas de Plantacao" variant="outlined" name="dicasPlantacao" margin="normal" fullWidth />
            <TextField value={produtos.preco} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProdutos(e)} id="preco" label="Preço" variant="outlined" name="preco" margin="normal" />
            <TextField value={produtos.embalagem} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProdutos(e)} id="embalagem" label="Foto do produto" variant="outlined" name="embalagem" margin="normal" />
            <TextField value={produtos.regiao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProdutos(e)} id="regiao" label="Região" variant="outlined" name="regiao" margin="normal" />
            <FormControl >
                <InputLabel id="demo-simple-select-helper-label">Categorias </InputLabel>
                <Select labelId="demo-simple-select-helper-label" 
                id="demo-simple-select-helper"
                onChange={(e) => buscaId(`/categorias/${e.target.value}`, setCategoria, {
                        headers: {
                            'Authorization': token
                        }
                    })}>
                    {
                        categorias.map(categoria => (
                            <MenuItem value={categoria.id}>{categoria.tipo}</MenuItem>
                        ))
                    }
                </Select>
                <FormHelperText>Escolha uma categoria para o produto</FormHelperText>
                <Button type="submit" variant="contained" color="primary" disabled={categoria.id === 0}>
                    Finalizar
                </Button>
            </FormControl>
        </form>
    </Container>
)
}
export default CadastroProdutos;