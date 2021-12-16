
import './App.css';
import Home from './pages/Home';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import AuthProvider from './components/Context/AuthProvider';
import Cart from './pages/Cart';

function App() {
  return (
    <div className="">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="home" element={<Home />}></Route>
            <Route path="cart" element={<Cart />}></Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
