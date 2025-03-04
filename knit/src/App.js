
import './App.css';
import Login from './Components/Login';
import Register from './Components/Register';
import { About } from './Components/About';
import Homepage from './Components/Homepage';
import { Featured } from './Components/Featured';
import { Special } from './Components/Special';
import { Contact } from './Components/Contact';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './Components/Navbar';
import { useLocation } from 'react-router-dom';


function Main() {
  const location = useLocation();
  const hideOnRoutes = ["/login", "/register"]
  return (
    <>
    {!hideOnRoutes.includes(location.pathname)&& <Navbar/>}
        
          
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/products" element={<Featured />} />
            <Route path="/special" element={<Special />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        
    </>
  );
}

function App() {
  return (

  <Router>
    <Main />
  </Router>
  );
}

export default App;