import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import useAuth from '../../../components/hooks/useAuth';
import MenuBar from '../../shared/MenuBar/MenuBar';

const UserRegister = () => {
    const history = useHistory();
    const location = useLocation();
    const { register, handleSubmit, reset } = useForm();
    const { createUser, isLoading, signInUsingGoogle } = useAuth();
    const onSubmit = data => {
        console.log(data)
        const loading = toast.loading("Please wait...");
        createUser(data.email, data.password, data.name)
        .then(res => {
            if(res?.email){
                toast.success("logged In", {
                    id: loading,
                })
                swal("Successfully Logged In!", "You have been successfully LoggedIn.", "success")
                .then(proceed => {
                    if(proceed){
                        reset();
                        const destination = location?.state?.from || '/dashboard'
                        history.replace(destination)
                    }
                })
            }else {
                swal("Failed!", "Something went wrong! Please try again.", "error", { dangerMode: true })
                toast.error('Something went wrong!', {
                    id: loading,
                });
            }
        })
    };

    const handleGoogleLogin = () => {
        signInUsingGoogle(location, history);
    }
    return (
        <div className="register-page">
        <MenuBar/>
        <div className="login-section">
            <div className="imgBx">
                <img src="https://image.freepik.com/free-photo/indian-woman-working-laptop-street-cafe-wearing-stylish-smart-clothes-jacket-glasses_1157-48457.jpg" alt="" />
            </div>
            <div className="contentBx">
                <div className="formBx">
                    <h2>Register</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="inputBx">
                            <span>Your Name</span>
                            <input type="text" {...register("name")}/>
                        </div>
                        <div className="inputBx">
                            <span>Email </span>
                            <input type="text" {...register("email")}/>
                        </div>
                        <div className="inputBx">
                            <span>Password</span>
                            <input type="password" {...register("password")}/>
                        </div>
                        <div className="remember">
                            <label><input type="checkbox" /> Remember me</label>
                        </div>
                        <div className="inputBx">
                            <input type="submit" value="Sign in" name="" />
                        </div>
                        <div className="inputBx">
                            <p>Already Registered ? <Link to="/login">Sign in</Link> </p>
                        </div>
                    </form>
                    <Toaster/>
                    <h3>Login with social media</h3>
                    <ul className="sci">
                        <li><img src="https://cdn-icons-png.flaticon.com/512/20/20837.png" alt="" /></li>
                        <li onClick={handleGoogleLogin}><img src="https://cdn-icons-png.flaticon.com/512/2991/2991147.png" alt="" /></li>
                        <li><img src="https://cdn-icons-png.flaticon.com/512/733/733609.png" alt="" /></li>
                    </ul>
                </div>
            </div>
        </div>
        </div>
    );
};

export default UserRegister;