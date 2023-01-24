
import { FC } from 'react'
import { Link, Routes } from 'react-router-dom';
import routes, { getRoutes, LAYOUT_TYPE } from '../routes';
import C from "../components";
import { Box, Stack } from '@mui/material';

const App: FC = () => {

  return (
    <Box sx={{ bgcolor : "#E5E5E5", height: "100vh", width: "100vw", display:"inline-flex", flexDirection :'row'}}>
    
    
    <Box height={"900px"} width={"125px"} bgcolor={""} borderRight={2} borderRadius={4} borderColor={"solid #E5E5E5"} borderBottom={2}><C.SideBar /></Box>
    
    <Box flexGrow={"1"} marginLeft={"116px"}>
    <Box>
        <C.Header/>
      </Box>
      
    <Stack  textAlign={"left"}>
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
