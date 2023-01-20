import React from 'react'
import { Drawer, Box } from '@mui/material';
import routes, { LAYOUT_TYPE } from '../routes';
import { Link } from 'react-router-dom';
import { Image, RoundaboutLeft } from '@mui/icons-material';
import Icons from "../assets";
import DeleteIcon from '@mui/icons-material/Delete';
import { bgcolor } from '@mui/system';


const SideBar: React.FC = () => {
  return (
    <Box height={"100%"} bgcolor={""}>
      <Box bgcolor={""}>Logo Resaam</Box>
      <Box>
        {routes.map(({ Icon, path, hidden, layout, name }, key) => layout === LAYOUT_TYPE.PRIVATE && !hidden && (
          <Box key={key} style={{ backgroundColor: "", justifyContent: "space-between" }}>
            <Link to={path}>
              <Box
                >

                <Icon /></Box>


            </Link>
          </Box>
        ))}
      </Box>
      <Box bgcolor={""}>parametre</Box>
    </Box>
  );
  
  ;
}

export default SideBar;
