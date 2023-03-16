import React from "react";
import { Grid, Link, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "./Footer.css";
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/TokensReducer";
import { GitHub } from "@mui/icons-material";

function Footer(){
  const token = useSelector<TokenState, TokenState['token']>(
      (state)=>state.token
    );
  return (
      <>
    <div>
        <hr />
      <Grid className="caixa" item xs={12} >                 
      <Typography>
          <h2> Equipe </h2>
          <a href="https://linktr.ee/chrispcruz" target="_blank"> Christian Patrick </a><br />
          <a href="https://linktr.ee/Leonardoassis" target="_blank"> Leonardo Assis </a> <br />
          <a href="https://beacons.ai/flaviabatista" target="_blank"> Marcelo Azevedo </a> <br />
                                 
          </Typography>                        
  <Grid item xs={2}>
      <Typography>
          <h2 className='invisivel'> - </h2>
          <a href="https://linktr.ee/NickCavalcante" target="_blank"> Miguel Rodrigues</a><br />
          <a href="https://beacons.ai/mari_rebecca" target="_blank"> Nick Cavalcante </a> <br />
          <a href="https://linktr.ee/OtavioMatheus" target="_blank"> Otavio Matheus </a> <br />
      </Typography>
  </Grid>

  <Grid item xs={3} >
      <Typography>
          <h2> GitHub </h2>

          <a href="https://github.com/VidaPlan" target="_blank">
                        <GitHub className='redes'/>
                    </a>
      </Typography>
  </Grid>
  <Grid>
  <Box mx={1} className="cursor">
                <Typography>
                  <h2>Sobre Nós</h2>
                </Typography>
              </Box>
  </Grid>
  </Grid >

<Grid>
  <Grid alignItems="center" item xs={12}>
      <Box style={{ backgroundColor: "#168b55", height: "36px" }}>
          <Box paddingTop={1}>
              <Typography variant="subtitle2" align="center" gutterBottom style={{ color: "black" }} > Copyright © 2023 🌱 VidaPlan </Typography>
          </Box>
      </Box>
  </Grid>
</Grid>
</div>
      </>
  )
}
export default Footer;
