import React, { useEffect, useState } from "react";
import { Card, CardActions, CardContent, Button, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";



import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/TokensReducer";
import { toast } from 'react-toastify';
import Categorias from "../../../models/Categorias";
import { buscaId, deleteId } from '../../../service/Service';

function DeletarCategorias() {
    let navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const token = useSelector<TokenState, TokenState['token']>(
        (state)=>state.token
      );
    const [categorias, setCategorias] = useState<Categorias>();

    useEffect(() => {
        if (token == "") {
            toast.warn('Você precisa estar logado', {
                theme: "colored",
            });
            navigate("/login");
        }
    }, [token]);

    useEffect(() => {
        if (id !== undefined) {
            findById(id);
        }
    }, [id]);

    async function findById(id: string) {
        buscaId(`/categorias/${id}`, setCategorias, {
            headers: {
                Authorization: token,
            },
        });
    }

    function sim() {
        navigate("/categorias");
        deleteId(`/categorias/${id}`, {
            headers: {
                Authorization: token,
            },
        });
        toast.success("Tema deletado com sucesso",{
            theme: "colored",
        });
    }

    function nao() {
        navigate("/categorias");
    }
return (
    <>
    <Box m={2} className='pddeletar'>
        <Card variant="outlined">
            <CardContent>
                <Box justifyContent="center">
                    <Typography color="textSecondary" gutterBottom>
                        Deseja deletar a Categoria:
                    </Typography>
                    <Typography color="textSecondary">{categorias?.tipo}</Typography>
                </Box>
            </CardContent>
            <CardActions>
                <Box display="flex" justifyContent="start" ml={1.0} mb={2}>
                    <Box mx={2}>
                        <Button
                            onClick={sim}
                            variant="contained"
                            className="marginLeft"
                            size="large"
                            color="primary"
                        >
                            Sim
                        </Button>
                    </Box>
                    <Box mx={2}>
                        <Button
                            onClick={nao}
                            variant="contained"
                            size="large"
                            color="secondary"
                        >
                            Não
                        </Button>
                    </Box>
                </Box>
            </CardActions>
        </Card>
    </Box>
</>
)
}

export default DeletarCategorias