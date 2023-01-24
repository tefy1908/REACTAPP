import React from 'react'
import { Drawer, Box, Grid } from '@mui/material';
import routes, { LAYOUT_TYPE } from '../routes';
import { Link } from 'react-router-dom';
import { Image, RoundaboutLeft } from '@mui/icons-material';
import Icons from "../assets";
import DeleteIcon from '@mui/icons-material/Delete';
import { bgcolor } from '@mui/system';


const SideBar: React.FC = () => {
  return (
    <Box bgcolor={""} display={"flex"} flexDirection={"column"}>
      
      <Box bgcolor={""}><Icons.Menu.logo /></Box>
      <Box>
        <Icons.Menu.logosidebar /></Box>
      <Box marginTop={"117px"}>
      <Box gap={"60px"} display={"flex "} flexDirection={"column"} flexGrow={1} textAlign={"center"}>
        {routes.map(({ Icon, path, hidden, layout, name }, key) => layout === LAYOUT_TYPE.PRIVATE && !hidden && (
          <Box key={key} style={{ backgroundColor: ""} }>
            <Link to={path}>
              <Box
                >

                <Icon /></Box>


            </Link>
          </Box>
        ))}
      </Box>
      
      <Box marginLeft={"22px"} marginTop={"204px"}><Icons.Menu.parametre /></Box>
    </Box>
    </Box>
  );
  
  ;
}


export default SideBar;