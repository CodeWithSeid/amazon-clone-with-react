import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase/firebase';


function Login() {
  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');
  const navigate = useNavigate();

  const signIn = (e) => {
       e.preventDefault();
       signInWithEmailAndPassword(auth , email , password)
          .then((userCredential) => {
              if (userCredential)
                  navigate("/");
          })
          .catch((error) => alert(error.message));
       }

  const register = (e) => {
      e.preventDefault();
      createUserWithEmailAndPassword(auth , email , password)
      .then((userCredential) => {
          if (userCredential)
              navigate("/");
              // sign In
              // const user = userCredential.user;
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  }
  
  return (
    <section className='Login'>
        <Link to='/' className='click_Login_logo'>
            <img
                className='Login_logo'
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
                alt='Login_logo'
                />
        </Link>
        <div className='Login_container'>
            <h1 className='sign_in'>Sign In</h1>
            <form className='Login_form'>
                <h5 className='e_mail'>E-mail</h5>
                <input className='e_mail_filed' type='text' placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)}/>

                <h5 className='password'>Password</h5>
                <input className='password_filed' type='password' placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)}/> 

                <button className='Login_signIN_button' type='submit' onClick={signIn}>Sign In</button>
                
                <p className='Login_text'>
                  By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
                  Sale. Please see our Privacy Notice, our Cookies Notice and our
                  Interest-Based Ads Notice.
                </p>

                <button className='Login_register_button' onClick={register}>Create your Amazon account</button>
            </form>
        </div>
    </section>
  )
}

export default Login;