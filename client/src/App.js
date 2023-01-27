import Home from "./pages/home/Home";
import "./app.scss"
import Watch from "./pages/watch/Watch";
import { useRef } from "react";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
function App() {
  const topRef = useRef(null);

  const handleClick = () => {
    topRef.current.scrollIntoView({ behavior: "smooth" });

  };
  return (
    <div className="app" ref={topRef}>
          {/* <button className="scrollBtn" onClick={handleClick}>Scroll to Top</button> */}

      <Register/>
      {/* <Login/> */}
      {/* <Watch/> */}
      {/* <Home/> */}
    </div>
  );
}

export default App;
