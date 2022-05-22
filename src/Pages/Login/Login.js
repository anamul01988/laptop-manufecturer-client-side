import React, { useRef } from "react";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../../Shared/Loading";
// import img1 from '../../assets/banner.jpg'
const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);

  if(user||guser){
    // console.log(user, guser)
    navigate(from, { replace: true });
  }
  if (loading || gloading ) {
    return <Loading />;
  }
let loginErrorMessage;
  if (error || gerror) {
    loginErrorMessage = (
      <p className="text-red-500">
        <small>{error?.message || gerror?.message }</small>
      </p>
    );
  }
  
  const loginSubmit=(e)=>{
     e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  }
  const socialLoginIn = () =>{
    // console.log("clicked");
    signInWithGoogle()
  }
  const resetPassword = () =>{
    console.log('reset clicked');
  }
  return (
    <div class="hero min-h-screen bg-base-200 my-12">
      <div class="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100 ">
        <div class="card-body">
          <h2 className="text-primary text-center font-bold text-3xl">Login Form</h2>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input
             ref={emailRef}
              type="text"
              placeholder="email"
              class="input input-bordered"
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Password</span>
            </label>
            <input
              ref={passwordRef}
              type="text"
              placeholder="password"
              class="input input-bordered"
            />
            <label class="label">
              <button class="label-text-alt link link-hover">
                Forgot password? <Link to="" onClick={resetPassword}>Reset Password</Link>
              </button>
            </label>
            <label class="label">
              <span class="label-text-alt  text-base">
                Don't have an account? <Link className="font-bold text-error" to="/register">Sign Up</Link>
              </span>
            </label>
          </div>
          {loginErrorMessage}
          <div class="form-control mt-6">
            <button onClick={loginSubmit} class="btn btn-primary">Login</button>
          </div>
          <div class="divider">OR</div>
          <button onClick={socialLoginIn} className='btn btn-glass hover:btn-accent'>
            Continue with google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
