import React, { useState, useEffect, ChangeEvent} from "react";
import Produtos from '../../../models/Produtos';
import { useSelector } from 'react-redux';
import { TokenState } from "../../../store/tokens/TokensReducer";
import { busca } from "../../../service/Service";
import { Box } from '@mui/material';
import { Card, CardContent, Typography, CardActions } from '@material-ui/core';
import { Link } from 'react-router-dom';
import AliceCarousel from "react-alice-carousel";


function Carousel() {
const [produtos, setProdutos] = useState<Produtos[]>([]);
const token = useSelector<TokenState, TokenState["token"]>(
    (state) => state.token
  );
  async function getPost() {
    await busca("/produtos", setProdutos, {
      headers: {
        Authorization: token,
      },
    });
  }
  useEffect(() => {
    getPost()
  },[])

  const items = produtos.map(produtos =>(
    <Box className="card">
            <Card className="innercard" variant="outlined">
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
                <img src={produtos.embalagem} alt="" className="imgproduto"/>

              </CardContent>
              <CardActions>
              </CardActions>
            </Card>
          </Box>
  )
    )

  return (
    <AliceCarousel mouseTracking infinite autoPlay items={items} animationType="fadeout" animationDuration={50}/>
  );
}
export default Carousel;