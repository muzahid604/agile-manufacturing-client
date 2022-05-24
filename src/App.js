
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home';

function App() {
  return (<div>
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/home' element={<Home />}></Route>
      <Route path='/login' element={<Login />}></Route>

    </Routes>
  </div>
  );
}

export default App;
