import './App.css';
import Register from './components/Register';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element= { <Dashboard/>} />
          <Route path="/register" element= { <Register/>} />
          {/* <Route path="/" element= { <Login/>} /> */}
        </Routes>
      </BrowserRouter>
      
    </div>
    </>
  );
}

export default App;
