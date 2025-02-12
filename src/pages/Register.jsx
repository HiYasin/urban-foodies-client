
import { FcGoogle } from "react-icons/fc";
import register from '../assets/register.json';
import Lottie from 'lottie-react';
import { Link, useLocation, useNavigate } from "react-router-dom";

import Swal from 'sweetalert2'
import useAuth from "../customHooks/useAuth";
import { GoogleAuthProvider } from "firebase/auth";

const Register = () => {
    const { user, googleSign, updateInfo, createUser } = useAuth();
    const location = useLocation();
    //console.log(location)
    const navigate = useNavigate();
    const passwordValidation = (password) => {
        const errors = [];

        // Check for at least one uppercase letter
        if (!/[A-Z]/.test(password)) {
            errors.push('<li>Use at least one uppercase letter.</li>');
        }

        // Check for at least one lowercase letter
        if (!/[a-z]/.test(password)) {
            errors.push('<li>Use at least one lowercase letter.</li>');
        }

        // Check for minimum length of 6
        if (password.length < 6) {
            errors.push('<li>Minimum length of 6 characters.</li>');
        }

        return errors;
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const photoURL = event.target.photoURL.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        const passwordErrors = passwordValidation(password);
        if (passwordErrors.length > 0) {
            Swal.fire({
                title: 'Password Invalid',
                html: `<ul>${passwordErrors.join('')}</ul>`, // Join errors into a single string
                icon: 'error',
                confirmButtonText: 'Try Again'
            });
        } else {
            createUser(email, password)
                .then(result => {
                    //console.log(result.user)
                    updateInfo(name, photoURL);
                    Swal.fire({
                        title: "Registration Completed",
                        text: "User Registered And Logged in Successfully!",
                        icon: "success",
                        confirmButtonText: "Ok",
                        confirmButtonColor: "#ea580c",
                    }).then((result) => {
                        if (result.isConfirmed) {
                            navigate(location?.state ? location.state : "/");
                        }
                    });
                })
                .catch(err => {
                    //console.log(err);
                    Swal.fire({
                        title: "Error",
                        text: "Something error occured Or, Email is already used. Please try again.",
                        icon: "error",
                        confirmButtonText: "Try Again"
                    })
                });
            //console.log(password);
        }
    }

    const handleGoogle = () => {
        const provider = new GoogleAuthProvider;
        googleSign(provider)
            .then((result) => {
                // console.log(result.user);
                Swal.fire({
                    title: "Registration Completed",
                    text: "User Registered And Logged in Successfully!",
                    icon: "success",
                    confirmButtonText: "Ok",
                    confirmButtonColor: "#ea580c",
                }).then((result) => {
                    if (result.isConfirmed) {
                        navigate(location?.state ? location.state : "/");
                    }
                });
            })
            .catch((error) => {
                //console.log(error);
                Swal.fire({
                    title: "Error",
                    text: "Something error occured. Please try again.",
                    icon: "error",
                    confirmButtonText: "Try Again"
                })
            });
    };
    //console.log(user);
    //const tempUser = { email: user?.email, name: user?.displayName, photoURL: user?.photoURL };
    //console.log(tempUser);
    return (
        <div className='w-10/12 max-w-screen-lg mx-auto rounded-2xl my-5 shadow-xl bg-orange-100 dark:bg-orange-600 dark:bg-opacity-50 '>
            <div className='grid p-5 md:grid-cols-2 md:p-10'>
                <div className='w-[50%] md:w-auto mx-auto my-auto'>
                    <Lottie animationData={register}></Lottie>
                </div>
                <div className='mx-5 md:mx-10 lg:mx-20'>
                    <h2 className='text-3xl font-bold text-center dark:text-white'>Register</h2>
                    <div>
                        <form onSubmit={handleSubmit}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text dark:text-white">Name</span>
                                </label>
                                <input type="text" name="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text dark:text-white">Email</span>
                                </label>
                                <input type="email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text dark:text-white">Photo URL</span>
                                </label>
                                <input type="text" name="photoURL" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text dark:text-white">Password</span>
                                </label>
                                <input type="password" name="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-orange-600 text-white border-none">Register</button>
                            </div>
                            <div className='text-center py-3'>
                                <span className="label-text dark:text-white">Already have an account? <Link to={'/login'} className='text-orange-600 font-bold'>Login</Link> </span>
                            </div>
                        </form>
                    </div>
                    <div>
                        <div className="divider font-semibold dark:text-white dark:divider-neutral">OR</div>
                        <div className='flex justify-center pt-5'>
                            <button className='btn text-white bg-black' onClick={handleGoogle}><FcGoogle className='text-xl' /> Continue with Google</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;