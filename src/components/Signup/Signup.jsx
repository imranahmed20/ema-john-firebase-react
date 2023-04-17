import React, { useContext, useState } from 'react';
import './signUp.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Signup = () => {
    const [error, setError] = useState('')

    const { createUser } = useContext(AuthContext)


    const handleSignUp = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value
        console.log(email, password, confirm)
        setError('')
        if (password !== confirm) {
            setError('Your password did not match')
            return
        }
        else if (password.length < 6) {
            setError('Password must be 6 characters or longer')
            return
        }
        createUser(email, password)
            .then(result => {
                const logUser = result.user;
                console.log(logUser)
            })
            .catch(error => {
                console.log(error)
                setError(error.message)
            })
    }
    return (
        <div className='form-container'>
            <h2 className='form-title'>SignUp</h2>
            <form onSubmit={handleSignUp}>
                <div className="form-control">
                    <label htmlFor="">Email</label>
                    <input type="email" name="email" id="" required placeholder='Your Email' />
                </div>
                <div className="form-control">
                    <label htmlFor="">Password</label>
                    <input type="password" name="password" id="" required placeholder='Your password' />
                </div>
                <div className="form-control">
                    <label htmlFor="">confirm Password</label>
                    <input type="password" name="confirm" id="" required placeholder='Your password' />
                </div>
                <input className='btn-submit' type="submit" value="SignUp" />
            </form>
            <p><small>Already have an account <Link to="/login">Login</Link></small></p>
            <p className='text-error'>{error}</p>
        </div>
    );
};

export default Signup;