
import { Box } from '@mui/material';
import { FC } from 'react'
import { Route, Link, Routes } from 'react-router-dom';
import { getRoutes } from '../routes';
import PublicViews from '../Views/Public';


const App: FC = () => {

  return (
    
    <Box>
    <Routes >
      {getRoutes("/public")}

    </Routes>
    </Box>


  );
}

export default App;

