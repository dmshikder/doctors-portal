import React from 'react';

import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const SignUp = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
      } = useForm();
      const [signInWithGoogle, gUser,gLoading, gError] = useSignInWithGoogle(auth);
      const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const [updateProfile, updating, updateError] = useUpdateProfile(auth);

      const naviate = useNavigate();
    
      let signInError;
    
      if(loading || gLoading || updating){
        return <Loading/>
      }
      if(error || gError || updateError){
        signInError = <p className="text-red-500"><small>{error?.message || gError?.message}</small></p>
      }
    
      if (user || gUser) {
        console.log(user || gUser);
      }
      const onSubmit = async (data) => {
        console.log(data);
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({displayName: data.name});
        console.log('update done');
        naviate('/appointment');

      };
    return (
        <div className="flex justify-center items-center h-screen">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">Sign Up</h2>
          <form onSubmit={handleSubmit(onSubmit)}>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Name</span>
               
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="input input-bordered w-full max-w-xs"
                {...register("name", {
                    required:{
                        value:true,
                        message: 'Name is required'
                    }
                  })}
              />
              <label className="label">
              {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
             
                
                
              </label>
            </div>
            
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
               
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full max-w-xs"
                {...register("email", {
                    required:{
                        value:true,
                        message: 'Email is required'
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: 'Provide a valid email'
                    }
                  })}
              />
              <label className="label">
              {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
              {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                
                
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
               
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="input input-bordered w-full max-w-xs"
                {...register("password", {
                    required:{
                        value:true,
                        message: 'Password is required'
                    },
                    minLength: {
                      value: 6,
                      message: 'Must be 6 characters or longer'
                    }
                  })}
              />
              <label className="label">
              {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
              {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                
                
              </label>
            </div>
            {signInError}
           
            <input className="btn w-full max-w-xs" type="submit" value='Sign Up' />
          </form>
          <p>Already have an account? <Link className="text-secondary" to='/login'>Please Login</Link></p>
          <div className="divider">OR</div>
          <button
            onClick={() => createUserWithEmailAndPassword()}
            className="btn btn-outline"
          >
            Continue with GOOGLE
          </button>
        </div>
      </div>
    </div>
    );
};

export default SignUp;