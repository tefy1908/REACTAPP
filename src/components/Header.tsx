import { Box } from '@mui/system';
import React from 'react';
import NavBar from './Navbar';

const Header: React.FC = () => {
    return(
        <Box sx={{ flexDirection: 'column' }}>
            <Box textAlign={"right"} marginRight={"20px"}>
                
                LOGO 
            </Box>
            <Box marginLeft={"20px"}>
                
                <NavBar />
            

            </Box>


        </Box>

    );

}
export default Header;

