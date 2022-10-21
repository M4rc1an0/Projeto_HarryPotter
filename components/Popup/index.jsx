import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Box } from '@mui/material';
import Image from 'next/image';

export default function AlertDialog({personagem,opened,setValor}) {


  return (
  
    
    <div>
      <Dialog 
        open={opened}
        onClose={() => setValor(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        
      >
        
        <DialogContent data-testid='form' sx={{bgcolor:'#171717'}}>
          <DialogContentText id="alert-dialog-description">
            <Box sx={{alignContent:"left",display:"inline-block",marginRight:"20px"}}>
              <img src={ personagem && personagem.image ? personagem.image : '/images/semfoto.png'} className='imagemPopup' />
            </Box>

            <Box sx={{textAlign:"left", color:'#A6955A',display:"inline-block",verticalAlign:"top"}}>
              <span>Nome:</span> <span className='conteudo'>{personagem && personagem.name}</span><br/>

              <span>Casa:</span> <span className='conteudo'>{personagem && personagem.house ? personagem.house : 'Não possui casa'}</span><br/>

             <span>Especie:</span> <span className='conteudo'>{personagem && personagem.species}</span><br/>

              <span>Data de nasc:</span> <span className='conteudo'>{personagem && personagem.dateOfBirth ? personagem.dateOfBirth : 'Desconhecido'}</span><br/>

              <span>Genero:</span> <span className='conteudo'>{personagem && personagem.gender}</span><br/>

              <span>Patrono:</span> <span className='conteudo'>{personagem && personagem.patronus ? personagem.patronus : 'Desconhecido'}</span><br/>

              <strong>Varinha: </strong><br/>
                <span className='lista'>-Madeira:</span> <span className='conteudo'>{personagem && personagem.wand.wood ? personagem.wand.wood : 'Desconhecido'}</span> <br/>
                <span className='lista'>-Nucleo:</span> <span className='conteudo'>{personagem && personagem.wand.core ? personagem.wand.core : 'Desconhecido'}</span> <br/>
                <span className='lista'>-Tamanho:<span className='conteudo'>{personagem && personagem.wand.lenght ? personagem.wand.length : 'Desconhecido' }</span></span> <br/>
              
              <span>Ancestralidade:</span> <span className='conteudo'>{personagem && personagem.ancestry ? personagem.ancestry : 'Desconhecido'}</span><br/>
              
              <span>Ator:</span> <span className='conteudo'>{personagem && personagem.actor}</span>
            </Box>
          </DialogContentText>
          <Button onClick={() => setValor(false)}>Fechar</Button>
        </DialogContent>
      </Dialog>
    </div>
  
  
  );
}
