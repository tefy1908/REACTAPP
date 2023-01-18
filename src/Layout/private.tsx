
import { FC } from 'react'
import { Link, Routes } from 'react-router-dom';
import routes, { getRoutes, LAYOUT_TYPE } from '../routes';
import C from "../components";

const App: FC = () => {

  return (
    <div className="App">
      <C.SideBar />

      <Routes >
        {getRoutes("/private")}
      </Routes>
    </div>
  );
}
export default App;
