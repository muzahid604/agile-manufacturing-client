import React, { useEffect, useState } from 'react';
import UserTable from './UserTable';

const Users = () => {
    const [user, setUser] = useState([]);
    useEffect(() => {
        fetch('https://floating-springs-32258.herokuapp.com/users', {
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
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Email</th>
                            <th></th>
                            <th></th>
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