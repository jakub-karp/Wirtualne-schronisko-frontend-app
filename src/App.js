
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Adoptuj from './pages/Adoptuj';
import About from './pages/About';
import Home from './pages/Home';
import Login from './pages/Login';
import Rejestracja from './pages/Rejestracja';

function App() {
  return (
    <div className="App">
        <Header/>
        <Router>
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/about' element={<About />}/>
              <Route path='/adoptuj' element={<Adoptuj />}/>
              <Route path='/login' element={<Login />}/>
              <Route path='/rejestracja' element={<Rejestracja />}/>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
