import React, { useEffect, useState } from "react";
import axios from "axios"
import { useLoginAccount, createNewAccount } from "../../api/api";
import userProfileStore from "../../store/userProfile";

const SignInForm = ({getProfile}) => {
  const [signInMail, setSignInMail] = useState('');
  const [signInPW, setSignInPW] = useState('');
 
  const { profile, overwriteProfile, clearProfile } = userProfileStore(
    (state) => ({
      profile: state.profile,
      overwriteProfile: state.overwriteProfile,
      clearProfile: state.clearProfile,
    })
  );


  const handleEmail = (e) =>{
    setSignInMail(e.target.value)
  }

  const handlePassword = (e) =>{
    setSignInPW(e.target.value)      
  }

  const handleLogin = (e) =>{
    e.preventDefault();
    //temp solution must transfer to API.jsx
    useLoginAccount({email: signInMail, password: signInPW});
  }
  return (
    <div className="flex-column">
      <input placeholder="Email" value={signInMail} onChange={handleEmail}></input>
      <input placeholder="Password" value={signInPW} onChange={handlePassword} type={null}></input>
      <button onClick={handleLogin}>Sign In</button>
    </div>
  );  
};

const SignUpForm = () => {
  const [signInPW, setSignInPW] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [signInMail, setSignInMail] = useState('');

  const handlePW = (e) =>{
    setSignInPW(e.target.value)
  }

  const handlePWConfirm = (e) =>{
    setPasswordConfirm(e.target.value)      
  }

  const handleMail = (e) =>{
    setSignInMail(e.target.value)
  }

  const handleSignUp = async (e) => {  
    e.preventDefault()
    await createNewAccount({ email: signInMail, password: signInPW, password_confirmation: passwordConfirm })
  }

  return (
    <div className="flex-column">
      This is the SignUp
      <input placeholder="Email" value={signInMail} onChange={handleMail}></input>
      <input placeholder="Password" value={signInPW} onChange={handlePW}></input>
      <input placeholder="Confirm Password" value={passwordConfirm} onChange={handlePWConfirm}></input>
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
};

const LoginPage = ({getProfile}) => {
  const [signUp, setSignUp] = useState(false);

  const handleClick = () => {
    setSignUp(!signUp);
  };

  
  return (
    <div>
      {!signUp ? <SignInForm getProfile={getProfile}/> : <SignUpForm />}
      <button onClick={handleClick}>Form Toggle</button>
    </div>
  );
};

export default LoginPage;
