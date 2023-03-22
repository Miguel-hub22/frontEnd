import Grid from "@material-ui/core/Grid";
import React, { useEffect } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { TokenState } from "../../store/tokens/TokensReducer";
import { toast } from "react-toastify";
import TabProdutos from "../../components/produtos/tabProdutos/TabProdutos";
import Carousel from "../../components/produtos/listaProdutos/Carousel";


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
    <Grid container className="home pd80">
      <Grid xs={5} className="texto">
        <h2>Diferencial</h2>
        <h3>
          Esse site tem como objetivo ajudar a diminuir a fome e facilitar o
          acesso a informações sobre boas práticas na plantação, cuidados
          necessários e locais para compra de sementes. Acreditamos que a
          agricultura é uma das principais fontes de alimento para a população
          mundial, e que, com as informações e práticas corretas, é possível
          aumentar a produtividade e garantir a segurança alimentar das pessoas.
        </h3>
      </Grid>
      <Grid className="img" xs={6}>
        <img src="https://images-ext-2.discordapp.net/external/05KiTmVLB79aOd8mupVQqJCxO9ot5mQjz_ovYuEsLDQ/https/cdn.diariodigital.com.br/wp-content/uploads/2020/08/Agricultura.jpg?width=890&height=473" alt="" width='700px'/>
      </Grid>
      <Grid xs={5} className="texto">
        <iframe
          src="https://drive.google.com/file/d/1zW9gzYHIZM0VNkvC6FhSaB_vsMxQF8VS/preview"
          width="640"
          height="480"
          allow="autoplay"
        ></iframe>
        <Grid xs={4}></Grid>
      </Grid>
      <Grid className="img" xs={6}>
        <h3>
        Uma das vantagens da agricultura para familias carentes é que ela não requer 
        grandes investimentos financeiros. é possivel começar com sementes e mudas 
        que podem ser encontradas em lojas especializadas ou até mesmo em feiras livres.
        Além disso,não é necessario ter um grande espaço para plantar. Com uma pequena 
        horta em casa, é possivel cultivar uma variedade de alimentos.
        </h3>
      </Grid>
      {/* <Carousel/> */}
    </Grid>
  );
}

export default Home;
