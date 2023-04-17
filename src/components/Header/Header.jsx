import React, { useContext, useEffect } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(result => {

            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Login</Link>
                <Link to="/singUp">SignUp</Link>
                {user && < span > Welcome {user.email} <button onClick={handleLogOut}>Sign Out</button></span>}
            </div>
        </nav >
    );
};

export default Header;