
import './App.css';
import Home from './pages/Home';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import AuthProvider from './components/Context/AuthProvider';

function App() {
  return (
    <div className="">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="home" element={<Home />}></Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
