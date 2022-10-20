import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Grid } from '@mui/material';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1, marginBottom:'30px'}}>
      <Grid>
        <AppBar position="static" sx={{backgroundColor:"#A6955A",textAlign:"center"}}>
          <Toolbar>
            <Button data-testid='teste' sx={{marginLeft:"43%"}} href="/"><Box component="img" src="/images/smallLogo.png" alt='smalllogo'/></Button>
          </Toolbar>
        </AppBar>
      </Grid>
    </Box>
  );
}