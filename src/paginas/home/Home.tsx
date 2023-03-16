import Grid from '@material-ui/core/Grid'
import React, { useEffect } from "react";
import './Home.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/TokensReducer';
import { toast } from 'react-toastify';
import TabProdutos from '../../components/produtos/tabProdutos/TabProdutos';
import ModalProdutos from '../../components/produtos/modalProdutos/ModalProdutos';

function Home() {
  let navigate = useNavigate();
  const token = useSelector<TokenState, TokenState['token']>(
  (state)=>state.token
);

useEffect(() => {
  if (token == "") {
    toast.warn('Você precisa estar logado', {
      theme: "colored",
  });
      navigate("/login")
  }
}, [token])

  return (

    <Grid container className='home pd80'>
    <Grid xs={5} className='texto'>Esse site tem como objetivo ajudar a diminuir a fome e facilitar o acesso a informações sobre boas práticas na plantação, cuidados necessários e locais para compra de sementes.

Acreditamos que a agricultura é uma das principais fontes de alimento para a população mundial, e que, com as informações e práticas corretas, é possível aumentar a produtividade e garantir a segurança alimentar das pessoas.

Por isso, desenvolvemos esse site que disponibiliza diversas informações sobre a plantação, desde a escolha das sementes até os cuidados necessários para garantir uma boa colheita. Além disso, nossa plataforma disponibiliza um catálogo de sementes com informações sobre suas características e indicações de cultivo.

Nosso objetivo é ajudar os agricultores e pessoas interessadas em plantar em suas casas a ter acesso a informações de qualidade e a encontrar as melhores sementes para suas plantações. Queremos contribuir para o aumento da produtividade na agricultura e para a diminuição da fome no mundo.

Aqui você poderá ter acesso a informações úteis e confiáveis para que sua plantação seja um sucesso.
    <Grid xs={4}>
    <ModalProdutos />
    </Grid>
    </Grid>
    <Grid className='img' xs={6}>
    <img src="https://i.imgur.com/T8rGCSG.png" alt="" />
    </Grid>
      <TabProdutos />
    </Grid>

  )
}

export default Home