import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import Signup from "./Pages/Login/Signup";
import Login from "./Pages/Login/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./Pages/About/About";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/sign" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
