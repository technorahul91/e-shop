import React from 'react';
import { Link, useNavigate } from 'react-router-dom'
const Nav = () => {
    const auth = localStorage.getItem('user');
    const navigate = useNavigate()
    const logout = () => {
        localStorage.clear();
        navigate("/sign-up")
    }
    return (
        <div>
        <img
        alt='logo'
        className='logo'
         src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-d3dy43x-0z5QD2hFkxNIThM0UwOzTbA9Bw&usqp=CAU'/>
            {auth ? <ul className='nav-ul'>
                <li><Link to="/">Products</Link></li>
                <li><Link to="/add">Add Product</Link></li>
                <li><Link to="/update">Update Product</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li> <Link onClick={logout} to="/sign-up">Logout ({JSON.parse(auth).name})</Link></li>
                </ul>
                :
                <ul className='nav-ul nav-right'>
                    <li><Link to="/sign-up">Sign Up</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            }

        </div>
    )
}

export default Nav