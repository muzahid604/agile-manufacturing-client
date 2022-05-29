import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { Link, useNavigate } from 'react-router-dom';


const MyOrder = () => {
    const [user] = useAuthState(auth);
    const [order, setOrder] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        if (user) {
            fetch(`https://agile-manufacturing.herokuapp.com/order?customer=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                },
            })
                .then(res => {
                    console.log(res)
                    if (res.status === 401) {
                        navigate('/')
                    }
                    else if (res.status === 403) {

                        navigate('/')
                    }
                    return res.json()

                })
                .then(data => {

                    setOrder(data)
                })

        }
    }, [user])


    const handleDelete = id => {
        const confirm = window.confirm('Are you sure?');
        if (confirm) {
            const url = `https://agile-manufacturing.herokuapp.com/orders/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = order.filter(o => o._id !== id);
                    setOrder(remaining);
                })
        }
    }
    return (
        <div>
            <h1 className='text-5xl m-5 text-secondary text-center'>My Orders</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Payment</th>
                            <th></th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            order?.map((o, index) =>

                                <tr key={o?._id}>
                                    <th>{index + 1}</th>
                                    <td>{o?.displayName}</td>
                                    <td>{o?.productName?.slice(0, 30)}</td>
                                    <td>{o?.orderQuantity}</td>
                                    <td><Link to={`/payment/${o?._id}`} className='btn btn-xs'>Make Payment</Link></td>
                                    <td><button onClick={() => handleDelete(o._id)} className='btn btn-xs'>DELETE</button></td>
                                </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default MyOrder;