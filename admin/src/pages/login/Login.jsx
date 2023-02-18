import { useContext, useState } from "react"
import { loginCall } from "../../context/authContext/apiCalls"
import { AuthContext } from "../../context/authContext/AuthContext"
import "./login.scss"

const Login = () => {
  const [username, setemail] = useState("")
  const [password, setpassword] = useState("")

  const {isLoading,dispatch,error} = useContext(AuthContext)
  const handleLogin = (e) =>{
    e.preventDefault();
    loginCall({username,password},dispatch)
  }
  return (
    <div className="login">
        <div className="container">
           <form>
              <h1>Sign In</h1>
              <input type={"email"} placeholder="email" onChange={(e)=>setemail(e.target.value)}/>
              <input type={"password"} placeholder="password" onChange={(e)=>setpassword(e.target.value)}/>
              <button onClick={handleLogin} disabled={isLoading} >Sign in</button>
           </form>
        </div>
    </div>
  )
}

export default Login