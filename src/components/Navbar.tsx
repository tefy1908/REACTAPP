import { Box, createStyles, Divider, IconButton, InputBase, makeStyles, Paper, TextField, Theme } from '@mui/material';
import { borderColor } from '@mui/system';
import React from 'react';
import Icons from "../assets";



const NavBar: React.FC = () => {
  return (
    <Box borderRadius={"8px"} width={"412px"  } height={"40px"} display={"inline-flex" } borderColor={"#132B44"} 
    border={2} >
      <Box><Icons.Menu.Notif /> </Box>
      <Box><InputBase color='primary'  size="small" placeholder='Recherche' autoCapitalize='sentences' autoComplete='on' autoCorrect='on' dir='auto' spellCheck='true' type='text'/> </Box>
    </Box>
      
   



  );

  ;
}

export default NavBar;
