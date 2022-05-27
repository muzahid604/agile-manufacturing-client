import React, { useEffect, useState } from 'react';
import UserTable from './UserTable';

const Users = () => {
    const [user, setUser] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/users', {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then(res => res.json())
            .then(data => setUser(data))
    }, [])



    return (
        <div>
            <h2 className="text-center text-3xl">All Users</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            user?.map((u) => <UserTable key={u._id}
                                u={u}
                            ></UserTable>

                            )
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;