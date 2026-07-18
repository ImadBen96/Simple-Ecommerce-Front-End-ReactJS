import React, {useState} from 'react';
import "./css/loginSignup.css"
import {Link, useNavigate} from "react-router-dom";
import {axiosClient} from "../../services/api/axios.js";
import {message} from "antd";

function LoginSignup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [errors,setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();


    const handleNameChange = (event) => {
        setName(event.target.value);
    }
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }
    const handleSubmit =  (event) => {
        event.preventDefault();
        setIsLoading(true);
        if (name === '' || email === '' || password === '') {
            message.error("Please Complete All Fields")
            setIsLoading(false)
            return ;
        }
        axiosClient.post("api/register",{name,email,password}).then((res)=> {
            // console.log(res.data.token)
            setIsLoading(false)
            window.localStorage.setItem('token', res.data.token);
            navigate("/");

        }).catch((errors)=> {
            console.log(errors)
        })
    }
    return (
        <div className="loginsingnup">
            <div className="header-about">
                <h1>SignUp Page</h1>
            </div>
            <nav className="breadcrumb">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                     strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                    <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
                <Link to="/">Home</Link>
                {/*<a href="#">Home</a>*/}
                <span>•</span>
                <span className="current">SignUp  Page</span>
            </nav>
            <div className="loginsingnup-container">
                <h1>Sign Up</h1>
                <form onSubmit={handleSubmit}>
                    <div className="loginsignup-fields">
                        <input type="text" onChange={handleNameChange} value={name} placeholder="You Name"/>
                        <input type="email" onChange={handleEmailChange}
                               value={email} placeholder="Email Address"
                        />
                        <input type="password" onChange={handlePasswordChange}
                               value={password} placeholder="You Password"
                        />
                    </div>
                    <button disabled={isLoading} className="form-control">
                        {isLoading ? "Loading..." : "Sign Up"}
                    </button>
                </form>
                <Link to={"/SignIn"} className="loginsignup-login">Already Have An Account? <span>Login Here</span></Link>
                <div className="loginsignup-agree">
                    <input type="checkbox" name="" id="" />
                    <p>By Continuing, I Agree To The Terms Of Use & Privacy Policy.</p>
                </div>
            </div>
        </div>
    );
}

export default LoginSignup;