import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Pages/Login/Signup";
import Login from "./Pages/Login/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
function App() {
  const isAuth = localStorage.getItem('userProfile')!==null;
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={isAuth? <Home /> : <Login/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
