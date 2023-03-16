import React, { useState, useEffect } from "react";
import "./ListaProdutos.css";
import { useNavigate, Link } from "react-router-dom";
import { Box } from "@mui/material";
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
} from "@material-ui/core";
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/TokensReducer";
import { toast } from "react-toastify";
import Produtos from "../../../models/Produtos";
import { busca } from "../../../service/Service";

function ListaProdutos() {
  const [produtos, setProdutos] = useState<Produtos[]>([]);
  const token = useSelector<TokenState, TokenState["token"]>(
    (state) => state.token
  );
  let navigate = useNavigate();

  async function getPost() {
    await busca("/produtos", setProdutos, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    if (token == "") {
      toast.warn("Você precisa estar logado", {
        theme: "colored",
      });
      navigate("/login");
    }
  }, [token]);

  useEffect(() => {
    getPost();
  }, [produtos.length]);

  return (
  
    <>
      {produtos.map((produtos) => (
        <Grid className='pd90'>
        <Box  m={2} display="flex">
          <Card className="card" variant="outlined">
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Produtos
              </Typography>
              <Typography variant="h5" component="h2">
                <span className="txtnegrito">{produtos.nome}</span>
              </Typography>
              <Typography variant="body2" component="p">
                <span className="txtnegrito"> Descrição do produto: </span>
                {produtos.descricao}
              </Typography>
              <Typography variant="body2" component="p">
                <span className="txtnegrito">Valor: </span>
                {produtos.preco}
              </Typography>
              <Typography variant="body2" component="p">
                <span className="txtnegrito">Dicas de Plantação: </span>
                {produtos.dicasPlantacao}
              </Typography>
              <Typography variant="body2" component="p">
                <span className="txtnegrito">Região: </span>
                {produtos.regiao}
              </Typography>
              <Typography variant="body2" component="p">
                <span className="txtnegrito">Categoria: </span>
                {produtos.categorias?.tipo}
              </Typography>
              <img
                className="img2"
                src="https://imgur.com/OlQmryk.png"
                alt="Foto de uma muda de Amora"
              />
            </CardContent>
            <CardActions>
              <Box display="flex" justifyContent="center" mb={1.5}>
                <Link
                  to={`/cadastroprodutos/${produtos.id}`}
                  className="text-decorator-none"
                >
                  <Box mx={1}>
                    <Button
                      variant="contained"
                      className="marginLeft"
                      size="small"
                      color="primary"
                    >
                      atualizar
                    </Button>
                  </Box>
                </Link>
                <Link
                  to={`/deletarprodutos/${produtos.id}`}
                  className="text-decorator-none"
                >
                  <Box mx={1}>
                    <Button variant="contained" size="small" color="secondary">
                      deletar
                    </Button>
                  </Box>
                </Link>
              </Box>
            </CardActions>
          </Card>
        </Box>
        </Grid>
      ))}
    </>
  );
}

export default ListaProdutos;
