import {Button, Box, InputBase } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import Icons from "..//../assets";


export default function Forgot() {
  return (
    <Box> 

      <Box>
        <Icons.Menu.logoresaampublic  />
      </Box>

      <Box textAlign={'center'} display={'flex'} flexDirection={'column'}  marginTop={'197.5px'} > 
      <Box  marginLeft={'px'}> <h1> Vous avez oublié votre mot de passe ?</h1></Box>
      <Box> <p> Saisissez votre email pour réinitialiser otre mot de passe </p></Box>
      <Box border={2} borderColor={'#999C9F'} marginLeft={'675px'} width={"329px"} height={"40px"} borderRadius={"8px"}>  <InputBase id="outlined-basic"  size='small' placeholder='Adresse email'/> </Box>
      <Box border={1} borderColor={'#032A47'} borderRadius={'100px'}  marginLeft={'675px'} width={"329px"} height={"40px"} marginTop={'35px'} > 
        <Button>REINITIALISER MON MOT DE PASSE</Button>
      </Box>
      <Box  marginTop={'30px'}> 
        <Link to ={'/Login'}>  Revenir à la page de connexion
        </Link>
      </Box>


      </Box>

        
    </Box>
  )
}