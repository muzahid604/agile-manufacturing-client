import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const DashBoard = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content m-4">
                <label for="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">OPEN</label>
                {/* <!-- Page content here --> */}

                <Outlet />
            </div>
            <div className="drawer-side">
                <label for="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li className='mx-3 lg:mt-3 hover:text-yellow-700 font-bold bg-emerald-300 rounded-lg my-3'><Link to='/dashboard'>My Orders</Link></li>
                    <li className='mx-3 lg:mt-3 hover:text-yellow-700 font-bold bg-emerald-300 rounded-lg my-3'><Link to='/dashboard/addreview'>Add a review</Link></li>
                    <li className='mx-3 lg:mt-3 hover:text-yellow-700 font-bold bg-emerald-300 rounded-lg my-3'><Link to='/dashboard/myprofile'>My Profile</Link></li>
                    <li className='mx-3 lg:mt-3 hover:text-yellow-700 font-bold bg-emerald-300 rounded-lg my-3'><Link to='/dashboard/users'>Users</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default DashBoard;