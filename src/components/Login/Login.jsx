import React, { useContext } from 'react';
import './Login.css'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
    const { logIn } = useContext(AuthContext)
    const navigate = useNavigate()
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
                navigate('/')
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
                    <input type="password" name="password" id="" required placeholder='Your password' />
                </div>
                <input className='btn-submit' type="submit" value="Login" />
                <p><small>New To Ema-john <Link to="/singUp">Singup</Link></small></p>
            </form>
        </div>
    );
};

export default Login;