
import './App.css';
import Home from './pages/Home';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import AuthProvider from './components/Context/AuthProvider';
import Cart from './pages/Cart';
import Products from './pages/Products';
import ContactUs from './pages/ContactUs';
import Dashboard from './pages/Dashboard';
import ConfirmOrder from './components/Order/ConfirmOrder/ConfirmOrder';
import MyOrders from './components/Dashboard/MyOrders/MyOrders';
import Login from './pages/Login';
import Register from './pages/Register';
import AddNewProduct from './components/Dashboard/AddNewProduct/AddNewProduct';
import MakeAdmin from './components/Dashboard/MakeAdmin/MakeAdmin';
import ManageAllBooking from './components/Dashboard/ManageAllBooking/ManageAllBooking';
import ManageAllProduct from './components/Dashboard/ManageAllProduct/ManageAllProduct';

function App() {
  return (
    <div className="">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="home" element={<Home />}></Route>
            <Route path="products" element={<Products />}></Route>
            <Route path="contact" element={<ContactUs />}></Route>
            <Route path="register" element={<Register />}></Route>
            <Route path="login" element={<Login />}></Route>
            <Route path={`/dashboard`} element={<Dashboard />}>
              <Route path={`dashboard/myBookings`} element={<MyOrders />}></Route>
              <Route path={`dashboard/addNewProduct`} element={<AddNewProduct />}></Route>
              <Route path={`dashboard/makeAdmin`} element={<MakeAdmin />}></Route>
              <Route path={`dashboard/manageAllOrder`} element={<ManageAllBooking />}></Route>
              <Route path={`dashboard/manageAllProduct`} element={<ManageAllProduct />}></Route>
            </Route>
            <Route path="cart" element={<Cart />}></Route>
            <Route path="order/:id" element={<ConfirmOrder />}></Route>
            <Route path="checkout" element={<ConfirmOrder />}></Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
