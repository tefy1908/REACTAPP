
import { FC } from 'react'
import { Route, Link, Routes } from 'react-router-dom';
import { getRoutes } from '../routes';
import PublicViews from '../Views/Public';


const App: FC = () => {

  return (
    <div className="App">
      <h1>Public</h1>
      <div>
      </div>
  
      <Routes >
        {getRoutes("/public")}

      </Routes>

    </div>
  );
}

export default App;

