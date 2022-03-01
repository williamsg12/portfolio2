import './App.css';
import SIdebar from './Componenets/SIdebar';
import { Route,} from 'react-router-dom';
import Home from './Componenets/Home';

function App() {
  return (
    
    <div>
      <SIdebar />
        <Route exact path="/" element={Home}/>
      </div>

  );
}

export default App;
