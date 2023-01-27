import { faAngleRight, } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useRef, useState } from "react"
import "./register.scss"

const Register = () => {
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")

  const emailRef = useRef()
  const passwordRef = useRef()

  const handleStart = () => {
    setemail(emailRef.current.value)
  }

  const handleFinish = () => {
    setpassword(passwordRef.current.value)
  }
  return (
    <div className="register">
        <div className="top">
            <img className="logo" src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png' />
            <button className="loginBtn">Sign In</button>
        </div>
        <div className="container">
            <h1>Unlimited movies,TV shows, and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <p>Ready to watch? Enter your email to create or restart your membership.</p>
{!email?        ( <div className="input"> 
            <input ref={emailRef} type="email" placeholder="Email address" />
            <button onClick={handleStart} >Get Started <FontAwesomeIcon icon={faAngleRight}/> </button>
           </div>):
           (<form className="input"> 
            <input ref={passwordRef}  type="password" placeholder="password" />
            <button onClick={handleFinish} ><span>Start membership</span><FontAwesomeIcon icon={faAngleRight}/> </button>
           </form>)}
        </div>
    </div>
  )
}

export default Register