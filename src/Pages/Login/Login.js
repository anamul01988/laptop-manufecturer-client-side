import React from "react";
import { Link } from "react-router-dom";
// import img1 from '../../assets/banner.jpg'
const Login = () => {
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
              type="text"
              placeholder="password"
              class="input input-bordered"
            />
            <label class="label">
              <a href="#" class="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
            <label class="label">
              <a href="#" class="label-text-alt link link-hover">
                Don't have an account? <Link to="/register">Sign Up</Link>
              </a>
            </label>
          </div>
          <div class="form-control mt-6">
            <button class="btn btn-primary">Login</button>
          </div>
          <div class="divider">OR</div>
          <button className='btn btn-glass hover:btn-accent'>
            Continue with google
          </button>
        </div>
        {/* <div class="divider">OR</div> */}
      </div>
    </div>
  );
};

export default Login;
