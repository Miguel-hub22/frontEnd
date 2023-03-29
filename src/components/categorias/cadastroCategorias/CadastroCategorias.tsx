import React, { useState, useEffect, ChangeEvent } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Categorias from '../../../models/Categorias';
import { TokenState } from '../../../store/tokens/TokensReducer';
import { toast } from 'react-toastify';
import { buscaId, post, put } from '../../../service/Service';
import { Container, Typography, TextField, Button } from "@material-ui/core"
import { Box } from '@mui/material';
import './CadastroCategorias.css'



function CadastroCategorias() {
    let navigate = useNavigate();
    const { id } = useParams<{id: string}>();
    const token = useSelector<TokenState, TokenState['token']>(
    (state)=>state.token
);
    const [categoria, setCategorias] = useState<Categorias>({
        id: 0,
        tipo: ''
})

    useEffect(() => {
        if (token == "") {
            toast.warn("Você precisa estar logado",{
                theme: 'colored'
            });
            navigate("/login")
        }
    }, [token])

    useEffect(() =>{
        if(id !== undefined){
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        buscaId(`/categorias/${id}`, setCategorias, {
            headers: {
            'Authorization': token
            }
        })
        }

        function updatedCategorias(e: ChangeEvent<HTMLInputElement>) {

            setCategorias({
                ...categoria,
                [e.target.name]: e.target.value,
            })
    
        }

        async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
            e.preventDefault()
            console.log("categoria " + JSON.stringify(categoria))

            if (id !== undefined) {
                console.log(categoria)
                put(`/categorias`, categoria, setCategorias, {
                    headers: {
                        'Authorization': token
                    }
                })
                toast.success('categoria atualizada com sucesso',{
                    theme: "colored",
                });
            } else {
                post(`/categorias`, categoria, setCategorias, {
                    headers: {
                        'Authorization': token
                    }
                })
                toast.success('Categoria cadastrada com sucesso',{
                    theme: "colored",
                });
            }
            back()
        }

        function back() {
            navigate('/categorias')
        }
return (
    <>  
    <Box className="topo fundo pd80">
        <Container maxWidth="sm">
        <form onSubmit={onSubmit}>
        <Typography variant="h3" align='center'>
                {categoria.id != 0 ? 'Edite a Categoria' : 'Cadastre uma Categoria  '}
        </Typography>
            <TextField value={categoria.tipo} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedCategorias(e)} id="tipo" label="Tipo" variant="outlined" name="tipo" margin="normal" fullWidth />
            <Button type="submit" variant="contained" color="primary" >
                Finalizar
            </Button>
        </form>
    </Container>
    </Box>

    </>
)
}

export default CadastroCategorias