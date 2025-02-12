
import { FcGoogle } from "react-icons/fc";
import login from '../assets/login.json';
import Lottie from 'lottie-react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from '../customHooks/useAuth';
import { GoogleAuthProvider } from "firebase/auth";
import Swal from 'sweetalert2'

const Login = () => {
    const { googleSign, signInUser } = useAuth();
    const location = useLocation();
    //console.log(location);
    const navigate = useNavigate();
    const handleSubmit = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInUser(email, password)
            .then(result => {
                console.log(result.user);
                Swal.fire({
                    title: "Valid Information",
                    text: "User Logged in Successfully!",
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
                    title: 'Invalid Information',
                    text: 'Login Failed. Try with valid inforamtion.',
                    icon: 'error',
                    confirmButtonText: 'Try Again'
                });
            })
    }
    const handleGoogle = () => {
        const provider = new GoogleAuthProvider;
        googleSign(provider)
            .then((result) => {
                // console.log(result.user);
                Swal.fire({
                    title: "Correct Credentials",
                    text: "Login Successfully!",
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
    return (
        <div className='w-10/12 max-w-screen-lg mx-auto rounded-2xl my-5 shadow-xl bg-orange-100 dark:bg-orange-600 dark:bg-opacity-50 '>
            <div className='grid p-5 md:grid-cols-2 md:p-10'>
                <div className='w-[50%] md:w-auto mx-auto my-auto'>
                    <Lottie animationData={login}></Lottie>
                </div>
                <div className='mx-5 md:mx-10 lg:mx-20'>
                    <h2 className='text-3xl font-bold text-center dark:text-white'>Log In</h2>
                    <div>
                        <form onSubmit={handleSubmit}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text dark:text-white">Email</span>
                                </label>
                                <input type="email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text dark:text-white">Password</span>
                                </label>
                                <input type="password" name="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-orange-600 text-white border-none">Login</button>
                            </div>
                            <div className='text-center py-3'>
                                <span className="label-text dark:text-white">Don't have an account? <Link to={'/register'} className='text-orange-600 font-bold' state={location?.state}>Register</Link> </span>
                            </div>
                        </form>
                    </div>
                    <div>
                        <div className="divider dark:divider-neutral font-semibold dark:text-white">OR</div>
                        <div className='flex justify-center pt-5'>
                            <button className='btn text-white bg-black' onClick={handleGoogle}><FcGoogle className='text-xl' /> Continue with Google</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;