import React, { useEffect, useRef } from "react";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import useToken from "../../Hooks/useToken";
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
  const [sendPasswordResetEmail, sending1, error1] =
  useSendPasswordResetEmail(auth);

  const [token] = useToken(user || guser) ;
  
  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token, from, navigate])
  // if(user||guser){
  //   navigate(from, { replace: true });
  // }

  if (loading || gloading ||sending1 ) {
    return <Loading />;
  }
let loginErrorMessage;
  if (error || gerror ||error1) {
    loginErrorMessage = (
      <p className="text-red-500">
        <small>{error?.message || gerror?.message ||error1.message }</small>
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
  const resetPassword = async() =>{
    console.log('reset clicked');
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Please visit your email :)");
    } else {
      toast("Please enter your email address...");
    }
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
              <span class="label-text-alt text-base ">
                Forgot password? <Link class=" font-bold text-dark link:hover" to="" onClick={resetPassword}>Reset Password</Link>
              </span>
            </label>
            <label class="label">
              <span class="label-text-alt text-base">
                Don't have an account? <Link className="font-bold text-error link:hover " to="/register">Sign Up</Link>
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
