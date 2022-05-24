import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className='flex max-h-screen justify-around m-10 items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email'
                                    }
                                })}
                            />
                            <label className="label">
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters or longer'
                                    }
                                })}
                            />
                            {/* <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label> */}
                        </div>


                        <input className='btn w-full mt-5 max-w-xs text-white' type="submit" value="Login" />
                    </form>
                    <p><small>New to Doctors Portal <Link className='text-primary' to="/signup">Create New Account</Link></small></p>
                    <div className="divider">OR</div>
                    <button
                        className="btn btn-outline"
                    >Continue with Google</button>
                </div>
            </div>
            <div className='w-0 md:w-80 lg:w-96'>
                <img className='bg-base-100 shadow-xl rounded-lg' src="https://i.ibb.co/N6cZcpc/isaac-burke-bf-Ul4u9-Namo-unsplash.jpg" alt="" />
            </div>
        </div >

    );
};

export default Login;