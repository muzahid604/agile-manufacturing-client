
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
import MyOrder from './Components/MyOrder';
import AddReview from './Components/AddReview';
import MyProfile from './Components/MyProfile';
import Users from './Pages/Users';
import Payment from './Components/Payment';
import ThanksPay from './Components/ThanksPay';
import Reviews from './Components/Reviews';
import Contact from './Components/Contact';
import About from './Components/About';
import Blogs from './Components/Blogs';


function App() {
  return (<div>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/home' element={<Home />}></Route>
      <Route path='/tools' element={
        <RequireAuth>
          <Products />
        </RequireAuth>
      }></Route>
      <Route path='/tools/:toolId' element={
        <RequireAuth>
          <Purchase />
        </RequireAuth>}>
      </Route>
      <Route path='/payment/:toolId' element={
        <RequireAuth>
          <Payment />
        </RequireAuth>}>
      </Route>
      <Route path='/dashboard' element={
        <RequireAuth>
          <DashBoard />
        </RequireAuth>
      }>
        <Route index element={<MyOrder />}></Route>
        <Route path='/dashboard/addreview' element={<AddReview />}></Route>
        <Route path='/dashboard/myprofile' element={<MyProfile />}></Route>
        <Route path='/dashboard/users' element={<Users />}></Route>
      </Route>

      <Route path='/login' element={<Login />}></Route>
      <Route path='/reviews' element={<Reviews />}></Route>
      <Route path='/blogs' element={<Blogs />}></Route>
      <Route path='/contact' element={<Contact />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/register' element={<Register />}></Route>
      <Route path='/thanks' element={<ThanksPay />}></Route>
      <Route path='*' element={<NotFound />}></Route>
    </Routes>
  </div>
  );
}

export default App;
