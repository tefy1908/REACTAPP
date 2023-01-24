
import { Box} from '@mui/material';
import { FC, useState } from 'react'

import Private from './private';
import Public from './public';



const Layout: FC = () => {
  const [isConnected, setIsConnected] = useState<boolean>(false);

  return (
    <Box flex={1}>
      {isConnected ? <Private /> : <Public />}
    </Box>

  );
}

export default Layout;
