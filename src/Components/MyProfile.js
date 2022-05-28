import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={user.photoURL} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-3xl">{user.displayName}</h2>
                <h2 className='text-xl'>{user.email}</h2>
            </div>
        </div>
    );
};

export default MyProfile;