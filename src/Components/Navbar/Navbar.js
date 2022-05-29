import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {
    const [user] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken')
    };
    const menubar = <>
        <Link to="/" className=' mx-3 hover:text-stone-100 lg:mt-3 font-bold'>HOME</Link>
        <Link to="/about" className=' mx-3 lg:mt-3 hover:text-stone-100 font-bold'>ABOUT</Link>

        {user ? <Link to="/tools" className=' mx-3 lg:mt-3 hover:text-stone-100 font-bold'>
            TOOLS
        </Link> : <p></p>}
        {user ? <Link to="/dashboard" className=' mx-3 lg:mt-3 hover:text-stone-100 font-bold'>
            DASHBOARD
        </Link> : <p></p>}

        <Link to="/reviews" className='font-bold mx-3 lg:mt-3 hover:text-stone-100'>
            REVIEWS                    </Link>
        <Link to="/blogs" className='font-bold mx-3 lg:mt-3 hover:text-stone-100 '>
            BLOGS
        </Link>
        <Link to="/contact" className=' font-bold mx-3 lg:mt-3  hover:text-stone-100 '>
            CONTACT
        </Link>
        <div className='sm:mt-5 lg:mt-0'>
            {user ? <Link to="/login" onClick={logout} className=' font-bold mx-3   btn hover:text-black'>LOGOUT</Link> : <Link to="/login" className=' font-bold mx-3   btn hover:text-black'>LOGIN</Link>}

        </div>
        <div>
            {user ? <div className="avatar online">
                <div className="w-12 rounded-full">
                    <img src={user.photoURL} alt='profile' />
                </div>
            </div> : <p></p>}
        </div>
    </>
    return (
        <div className="navbar bg-secondary">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menubar}
                    </ul>
                </div>
                <h1 className="text-xl text-black font-bold ml-5">AGILE MANUFACTURING</h1>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menubar}
                </ul>
            </div>
            <div className='navbar-end lg:hidden'>

            </div>
        </div>
    );
};

export default Navbar;