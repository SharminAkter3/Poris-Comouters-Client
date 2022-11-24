import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const menuItems = <>
        <li className='font-semibold text-xl'><Link to='/'>Home</Link></li>
        <li className='font-semibold text-xl'><Link to='/login'>Login</Link></li>
        <li className='font-semibold text-xl'><Link to='/blog'>Blog</Link></li>
    </>

    return (
        <div>
            <div className="navbar bg-base-100 h-20 pt-12 mb-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost text-blue-800 font-bold normal-case text-3xl">Pori's Computers</Link>
                </div>
                <div className="navbar-end px-5 mx-5 hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Navbar;