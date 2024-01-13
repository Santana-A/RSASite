import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './components/pages';
import EncryptPage from './components/pages/encrypt';


function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' Component={Home} exact />
        <Route path='/encrypt' Component={EncryptPage} exact />
      </Routes>
    </Router>
  );
}

export default App;
