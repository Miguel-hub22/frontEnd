import React, { useState, useEffect, ChangeEvent} from "react";
import Produtos from '../../../models/Produtos';
import { useSelector } from 'react-redux';
import { TokenState } from "../../../store/tokens/TokensReducer";
import { busca } from "../../../service/Service";
import { Box } from '@mui/material';
import { Card, CardContent, Typography, CardActions } from '@material-ui/core';
import AliceCarousel from "react-alice-carousel";
import 'react-alice-carousel/lib/alice-carousel.css';
import "./Carousel.css";


function Carousel() {
const [produtos, setProdutos] = useState<Produtos[]>([]);

const token = useSelector<TokenState, TokenState["token"]>(
    (state) => state.token
  );

  async function getProdutos() {
    await busca("/produtos", setProdutos, {
      headers: {
        Authorization: token,
      }
    })
  }
  useEffect(() => {
    getProdutos()
  },[])

  const items = produtos.map(produto =>(
    <Box className="pd90c">
            <Card variant="outlined" className="innercardc">
              <CardContent>
              <Typography variant="h5" component="h2" id="nomeprod">
                  <span className="txtnegritoc">{produto.nome}</span>
                </Typography>
                <Typography variant="body2" component="p">
                  <span className="txtnegritoc"> Descrição do produto: </span>
                  {produto.descricao}
                </Typography>
                <Typography variant="body2" component="p">
                  <span className="txtnegritoc">Valor: </span>
                  {produto.preco}
                </Typography>
                <Typography variant="body2" component="p">
                  <span className="txtnegritoc">Dicas de Plantação: </span>
                  {produto.dicasPlantacao}
                </Typography>
                <Typography variant="body2" component="p">
                  <span className="txtnegritoc">Região: </span>
                  {produto.regiao}
                </Typography>
                <Typography variant="body2" component="p">
                  <span className="txtnegritoc">Categoria: </span>
                  {produto.categorias?.tipo}
                </Typography>
                <img src={produto.embalagem} alt="" className="imgprodutoc"/>
              </CardContent>
            </Card>
          </Box>
  )
    )

  return (
    <AliceCarousel items={items} mouseTracking infinite autoPlay animationType="slide"
     animationDuration={3000}/>
  );
}
export default Carousel;
