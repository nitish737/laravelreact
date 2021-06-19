
import './app.scss';
import Exporter from './files/exporter/Exporter';
import {BrowserRouter} from 'react-router-dom' ;

function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Exporter/>
      </BrowserRouter>
    </div>
  );
}

export default App;
