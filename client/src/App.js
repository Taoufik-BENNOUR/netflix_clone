import Home from "./pages/home/Home";
import "./app.scss"
import Watch from "./pages/watch/Watch";
import { useRef } from "react";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import {Route, Routes} from "react-router-dom"
import List from "./components/list/List";

function App() {
  const topRef = useRef(null);


  return (
    <div className="app" >
      <Routes>
        <Route path="/register" element={<Register/>} />      
        <Route path="/login" element={<Login/>} />      
        <Route path="/" element={<Home/>} />      
        <Route path="/movies" element={<Home type={"movies"} />} />      
        <Route path="/series" element={<Home type={"series"} />} />      
        <Route path="/watch" element={<Watch  />} />      
      </Routes>
    </div>
  );
}

export default App;
