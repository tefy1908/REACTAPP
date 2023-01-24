import { ImportContactsSharp } from '@mui/icons-material';
import { Box } from '@mui/system';
import React from 'react';
import NavBar from './Navbar';
import Icons from "../assets";
import { Routes } from 'react-router-dom';
import routes, { getRoutes } from '../routes';
import {Stack, Button, MenuItem, MenuList, Paper } from '@mui/material';
import { Notif } from '../assets/Menu';
import { alignProperty } from '@mui/material/styles/cssUtils';



const Header: React.FC = () => {
    return (
        <Box sx={{ flexDirection: 'column' }}>
            <Box>
                <Routes>
                    {getRoutes("/private")}
                </Routes>
            </Box>
            <Box bgcolor={""} textAlign={"center"}> 
                <Stack direction="row" spacing={2}>
                    <Paper>
                        <MenuList>
                            <MenuItem>Profile</MenuItem>
                            
                            <MenuItem>Vide</MenuItem>
                        </MenuList>
                    </Paper>

                    <Button


                    ><Icons.Menu.notification />




                    </Button>
                    </Stack>


            </Box>
            <Box>

                <NavBar />


            </Box>


        </Box>

    );

}
export default Header;

