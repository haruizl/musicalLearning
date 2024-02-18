import './App.css';
import Register from './components/Register';
import Login from './components/Login/Login';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element= { <Home/>} />
          <Route path="/register" element= { <Register/>} />
          <Route path="/" element= { <Login/>} />
        </Routes>
      </BrowserRouter>
      
    </div>
    </>
  );
}

export default App;
