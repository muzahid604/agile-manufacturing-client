
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import Register from './Components/Register';
import Home from './Pages/Home';
import Navbar from './Components/Navbar/Navbar';
import Products from './Pages/Products';

function App() {
  return (<div>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/home' element={<Home />}></Route>
      <Route path='/tools' element={<Products />}></Route>
      <Route path='/tools' element={<Products />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/register' element={<Register />}></Route>
    </Routes>
  </div>
  );
}

export default App;
