import React, { useContext, useState } from 'react';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
    const [show, setShow] = useState(false)
    const { logIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';
    const handleLogIn = (event) => {
        console.log('hello')
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        logIn(email, password)
            .then(result => {
                const logUser = result.user;
                console.log(logUser)
                form.reset()
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handleLogIn}>
                <div className="form-control">
                    <label htmlFor="">Email</label>
                    <input type="email" name="email" id="" required placeholder='Your Email' />
                </div>
                <div className="form-control">
                    <label htmlFor="">Password</label>
                    <input type={show ? "text" : "password"} name="password" id="" required placeholder='Your password' />
                    <p onClick={() => setShow(!show)}><small>
                        {
                            show ? <span>Hide Password</span> : <span>Show Password</span>
                        }

                    </small></p>
                </div>
                <input className='btn-submit' type="submit" value="Login" />
                <p><small>New To Ema-john <Link to="/singUp">Singup</Link></small></p>
            </form >
        </div >
    );
};

export default Login;