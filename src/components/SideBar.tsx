import React from 'react'
import { Drawer, Box } from '@mui/material';
import routes, { LAYOUT_TYPE } from '../routes';
import { Link } from 'react-router-dom';
import { Image, RoundaboutLeft } from '@mui/icons-material';
import Icons from "../assets";

const SideBar: React.FC = () => {
  return (
    <React.Fragment>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 120, borderRadius: 5, borderBlockColor: "#808080", justifyContent: "space-evenly", backgroundColor: "greenyellow" },
        }}
        open
      >
        <Box marginTop={2}>
          
        </Box>
        <Box >
          {routes.map(({ Icon, path, hidden, layout, name }, key) => layout === LAYOUT_TYPE.PRIVATE && !hidden && (
            <Box key={key} style={{ backgroundColor: "black", justifyContent: "space-between" }}>
              <Link to={path}>
                <Box
                  sx={{
                    width: 50,
                    height: 100,


                  }}>

                  <Icon /></Box>


              </Link>
            </Box>
          ))}
        </Box>
        <Box marginBottom={2}>parametre</Box>
      </Drawer>
      {/* <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 120, borderRadius: 10, borderBlockColor: "#808080", justifyContent: "space-between", backgroundColor: "greenyellow" },
        }}
        open
      >
        <div>logo resaam</div>
        <div>parametre</div>
      </Drawer> */}
    </React.Fragment>



  );
}

export default SideBar;
