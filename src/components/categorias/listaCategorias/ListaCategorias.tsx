import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/TokensReducer";
import { toast } from "react-toastify";
import Categorias from "../../../models/Categorias";
import { useNavigate, Link } from "react-router-dom";
import { busca } from "../../../service/Service";
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
} from "@material-ui/core";
import { Box } from "@mui/material";
import "./ListaCategorias.css";

function ListaCategorias() {
  const [categorias, setCategorias] = useState<Categorias[]>([]);
  const token = useSelector<TokenState, TokenState["token"]>(
    (state) => state.token
  );
  let navigate = useNavigate();

  async function getCategorias() {
    await busca("/categorias", setCategorias, {
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
    getCategorias();
  }, [categorias.length]);

  return (
    <>
    <Grid xs={12}  className="fundo pd80">
    <Box
            margin="8px"
            display="flex"
            className="text-decorator-none1 "
          >
            <Link to="/cadastrocategorias">
              <Button
                variant="contained"
                className="marginLeft"
                size="small"
                color="primary"
              >
                Cadastrar nova categoria
              </Button>
            </Link>
          </Box>
      {categorias.map((categorias) => (
        <Box m={2}>
          
         
          <Card variant="outlined">
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Categorias
              </Typography>
              <Typography variant="h5" component="h2">
                {categorias.tipo}
              </Typography>
            </CardContent>
            <CardActions>
              <Box display="flex" justifyContent="center" mb={1.5}>
                <Link
                  to={`/cadastrocategorias/${categorias.id}`}
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
                  to={`/deletarcategorias/${categorias.id}`}
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
      ))}
      </Grid>
    </>
  );
}
export default ListaCategorias;
