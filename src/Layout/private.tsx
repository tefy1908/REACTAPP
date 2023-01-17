
import { FC } from 'react'
import { Route, Link, Routes } from 'react-router-dom';
import { getRoutes } from '../routes';
import PrivateViews from '../Views/Private';


const App: FC = () => {

  return (
    <div className="App">
      <h1>Private</h1>
      <div>
        <Link to="/demands"> demands</Link>
      </div>
      <div>
        <Link to="/settings">settings</Link>
      </div>
      <div>
        <Link to="/">ongoing</Link>
      </div>
      <div>
        <Link to="/HistoryRide">History Ride</Link>
      </div>
      <div>
        <Link to="/TestPage">Test Page</Link>
      </div>
      <div>
        <Link to="/NewRide">New Ride</Link>
      </div>
      <div>
        <Link to="/OngoingRide">ongoing Ride</Link>
      </div>
      <Routes >
        {getRoutes("/private")}
        
      </Routes>

    </div>
  );
}

export default App;
