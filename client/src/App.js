import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import Signup from "./Pages/Login/Signup";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/sign" element={<Signup />} />
          {/* <Route path="/home" element={isAuth ? <HomePage/> : <Navigate to="/" />}/>
            <Route path="/profile/:userId" element={isAuth ? <ProfilePage/> : <Navigate to="/" />}/> */}
        </Routes>
        <Routes>
          <Route path="/login" element={<Login />} />
          {/* <Route path="/home" element={isAuth ? <HomePage/> : <Navigate to="/" />}/>
            <Route path="/profile/:userId" element={isAuth ? <ProfilePage/> : <Navigate to="/" />}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
