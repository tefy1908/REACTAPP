
import { Box} from '@mui/material';
import { FC, useState } from 'react'

import Private from './private';
import Public from './public';



const Layout: FC = () => {
  const [isConnected, setIsConnected] = useState<boolean>(true);

  return (
    <Box flex={1}>
      
      

      <div>
      {isConnected ? <Private />: <Public />}
      </div>
    </Box>

  );
}

export default Layout;
