
import { FC, useState } from 'react'

import Button from '@mui/material/Button';
import Private from './private';
import Public from './public';



const Layout: FC = () => {
  const [isConnected, setIsConnected] = useState<boolean>(false);

  return (
    <div className="App">
      
      

      <div>
      {isConnected ? <Private />: <Public />}
      </div>
    </div>

  );
}

export default Layout;
