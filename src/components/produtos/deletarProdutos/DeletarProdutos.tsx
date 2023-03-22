import React, { useEffect, useState } from "react";
import {Typography, Button, Card, CardActions, CardContent} from "@material-ui/core";
import { Box } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import "./DeletarProdutos.css";
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/TokensReducer";
import { toast } from 'react-toastify';
import Produtos from "../../../models/Produtos";
import { buscaId, deleteId } from "../../../service/Service";

function DeletarProdutos() {
    let navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const token = useSelector<TokenState, TokenState['token']>(
      (state)=>state.token
    );
    const [produtos, setProdutos] = useState<Produtos>();

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
        buscaId(`/produtos/${id}`, setProdutos, {
          headers: {
            Authorization: token,
          },
        });
      }

      function sim() {
        navigate("/produtos");
        deleteId(`/produtos/${id}`, {
        headers: {
            Authorization: token,
        },
        });
        toast.success("Produto deletado com sucesso",{
        theme: "colored",
    });
    }

    function nao() {
    navigate("/produtos");
}
return (
    <>
      <Box m={2} className="pddeletar">
        <Card variant="outlined">
          <CardContent>
            <Box justifyContent="center">
              <Typography color="textSecondary" gutterBottom>
                Deseja deletar o Produto:
              </Typography>
              <Typography color="textSecondary">{produtos?.nome}</Typography>
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
              <Box>
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
  );
}
export default DeletarProdutos;