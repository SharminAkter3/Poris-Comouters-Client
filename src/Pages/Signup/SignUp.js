import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
// import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../Contexts/AuthProvider';
import toast from 'react-hot-toast';
import { GoogleAuthProvider } from 'firebase/auth';
import useToken from '../../hooks/useToken';

const SignUp = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUser, providerLogin } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('');
    const [createdUserEmail, setCreatedUserEmail] = useState('');
    const [token] = useToken(createdUserEmail);
    const navigate = useNavigate();

    if (token) {
        navigate('/');
    }

    const handleSignUp = (data) => {
        console.log(data);
        setSignUpError('');
        createUser(data.email, data.password)

            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success("User Created Successfully")
                const userInfo = {
                    displayName: data.name,
                }
                updateUser(userInfo)
                    .then(() => {
                        console.log(userInfo)
                        saveUser(data?.name, data?.email, data?.role);
                        saveUser2(data?.name, data?.email, data?.role);
                    })
                    .catch(error => console.error(error));
            })
            .catch(error => {
                console.error(error)
                setSignUpError(error.message)
            })
    }

    //save seller to database
    const saveUser = (name, email, role) => {
        const user = { name, email, role };
        fetch('https://poris-computer-server.vercel.app/sellers', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setCreatedUserEmail(email)
                console.log('save user', data);
            })
    };

    //save seller to database
    const saveUser2 = (name, email, role) => {
        const user = { name, email, role };
        fetch('https://poris-computer-server.vercel.app/buyers', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setCreatedUserEmail(email)
                console.log('save user', data);
            })
    }


    const googleProvider = new GoogleAuthProvider()

    // handle Sign Up with google
    const handleGoogleRegister = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success("User Created Successfully")
            })
            .catch(error => {
                console.error(error)
                setSignUpError(error.message)
            })
    }


    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='bg-base-100 shadow-2xl w-96 px-12 py-10 rounded-2xl'>
                <h2 className='text-3xl font-semibold text-center'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text"
                            {...register("name", {
                                required: "Name is required"
                            })}
                            placeholder='Your Name'
                            className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-600' role="alert">{errors.name?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email"
                            {...register("email", {
                                required: "Email Address is required"
                            })}
                            placeholder='Your Email'
                            className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: "Password must be 6 character or longer" }
                            })}
                            placeholder='Your Password'
                            className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-600' role="alert">{errors.password?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Register As</span>
                        </label>

                        <select {...register("role", {
                            required: "User role is required",
                        })}
                            className="select select-bordered w-full max-w-xs">
                            <option value='buyer'>Buyer</option>
                            <option value='seller'>Seller</option>
                        </select>
                    </div>
                    <input className='btn btn-primary w-full mt-3' value='Sign Up' type="submit" />
                    {signUpError && <p className='text-red-600'> {signUpError}</p>}
                </form>
                <p className='mt-3'>Already have an account<Link className='text-blue-700' to='/login'> please login</Link></p>
                <div className="divider">OR</div>
                <button onClick={handleGoogleRegister} className='btn btn-outline btn-primary w-full'> Register With Google</button>
            </div>
        </div>
    );
};

export default SignUp;