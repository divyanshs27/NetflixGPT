import React from 'react'
import Header from './Header'
import { useState, useRef } from 'react';
import {checkValidData} from "../utils/validate";

const Login = () => {
  const [isSignInForm,setIsSignInForm] = useState(true);
  const [errorMessage,setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }
  const handleButtonClick = () => {
    //validate the form data
    //console.log(email.current.value);
    //console.log(password.current.value);
    setErrorMessage(checkValidData(email.current.value,password.current.value));
    console.log(errorMessage);

  }
  return (
    <div>
      <Header/>
      <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/2f5a878d-bbce-451b-836a-398227a34fbf/web/IN-en-20241230-TRIFECTA-perspective_5ab944a5-1a71-4f6d-b341-8699d0491edd_small.jpg" alt="logo"></img>
      </div>
      <form onSubmit = {(e) => e.preventDefault()}className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80'>
        <h1 className='font-bold text-3xl py-4'>{isSignInForm?'Sign In':'Sign Up'}</h1>
        <input
          ref = {email}
          name = {email} 
          type="text" 
          placeholder='Email Address' 
          className='p-4 my-4 w-full bg-gray-700 rounded-lg'/>
        {!isSignInForm && (<input 
        type="text" 
        placeholder='Full Name' 
        className='p-4 my-4 w-full bg-gray-700 rounded-lg'/>)}
        <input
          ref = {password}
          name = {password} 
          type="password" 
          placeholder='Password' 
          className='p-4 my-4 w-full bg-gray-700 rounded-lg'/>
        <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>
        <button className='p-4 my-6 bg-red-700 w-full rounded-lg'
        onClick={handleButtonClick}>{isSignInForm?'Sign In':'Sign Up'}</button>
        <p className='py-4' onClick={toggleSignInForm}>{isSignInForm?'New to Netfilx? Sign Up Now':'Already a User?Sign In Now'}</p>
      </form>
    </div>
  )
}

export default Login;