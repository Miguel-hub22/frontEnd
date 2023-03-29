import {
  Button,
  Card,
  CardActions,
  CardContent,
  ListItem,
  ListItemText,
  Typography,
  Container,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@material-ui/core";
import Box from "@mui/material/Box";
import React, { useState } from "react";
import { login } from "../../service/Service";
import "./Dicas.css";
import Carousel from '../../components/produtos/listaProdutos/Carousel';

function Dicas() {
  //Card Norte
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  //Card Nordeste
  const [open1, setOpen1] = useState(false);
  const handleOpen1 = () => {
    setOpen1(true);
  };
  const handleClose1 = () => {
    setOpen1(false);
  };
  //Card Centro-Oeste
  const [open2, setOpen2] = useState(false);
  const handleOpen2 = () => {
    setOpen2(true);
  };
  const handleClose2 = () => {
    setOpen2(false);
  };
  //Card Sul
  const [open3, setOpen3] = useState(false);
  const handleOpen3 = () => {
    setOpen3(true);
  };
  const handleClose3 = () => {
    setOpen3(false);
  };
  //Card Sudeste
  const [open4, setOpen4] = useState(false);
  const handleOpen4 = () => {
    setOpen4(true);
  };
  const handleClose4 = () => {
    setOpen4(false);
  };


  return (
    <>
      <Grid container className="corf pd80">
        <Box display="flex" gap="10px">
          <Card
            style={{ width: "31.8vw", height: "20vw", marginTop: "1vw" }}
            className="carddicas"
            variant="outlined"
          >
            <CardContent>
              <Typography
                color="textPrimary"
                gutterBottom
                variant="h4"
                align="center"
              >
                Região Norte
              </Typography>
              <img
                src="https://imgur.com/u3pJPtV.png"
                alt="Foto do mapa da região norte"
                className="imagemDica"
              />
              <Typography variant="h5" component="h2">
                <ListItem button>
                  <Button
                    className="botao3"
                    onClick={handleOpen}
                    variant="outlined"
                    color="primary"
                    fullWidth
                  >
                    Ler mais
                  </Button>
                </ListItem>
              </Typography>
              <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Região Norte</DialogTitle>
                <DialogContent>
                  <Typography variant="body1">
                  Os moradores dos estados da região Norte tem muita variedade para escolher! É hora de plantar Abóboras, Abobrinhas, Tomates, Salsas, Repolhos, Coentros, Pepinos, Melões, Melancias e Rabanetes.
                    <img
                      src="https://imgur.com/VzyDEq3.png"
                      alt=""
                    className="imgregiao"/>
                  </Typography>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>Fechar</Button>
                </DialogActions>
              </Dialog>
            </CardContent>
          </Card>

          <Card
            style={{ width: "31.8vw", height: "20vw", marginTop: "1vw" }}
            className="carddicas"
            variant="outlined"
          >
            <CardContent>
              <Typography
                color="textPrimary"
                gutterBottom
                variant="h4"
                align="center"
              >
                Região Nordeste
              </Typography>
              <img
                src="https://imgur.com/HZHeuNO.png"
                alt="Foto do mapa da região Nordeste"
                className="imagemDica"
              />
              <Typography variant="h5" component="h2">
                <ListItem button>
                  <Button
                    className="botao3"
                    onClick={handleOpen1}
                    variant="outlined"
                    color="primary"
                    fullWidth
                  >
                    Ler mais
                  </Button>
                </ListItem>
              </Typography>
              <Dialog open={open1} onClose={handleClose1}>
                <DialogTitle>Região Nordeste</DialogTitle>
                <DialogContent>
                  <Typography variant="body1">
                  Se você está na região Nordeste, aproveite os próximos meses para cultivar Abóboras, Abobrinhas, Berinjelas, Feijões-Vagem, Jilós, Pimentões, Mostardas, Salsas e Coentros.
                    <img
                      src="https://imgur.com/9fFKCVW.png"
                      alt=""
                      className="imgregiao"/>
                  </Typography>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose1}>Fechar</Button>
                </DialogActions>
              </Dialog>
            </CardContent>
          </Card>

          <Card
            style={{ width: "31.8vw", height: "20vw", marginTop: "1vw" }}
            className="carddicas"
            variant="outlined"
          >
            <CardContent>
              <Typography
                color="textPrimary"
                gutterBottom
                variant="h4"
                align="center"
              >
                Região Centro-Oeste
              </Typography>
              <img
                src="https://imgur.com/1YHHmh2.png"
                alt="Foto do mapa da região Centro-Oeste"
                className="imagemDica"
              />
              <Typography variant="h5" component="h2">
                <ListItem button>
                  <Button
                    className="botao3"
                    onClick={handleOpen2}
                    variant="outlined"
                    color="primary"
                    fullWidth
                  >
                    Ler mais
                  </Button>
                </ListItem>
              </Typography>
              <Dialog open={open2} onClose={handleClose2}>
                <DialogTitle>Região Centro-Oeste</DialogTitle>
                <DialogContent>
                  <Typography variant="body1">
                  No Centro-Oeste, onde as temperaturas ficam mais elevadas durante os meses do outono, é possível plantar Ervilhas, Couves-Rábano, Espinafres, Maxixes, Nabos, Pimenta de Cayenne, Tomates e Abóboras.
                    <img
                      src="https://imgur.com/CTwdWq2.png"
                      className="imgregiao"alt=""
                    />
                  </Typography>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose2}>Fechar</Button>
                </DialogActions>
              </Dialog>
            </CardContent>
          </Card>
        </Box>
        
        <Box display="flex" gap="10px">
          <Card
            style={{ width: "31.8vw", height: "20vw", marginTop: "1vw" }}
            className="carddicas"
            variant="outlined"
          >
            <CardContent>
              <Typography
                color="textPrimary"
                gutterBottom
                variant="h4"
                align="center"
              >
                Região Sul
              </Typography>
              <img
                src="https://imgur.com/KBwwmjl.png"
                alt="Foto do mapa da região Sul"
                className="imagemDica"
              />
              <Typography variant="h5" component="h2">
                <ListItem button>
                  <Button
                    className="botao3"
                    onClick={handleOpen3}
                    variant="outlined"
                    color="primary"
                    fullWidth
                  >
                    Ler mais
                  </Button>
                </ListItem>
              </Typography>
              <Dialog open={open3} onClose={handleClose3}>
                <DialogTitle>Região Sul</DialogTitle>
                <DialogContent>
                  <Typography variant="body1">
                  Se você mora nos estados da Região Sul do Brasil, que geralmente tem temperaturas mais baixas, essa é a hora de plantar espécies que se adaptam bem à estação, como Acelgas, Agriões, Aipos, Almeirões, Repolhos de inverno, Cebolas, Couves-Flor de Inverno, Rúculas, Salsas e Alfaces de inverno.
                    <img
                      src="https://imgur.com/AyHQ2Df.png"
                      alt=""
                      className="imgregiao"/>
                  </Typography>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose3}>Fechar</Button>
                </DialogActions>
              </Dialog>
            </CardContent>
          </Card>

          <img src="https://imgur.com/ldxDyoC.png" alt="" className="imgcentro"/>

          <Card
            style={{ width: "31.8vw", height: "20vw", marginTop: "1vw" }}
            className="carddicas"
            variant="outlined"
          >
            <CardContent>
              <Typography
                color="textPrimary"
                gutterBottom
                variant="h4"
                align="center"
              >
                Região Sudeste
              </Typography>
              <img
                src="https://imgur.com/lfjSGim.png"
                alt="Foto do mapa da região Sudeste"
                className="imagemDica"
              />
              <Typography variant="h5" component="h2">
                <ListItem button>
                  <Button
                    className="botao3"
                    onClick={handleOpen4}
                    variant="outlined"
                    color="primary"
                    fullWidth
                  >
                    Ler mais
                  </Button>
                </ListItem>
              </Typography>
              <Dialog open={open4} onClose={handleClose4}>
                <DialogTitle>Região Sudeste</DialogTitle>
                <DialogContent>
                  <Typography variant="body1">
                  Se você vive na região Sudeste, esse é o momento perfeito para semear Acelgas, Agriões,Rúculas, Salsas, Alfaces de inverno, Beterrabas, Cebolinhas, Couves-Brócoli, Couves-Manteiga, Ervilhas e Espinafres
                    <img
                      src="https://imgur.com/gvQdCB2.png"
                      alt=""
                      className="imgregiao"/>
                  </Typography>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose4}>Fechar</Button>
                </DialogActions>
              </Dialog>
            </CardContent>
          </Card>
          
        </Box>
      </Grid>
    </>
  );
}

export default Dicas;