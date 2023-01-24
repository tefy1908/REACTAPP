import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, Button, Checkbox, createStyles, FormControl, IconButton, Input, InputAdornment, InputBase, InputLabel, makeStyles, TextField, Theme } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import components from '../../components';
import Icons from "..//../assets";



interface State {
  amount: string;
  password: string;
  weight: string;
  weightRange: string;
  showPassword: boolean;
}


export default function Login() {
 
  const [values, setValues] = React.useState<State>({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  return(

    <Box 
    height ={"600px"} width={"473px"} marginLeft={"482px"} marginTop={"205px"} bgcolor={"#FFFFFF"}  borderColor={"black"} border={4}
    borderRadius={"50px"} textAlign={"center"} gap="16px" display={'flex'} flexDirection={'column'}>
      <Box >
        <Icons.Menu.logoresaampublic />
      </Box>
      <Box >
        <h1>
          SE CONNECTER 
        </h1>
      </Box>
      <Box>
        <p>
          Connectez-vous et accéder à toutes les fonctionnalités de la plateforme
        </p>
      </Box>
      <Box border={2} width={"329px"} height={"40px"} borderRadius={"8px"} marginLeft={'71px'}>
        <InputBase id="outlined-basic"  size='small' placeholder='Adresse email'/>
      </Box>
      <Box border={2} width={"329px"} height={"40px"} borderRadius={"8px"} marginLeft={'71px'}>
      <FormControl>
        
          <InputBase 
            
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </Box>
      <Box >
      <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />Se Souvenir de moi

      </Box>
      <Box display={'flex'} flexDirection={'row'} justifyContent={'space-evenly'}>
        <Box> 
        <Link to={"/Forgot"} >
          Mot de passe oulié
        </Link>
        </Box>
        <Box border={1} borderRadius={'100px'}>
        <Button>Se Connecter</Button>
        </Box>
      </Box>
     </Box>
  
  
  );
}