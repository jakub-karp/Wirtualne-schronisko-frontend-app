
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Adoptuj from './pages/Adoptuj';
import About from './pages/About';
import Home from './pages/Home';
import Login from './pages/Login';
import Rejestracja from './pages/Rejestracja';
import ErrorPage from './pages/ErrorPage';

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
              <Route path='*' element={<ErrorPage />}/>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
