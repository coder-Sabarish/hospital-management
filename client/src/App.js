import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Pages/Login/Signup";
import Login from "./Pages/Login/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import Booking from "./Pages/Booking/Booking";
import Department from "./Pages/Department/Department"


function App() {
  const isAuth = localStorage.getItem('userProfile')!==null;
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={isAuth? <Home /> : <Login/>} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/department" element={<Department />} />
          <Route path="/book" element={<Booking />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
