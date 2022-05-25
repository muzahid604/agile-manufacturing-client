
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import Register from './Components/Register';
import Home from './Pages/Home';
import Navbar from './Components/Navbar/Navbar';
import Products from './Pages/Products';
import DashBoard from './Pages/DashBoard';
import NotFound from './Pages/NotFound';
import RequireAuth from './Components/RequireAuth';
import Purchase from './Pages/Purchase';

function App() {
  return (<div>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/home' element={<Home />}></Route>
      <Route path='/tools' element={<Products />}></Route>
      <Route path='/tools/:toolId' element={<RequireAuth>
        <Purchase />
      </RequireAuth>}></Route>
      <Route path='/dashboard' element={<DashBoard />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/register' element={<Register />}></Route>
      <Route path='*' element={<NotFound />}></Route>
    </Routes>
  </div>
  );
}

export default App;
