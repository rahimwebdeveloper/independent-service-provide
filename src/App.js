import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import NotFound from './pages/Shared/NotFound/NotFound';
import Header from './pages/Shared/Header/Header';
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Register/Register';
import Footer from './pages/Shared/Footer/Footer';
import CheckOut from './pages/Home/CheckOut/CheckOut';
import Blogs from './pages/Blogs/Blogs';
import About from './pages/About/About';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/checkout" element={<CheckOut></CheckOut>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
