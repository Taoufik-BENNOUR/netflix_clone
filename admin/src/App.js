import React, { useContext, useEffect } from "react"
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.scss"
import Home from "./pages/home/Home";
import {Routes,Route, useLocation, Navigate, useNavigate} from "react-router-dom"
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import MovieList from "./pages/movieList/MovieList";
import Movie from "./pages/movie/Movie";
import Login from "./pages/login/Login";
import { AuthContext } from "./context/authContext/AuthContext";

function App() {
  const {user,loading} = useContext(AuthContext)
  const navigate=useNavigate()
  function LayoutSidebar ({children}){
    return (
      <>
      <Sidebar/>
      {children}
      </>
    )
  }
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';
useEffect(() => {
!user &&!loading && navigate("/login")
}, [user])

  return (
    <div className="app">
        {isLoginPage?null:<Topbar/> }  
        <div className="container">
        {isLoginPage ? null : <Sidebar />}
          <Routes>
            {<>  <Route path="/" element={<><Home/></>}/>
                <Route path="/users" element={<><UserList/></>} />
                <Route path="/user/:userId" element={<User/>} />
                <Route path="/newUser" element={<NewUser/>} />
                <Route path="/movies" element={<MovieList/>} />
                <Route path="/movie/:movieId" element={<Movie/>} /></>}
              <Route path="/login" element={user? <Navigate to="/" />: <Login/>}/>
          </Routes>
        </div>
    </div>
  );
}

export default App;
