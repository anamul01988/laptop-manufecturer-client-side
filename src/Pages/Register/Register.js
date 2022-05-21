import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Register = () => {
  const [agree, setAgree] = useState(false);
  const { register,formState: { errors }, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div class="hero min-h-screen bg-base-200 py-16">
        <div class="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100 ">
          <div class="card-body">
            <h2 className="text-primary text-center font-bold text-3xl">
              Registration Form
            </h2>
            <div class="form-control">
              <label class="label">
                <span class="label-text">User-name</span>
              </label>
              <input
                {...register("userName", { required: true, maxLength: 5 })}
                type="text"
                placeholder="Your name"
                class="input input-bordered"
              />
                 {errors.userName?.type === 'required' && "Pls maintain Your userName validation"}
            </div>
            
            <div class="form-control">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                {...register("email")}
                type="email"
                placeholder="email"
                class="input input-bordered"
              />
                 {/* {errors.email?.type === 'required' && "Pls maintain your email validation"} */}
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input
                 {...register("password", { required: true, minLength: 4 })}
                type="text"
                placeholder="password"
                class="input input-bordered"
              />
               {errors.password?.type === 'required' && "Pls maintain your password validation"}
            </div>
            <div className="flex items-end">
              <input
                type="checkbox"
                name="terms"
                class="checkbox checkbox-primary mt-2"
              />
              <label htmlFor="terms" className="ml-0.5">
                Accept terms & condition
              </label>
            </div>
            <div class="form-control mt-6">
              {/* <button value="submit" class="btn btn-primary">Register</button> */}
              <input className="btn btn-primary" type="submit" value="register" />
            </div>

            <label class="label">
              <span class="label-text-alt text-base">
                Already have an Account?{" "}
                <Link className="font-bold text-error" to="/login">
                  Log In
                </Link>
              </span>
            </label>

            <div class="divider">OR</div>
            <button className="btn btn-glass hover:btn-accent">
              Continue with google
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Register;
