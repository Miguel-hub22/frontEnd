import React, { useState, useEffect, ChangeEvent} from "react";
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
  TextField} from "@material-ui/core";
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/TokensReducer";
import { toast } from "react-toastify";
import Produtos from "../../../models/Produtos";
import { busca } from "../../../service/Service";
import ModalProdutos from "../modalProdutos/ModalProdutos";

function ListaProdutos() {
  let navigate = useNavigate();
  const [produtos, setProdutos] = useState<Produtos[]>([]);

  const token = useSelector<TokenState, TokenState['token']>(
    (state) => state.token
  );

  const userId = useSelector<TokenState, TokenState['id']>(
    (state) => state.id
  );


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

  const [pesquisa, setPesquisa] = useState("");

  let vazio: boolean = false;

  const filteredList = produtos.filter((elements) => {
    if (pesquisa === "") {
      return elements;
    } else {
      console.log(elements.nome.toLowerCase().includes(pesquisa));
      if (elements === null) {
        return (vazio = true);
      }
      return elements.nome.toLowerCase().includes(pesquisa);
    }
  });


  return (
    <>
<TextField
  type="text"
  className="Search"
  label="Pesquisa"
  name="pesquisa"
  id="pesquisa"
  variant="outlined"
  margin="normal"
  onChange={(e: ChangeEvent<HTMLInputElement>) =>
    setPesquisa(e.currentTarget.value)
  }
  />
  <Grid className="modalP">
  <Link to="/cadastroprodutos">
              <Button
                variant="contained"
                className="marginLeft"
                size="small"
                color="primary"
              >
                Cadastrar um novo Produto
              </Button>
            </Link>
    </Grid>
    <Box className="pd90" >
      {filteredList.map((produtos) => (
          <Box className="card">
            <Card className="innercard" variant="outlined">
              <CardContent>
                <Typography variant="h5" component="h2" id="nomeprod">
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
                <Grid className="imgproduto1" >
                <img src={produtos.embalagem} alt="" className="imgproduto"/>
                </Grid>
              </CardContent>
              {produtos.usuario?.id === +userId ? (
              <CardActions>
                <Grid container justifyContent="center">
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
                      <Button
                        variant="contained"
                        size="small"
                        color="secondary"
                      >
                        deletar
                      </Button>
                    </Box>
                    
                  </Link>
                </Grid>
              </CardActions>
              ):(<><h6 className="msgAutorizacao">Sem autorização para alterar ou excluir o produto</h6></>)}
            </Card>
          </Box>
      ))}
    </Box>
    </>
  );
}

export default ListaProdutos;
