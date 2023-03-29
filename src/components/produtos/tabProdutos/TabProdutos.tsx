import React, { useState } from "react";
import { AppBar, Tab, Tabs, Typography } from "@material-ui/core";
import { Box, Grid } from '@mui/material';
import { TabContext, TabPanel } from "@material-ui/lab";
import "./TabProdutos.css";
import ListaPostagens from "../listaProdutos/ListaProdutos";
import Carousel from "../listaProdutos/Carousel";


function TabProdutos() {
  const [value, setValue] = useState("1");
  function handleChange(event: React.ChangeEvent<{}>, newValue: string) {
    setValue(newValue);
  }
  return (
    <> 
      <TabContext value={value}>
        <AppBar className="painel1" position="static">
          <Tabs centered onChange={handleChange} >
            <Tab label="Produtos" value="1" className="painel2"/>
            <Tab label="Projeto" value="2" className="painel2"/>
          </Tabs>
        </AppBar>
        <TabPanel className="painel" value="1">
          <Box display="flex" flexWrap="wrap" justifyContent="start">
            <Carousel />
          </Box>
        </TabPanel>
        <TabPanel className="painel" value="2">
          <Typography
            variant="h5"
            gutterBottom
            color="textPrimary"
            component="h5"
            align="center"
            className="titulo"
          >
            Sobre o Projeto
          </Typography>
          <Grid className="projeto">
          <Typography
            variant="body1"
            gutterBottom
            color="textPrimary"
            align="justify"
          >
            Nós temos como objetivo ajudar a diminuir a fome e facilitar o acesso a informações sobre boas práticas na plantação, cuidados necessários e facilitar a compra de mudas e sementes para pequenos e novos agricultores.<br/>
            Acreditamos que a agricultura é uma das principais fontes de alimento para a população mundial, e que, com as informações e práticas corretas, é possível aumentar a produtividade e garantir a segurança alimentar das pessoas.<br/>
            Por isso, desenvolvemos essa plataforma que disponibiliza diversas informações sobre a plantação, desde a escolha das sementes até os cuidados necessários para garantir uma boa colheita. Além disso, nossa plataforma disponibiliza um catálogo de sementes com informações sobre suas características e indicações de cultivo.
          </Typography>
          <img src="https://imgur.com/7qUrrF6.png" alt="" width='350px' height='300px'/>
          </Grid>
        </TabPanel>
      </TabContext>
    </>
  );
}
export default TabProdutos;
