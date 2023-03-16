import React, { useState } from "react";
import { AppBar, Tab, Tabs, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import { TabContext, TabPanel } from "@material-ui/lab";
import "./TabProdutos.css";
import ListaPostagens from "../listaProdutos/ListaProdutos";

function TabProdutos() {
  const [value, setValue] = useState("1");
  function handleChange(event: React.ChangeEvent<{}>, newValue: string) {
    setValue(newValue);
  }
  return (
    <> 
      
      <TabContext value={value}>
        <AppBar className="painel" position="static">
          <Tabs centered indicatorColor="secondary" onChange={handleChange}>
            <Tab label="Produtos" value="1" />
            <Tab  label="Sobre-nós" value="2" />
          </Tabs>
        </AppBar>
        <TabPanel value="1">
          <Box display="flex" flexWrap="wrap" justifyContent="start">
            <ListaPostagens />
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
          <Typography
            variant="body1"
            gutterBottom
            color="textPrimary"
            align="justify"
          >
            O Projeto VidaPlan, foi elaborado visando a diminuição da barreira
            de entrada de novos agricultores, e a facilitação para agricultores
            iniciantes.
            <br />
            Nós da VidaPlan, visamos focar em aumentar o conhecimento e dar
            algumas dicas valiosas para quem ainda é inexperiente no ramo, e até
            mesmo facilitar o acesso do agricultor aos nossos produtos.
          </Typography>
        </TabPanel>
      </TabContext>
    </>
  );
}
export default TabProdutos;
