
import axios from 'axios';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { useNavigate } from 'react-router-dom';

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_apiUrl, // Replace with your API base URL
    withCredentials: true,
});
const useAxiosSecure = () => {
    const { signOutUser } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(()=>{
        axiosInstance.interceptors.response.use(
            reponse => { return reponse},
            error => {
                if( error.status === 401 || error.status === 403){
                    signOutUser()
                    .then(()=>{
                        navigate('/login');
                    })
                    .catch(err => {
                        // console.log(err)
                    });
                    
                }
                return Promise.reject(error);
            }
        );
    }, [])

    return axiosInstance;
};

export default useAxiosSecure;