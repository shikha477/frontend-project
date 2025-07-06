import React from 'react'
import './LoginPopup.css'
import { useState } from 'react'
import { assets } from '../../assets/assets/frontend_assets/assets'
const LoginPopup = ({setShowLogin}) => {

  const[currState,setCurrstate]= useState("Sign Up")

  return (
    <div className='login-popup'>
      <form className='login-popup-container'>
        <div className="login-popup-title">
            <h2>{currState}</h2>
            <img onClick={() =>setShowLogin(false)} src={assets.cross_icon}alt=""/>
        </div>
        <div className="login-popup-inputs">
            {currState==="Login"?<></>:<input type="text" placeholder='your name'required />}
            
            <input type="email" placeholder='your email'required />
            <input type ="password" placeholder='Password'required />
        </div>
        <button>{currState==="sign Up"?"Create account":"Login"}</button>
        <div className="login-popup-condition">
            <input type="checkbox"required/>
            <p>By continuing ,i agree to the terms of use & privacy policy</p>
        </div>
        {currState==="Login"
        ?<p>Create a new account?<span onClick={()=>setCurrstate("Sign Up")}>Click here</span></p>
        :<p>Already have an account?<span onClick={()=>setCurrstate("Login")}>Login here </span></p>
        }
        
        
      </form>
    </div>
  )
}

export default LoginPopup
