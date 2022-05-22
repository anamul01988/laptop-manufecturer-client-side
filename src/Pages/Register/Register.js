
import React, { useState } from "react";
import auth from "../../firebase.init";
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Loading from "../../Shared/Loading";


const Register = () => {
  // const [agree, setAgree] = useState(false);
  const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth, {sendEmailVerification:true});
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, updatingError] = useUpdateProfile(auth);
  const navigate = useNavigate();
  let registerErrorMessage;

  if( loading || gloading || updating){
    return <Loading/>
  }

  if(error || gerror || updatingError){
    registerErrorMessage = <p className="text-red-500"><small>{error?.message || gerror?.message || updatingError?.message}</small></p>
  }
 
  if (user || guser) {
    console.log(user);
    navigate('/')
  }

  const onSubmit = async(data) => {
    console.log(data)
    await createUserWithEmailAndPassword(
      // data.userName,
      data.email,
      data.password
    )
    await updateProfile({displayName: data.userName});
    console.log('updated profile');
  };

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
                   type="text"
                   placeholder="Your name"
                   class="input input-bordered"
                {...register("userName", {
                  required: {
                    value: true,
                    message: "Name is Required",
                  },
                })}
           
              />
              {/* {errors.userName?.type === "required" &&
                "Pls maintain Your userName validation"} */}
              <label className="label">
                {errors?.userName?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.userName.message}
                  </span>
                )}
              </label>
            </div>

            <div class="form-control">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is Required",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Provide a valid Email",
                  },
                })}
                type="email"
                placeholder="email"
                class="input input-bordered"
              />
              {/* {errors.email?.type === 'required' && "Pls maintain your email validation"} */}
              <label className="label">
                {errors?.email?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                class="input input-bordered"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is Required",
                  },
                  minLength: {
                    value: 6,
                    message: "Must be 6 characters or longer",
                  },
                })}
              
              />
              {/* {errors.password?.type === "required" &&
                "Pls maintain your password validation"} */}
              <label className="label">
                {errors?.password?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
                {errors?.password?.type === "minLength" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </label>
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

            {registerErrorMessage}

            <div class="form-control mt-6">
              {/* <button value="submit" class="btn btn-primary">Register</button> */}
              <input
                className="btn btn-primary"
                type="submit"
                value="register"
              />
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
            <button  onClick={() => signInWithGoogle()} className="btn btn-glass hover:btn-accent">
              Continue with google
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Register;
