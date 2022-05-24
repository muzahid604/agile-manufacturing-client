import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const menubar = <>
        <Link to="/" className=' mx-3 hover:text-yellow-700 lg:mt-3 font-bold'>HOME</Link>
        <Link to="/about" className=' mx-3 lg:mt-3 hover:text-yellow-700 font-bold'>ABOUT</Link>

        <Link to="/services" className=' mx-3 lg:mt-3 hover:text-yellow-700 font-bold'>
            SERVICES
        </Link>
        <Link to="/pricing" className='font-bold mx-3 lg:mt-3 hover:text-yellow-700'>
            CHECKOUT                        </Link>
        <Link to="/blogs" className='font-bold mx-3 lg:mt-3 hover:text-yellow-700 '>
            BLOGS
        </Link>
        <Link to="/contact" className=' font-bold mx-3 lg:mt-3  hover:text-yellow-700 '>
            CONTACT
        </Link>
        <Link to="/mission" className='font-bold mx-3 lg:mt-3 hover:text-yellow-700 '>
            MISSION
        </Link>
        <div className='sm:mt-5 lg:mt-0'>
            <Link to="/login" className=' font-bold mx-3   btn hover:text-black'>LOGIN</Link>
            <Link to="/register" className='font-bold mx-3 btn  hover:text-black'>REGISTER</Link>
        </div>
    </>
    return (
        <div class="navbar bg-zinc-400">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menubar}
                    </ul>
                </div>
                <h1 class="text-xl text-black font-bold ml-5">AGILE MANUFACTURING</h1>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    {menubar}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;