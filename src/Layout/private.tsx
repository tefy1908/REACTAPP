
import { FC } from 'react'
import PrivateViews from '../Views/Private';

const App: FC = () => {

  return (
    <div className="App">
      <h1>Private</h1>
      <PrivateViews.Ongoing />
      <hr />
      <PrivateViews.Settings />
    </div>
  );
}

export default App;
