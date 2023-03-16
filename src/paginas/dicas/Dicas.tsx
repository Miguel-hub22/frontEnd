import { Button, Card, CardActions, CardContent, ListItem, ListItemText, Typography, Container, Grid, Dialog, DialogTitle, DialogContent, DialogActions } from '@material-ui/core';
import Box from '@mui/material/Box'
import React, { useState } from 'react'
import { login } from '../../service/Service';

function Dicas() {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    
  };
    return (
      <>
    <Grid container className='corf pd80'>
    <Box   display='flex'  gap='10px'>
    <Card style={{width:'31.8vw',height:'20vw', marginTop:'1vw', marginLeft:'1vw'}} className='card' variant="outlined">
         <CardContent >
              <Typography color="textPrimary"  gutterBottom  variant="h3">
              Região Norte
              </Typography>
              <Typography variant="h5" component="h2" >
              <ListItem button>
                        <Button onClick={handleOpen} variant="outlined" color="primary">
                        Ler mais
                        </Button>
                    </ListItem>
                    <Dialog open={open} onClose={handleClose}>
                        <DialogTitle>Título da janela</DialogTitle>
                        <DialogContent>
                        <Typography variant="body1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos voluptates perspiciatis vel similique pariatur perferendis aperiam suscipit rerum laborum sint, saepe excepturi possimus dolor exercitationem, iure incidunt eveniet? Nesciunt, et. <img src="https://images-ext-2.discordapp.net/external/hHlRL9OK0IgWHAUfYkZw-9GZvzUWSGKlOmIcExSAFKo/https/i.imgur.com/jNUnH3Q.png?width=450&height=450" alt="" /></Typography>

                        </DialogContent>
                        <DialogActions>
                        <Button onClick={handleClose}>Fechar</Button>
                        </DialogActions>
                    </Dialog>
                    
                
              </Typography>
                <img src="https://imgur.com/0LkcM2e.png " width='300px' height='200px' alt="" />
            </CardContent> 
            </Card>

     
        <Card style={{width:'31.8vw',height:'20vw', marginTop:'1vw'}} className='card' variant="outlined">
         <CardContent>
              <Typography color="textPrimary"  gutterBottom  variant="h3">
              Região Nordeste
              </Typography>
              <Typography variant="h5" component="h2">

              <ListItem button>
                        <Button className='botao3' onClick={handleOpen} variant="outlined" color="primary">
                        Ler mais 
                        </Button>
                    </ListItem>
                    <Dialog open={open} onClose={handleClose}>
                        <DialogTitle>Título da janela</DialogTitle>
                        <DialogContent>
                        <Typography variant="body1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos voluptates perspiciatis vel similique pariatur perferendis aperiam suscipit rerum laborum sint, saepe excepturi possimus dolor exercitationem, iure incidunt eveniet? Nesciunt, et. <img src="https://images-ext-2.discordapp.net/external/hHlRL9OK0IgWHAUfYkZw-9GZvzUWSGKlOmIcExSAFKo/https/i.imgur.com/jNUnH3Q.png?width=450&height=450" alt="" /></Typography>
                        </DialogContent>
                        <DialogActions>
                        <Button onClick={handleClose}>Fechar</Button>
                        </DialogActions>
                    </Dialog>
                    
                
              </Typography>
              <img src="https://imgur.com/9kOHQMf.png" width='150px' height='150px' alt="" />
            </CardContent> 
            </Card>

            <Card style={{width:'31.8vw',height:'20vw', marginTop:'1vw'}} className='card' variant="outlined">
         <CardContent>
              <Typography color="textPrimary"  gutterBottom  variant="h3">
              Região Centro-Oeste
              </Typography>
              <Typography variant="h5" component="h2">
              <ListItem button>
                        <Button onClick={handleOpen} variant="outlined" color="primary">
                        Ler mais
                        </Button>
                    </ListItem>
                    <Dialog open={open} onClose={handleClose}>
                        <DialogTitle>Título da janela</DialogTitle>
                        <DialogContent>
                        <Typography variant="body1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos voluptates perspiciatis vel similique pariatur perferendis aperiam suscipit rerum laborum sint, saepe excepturi possimus dolor exercitationem, iure incidunt eveniet? Nesciunt, et. <img src="https://images-ext-2.discordapp.net/external/hHlRL9OK0IgWHAUfYkZw-9GZvzUWSGKlOmIcExSAFKo/https/i.imgur.com/jNUnH3Q.png?width=450&height=450" alt="" /></Typography>
                        </DialogContent>
                        <DialogActions>
                        <Button onClick={handleClose}>Fechar</Button>
                        </DialogActions>
                    </Dialog>
                    
                
              </Typography>
            </CardContent> 
            </Card>
              
    
    </Box>

    <Box  display='flex' height={'15vw'} m={2} width={'98%'} gap='10px'>
        

    <Card style={{width:'50.3vw',height:'15vw'}}className='card' variant="outlined">
            <CardContent>
            
              <Typography color="textPrimary"  gutterBottom  variant="h3">
              Região Sul
              </Typography>
              <Typography variant="h5" component="h2">
              <ListItem button>
                        <Button onClick={handleOpen} variant="outlined" color="primary">
                        Ler mais
                        </Button>
                    </ListItem>
                    <Dialog open={open} onClose={handleClose}>
                        <DialogTitle>Título da janela</DialogTitle>
                        <DialogContent>
                        <Typography variant="body1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos voluptates perspiciatis vel similique pariatur perferendis aperiam suscipit rerum laborum sint, saepe excepturi possimus dolor exercitationem, iure incidunt eveniet? Nesciunt, et. <img src="https://images-ext-2.discordapp.net/external/hHlRL9OK0IgWHAUfYkZw-9GZvzUWSGKlOmIcExSAFKo/https/i.imgur.com/jNUnH3Q.png?width=450&height=450" alt="" /></Typography>
                        </DialogContent>
                        <DialogActions>
                        <Button onClick={handleClose}>Fechar</Button>
                        </DialogActions>
                    </Dialog>
                    
              </Typography>
            </CardContent>
          </Card>

     
        <Card style={{width:'50vw',height:'15vw'}} className='card' variant="outlined">
         <CardContent>
              <Typography color="textPrimary"  gutterBottom  variant="h3">
              Região Sudeste
              </Typography>
              <Typography variant="h5" component="h2">
              <ListItem button>
                        <Button onClick={handleOpen} variant="outlined" color="primary">
                        Ler mais
                        </Button>
                    </ListItem>
                    <Dialog open={open} onClose={handleClose}>
                        <DialogTitle>Título da janela</DialogTitle>
                        <DialogContent>
                        <Typography variant="body1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos voluptates perspiciatis vel similique pariatur perferendis aperiam suscipit rerum laborum sint, saepe excepturi possimus dolor exercitationem, iure incidunt eveniet? Nesciunt, et. <img src="https://images-ext-2.discordapp.net/external/hHlRL9OK0IgWHAUfYkZw-9GZvzUWSGKlOmIcExSAFKo/https/i.imgur.com/jNUnH3Q.png?width=450&height=450" alt="" /></Typography>
                        
                        </DialogContent>
                        <DialogActions>
                        <Button onClick={handleClose}>Fechar</Button>
                        </DialogActions>
                    </Dialog>
                    
              </Typography>
            </CardContent> 
            </Card>          
    </Box>
        
        </Grid>
    </>
    )
    
}


export default Dicas