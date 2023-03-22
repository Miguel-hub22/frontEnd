import React from "react";
import { AppBar, Button, TextField, Toolbar, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useSelector, useDispatch } from "react-redux";
import { addToken } from "../../../store/tokens/Action";
import { toast } from "react-toastify";
import { TokenState } from "../../../store/tokens/TokensReducer";

function Navbar() {
  const token = useSelector<TokenState, TokenState["token"]>(
    (state) => state.token
  );
  const dispatch = useDispatch();
  let navigate = useNavigate();

  function goLogout() {
    dispatch(addToken(""));
    toast.success("Usuário deslogado", {
      theme: "colored",
    });

    navigate("/login");
  }


  return (
    <>
      <AppBar className="barra" position="static">
        <Toolbar variant="regular">
          <Box className="cursor">
            <Box mx={1} className="cursor"></Box>
          </Box>

          <Box width="100%" display="flex" justifyContent="space-between">
            <Box display="flex">
              <img src="https://imgur.com/QgknDQx.png" alt="" width="60" />
              <Box mx={1} className="cursor">
                <Link to="/home" className="text-decorator-none1">
                  <Typography className="corDaLetra left" variant="h6" color="initial">
                    Home
                  </Typography>
                </Link>
              </Box>
              <Box mx={1} className="cursor">
                <Link to="/categorias" className="text-decorator-none1">
                  <Typography className="corDaLetra" variant="h6" color="inherit">
                    Categorias
                  </Typography>
                </Link>
              </Box>
              <Box mx={1} className="cursor">
                <Link to="/produtos" className="text-decorator-none1">
                  <Typography className="corDaLetra" variant="h6" color="inherit">
                    Produtos
                  </Typography>
                </Link>
              </Box>
              <Box mx={1} className="cursor">
                <Link to='/dicasplantacao' className="text-decorator-none1">
                  <Typography className="corDaLetra" variant="h6" color="inherit">
                    Dicas de Plantação
                  </Typography>
                </Link>
              </Box>
              <Box mx={1} className="cursor">
                <Link to='/colaboradores' className="text-decorator-none1">
                  <Typography className="corDaLetra" variant="h6" color="inherit">
                    Colaboradores
                  </Typography>
                </Link>
              </Box>
                </Box>
              <Box mx={1} className="cursor sair" onClick={goLogout}>
                <Typography className="corDaLetra" variant="h6" color="inherit">
                  Sair da Loja
                </Typography>
              </Box>
          </Box>
        </Toolbar>
      </AppBar>
      
    </>
    );
  
 }


export default Navbar;