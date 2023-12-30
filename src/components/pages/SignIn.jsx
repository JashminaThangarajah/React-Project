import React from 'react'

export const SignIn = () => {
  return (
    <div className="loginsignup">
       <div className="loginsignup-container">
          <h1>Sign Up</h1>
          <div className="loginsignup-fields">
             <input type="text" placeholder='Your Name' class="form-control" />
             <input type="email" placeholder='Email' class="form-control"/>
             <input type="password" placeholder=' Password' class="form-control" />
          </div>
          <br />
         <center><button class="btn btn-danger">Continue</button></center> 
          <p className="loginsignup-login">Already have an account? <span>Login here</span></p>
      <div className="loginsignup-agree">
      <p>  <input type="checkbox" name='' id=''/>
       By continuing, I agree to the terms of use & privacy policy.</p>
      </div>
       </div>   
    </div>
  )
}
export default SignIn;
