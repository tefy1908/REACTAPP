
import { FC } from 'react'
import { Link, Routes } from 'react-router-dom';
import routes, { getRoutes, LAYOUT_TYPE } from '../routes';
import C from "../components";
import { Box, Stack } from '@mui/material';

const App: FC = () => {

  return (
    <Box sx={{  bgcolor : "green", height: "100vh", width: "100vw", display: "inline-flex"}}>
    
    
    <Box bgcolor={"white"}><C.SideBar /></Box>
    
    <Box flexGrow={"1"}>
    <Box bgcolor={"pink"}>
        <C.Header/>
      </Box>
      
    <Stack  textAlign={"left"} marginLeft={"20px"} >
      <Routes>
          {getRoutes("/private")}
        </Routes>
      </Stack>  
      {/* <Box>      
        <C.Body />
      </Box> */}
    

      

        
    </Box>
    </Box>
    
  
  );
}
export default App;
