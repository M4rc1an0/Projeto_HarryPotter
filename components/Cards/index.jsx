import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


export default function PersonagemCard({personagem}) {


  
  return (
    <Card sx={{ maxWidth: 180, background:"transparent"}} >
      <CardActionArea >
        <CardMedia
          component="img"
          height="227"
          image= {personagem.image ? personagem.image : '/images/semfoto.png' } 
          alt={personagem.name}
          />
        <CardContent>
          <Typography sx={{color:"#A6955A"}} gutterBottom variant="h4" component="div">
            {personagem.name}
          </Typography>
        </CardContent>  
      </CardActionArea>
    </Card>
    
  );
}
