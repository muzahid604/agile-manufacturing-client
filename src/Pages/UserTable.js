import React from 'react';

const UserTable = ({ u }) => {
    const { email, role } = u;
    const makeAdmin = () => {
        const url = `https://agile-manufacturing.herokuapp.com/users/admin/${email}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then(res => {
                console.log(res)
                return res.json()
            })
            .then(data => console.log(data))

        console.log()
    }
    return (
        <div>
            <tr>
                <td>{u?.email}</td>
                <td>{role !== 'admin' && <button onClick={makeAdmin} className='btn btn-xs'>Make Admin</button>}</td>
                <td><button className='btn btn-xs'>DELETE</button></td>
            </tr>
        </div>
    );
};

export default UserTable;