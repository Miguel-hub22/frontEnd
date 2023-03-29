import Grid from "@material-ui/core/Grid";
import React, { useEffect } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { TokenState } from "../../store/tokens/TokensReducer";
import { toast } from "react-toastify";
import TabProdutos from "../../components/produtos/tabProdutos/TabProdutos";
import Carousel from "../../components/produtos/listaProdutos/Carousel";
import { Box } from '@mui/material';


function Home() {
  let navigate = useNavigate();
  const token = useSelector<TokenState, TokenState["token"]>(
    (state) => state.token
  );

  useEffect(() => {
    if (token == "") {
      toast.warn("Você precisa estar logado", {
        theme: "colored",
      });
      navigate("/login");
    }
  }, [token]);

  return (
    <>
    <Grid container className="pd80 imgHome">

      <Grid className="texto1" xs={6}>
      <h2>Diferencial</h2>
        <p>
          Esse site tem como objetivo ajudar a diminuir a fome e facilitar o
          acesso a informações sobre boas práticas na plantação, cuidados
          necessários e locais para compra de sementes. Acreditamos que a
          agricultura é uma das principais fontes de alimento para a população
          mundial, e que, com as informações e práticas corretas, é possível
          aumentar a produtividade e garantir a segurança alimentar das pessoas.
        </p>

      </Grid>
      <Grid  className="texto2" xs={6}>
        <p>
        Uma das vantagens da agricultura para familias carentes é que ela não requer 
        grandes investimentos financeiros. é possivel começar com sementes e mudas 
        que podem ser encontradas em lojas especializadas ou até mesmo em feiras livres.
        Além disso,não é necessario ter um grande espaço para plantar. Com uma pequena 
        horta em casa, é possivel cultivar uma variedade de alimentos.
        </p>
      </Grid>
      <Grid xs={12}>
        <TabProdutos />
      </Grid>
      </Grid>


    </>
  );
}

export default Home;
