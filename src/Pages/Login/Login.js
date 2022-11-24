import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from "react-router-dom";

const Login = () => {
    const { register, handleSubmit } = useForm();

    const handleLogin = data => {
        console.log(data)
    }

    return (
        <div className='h-[700px] flex justify-center items-center'>
            <div className='bg-base-100 shadow-2xl w-96 px-12 py-10 rounded-2xl'>
                <h2 className='text-3xl font-semibold text-center'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" {...register("email")} className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" {...register("password")} className="input input-bordered w-full max-w-xs" />
                        <label className="label">
                            <span className="label-text">Forget Password? </span>
                        </label>
                    </div>
                    <input className='btn btn-primary w-full' value='Login' type="submit" />
                </form>
                <p className='mt-3'>New to Pori's Computers <Link className='text-blue-700' to='/signup'>create new account</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline btn-primary w-full'>Continue With Google</button>
            </div>
        </div>
    );
};

export default Login;