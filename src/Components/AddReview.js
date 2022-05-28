import React from 'react';
import { Link } from 'react-router-dom';

const AddReview = () => {
    return (
        <div>
            <textarea className="textarea w-96 textarea-primary" placeholder="Please add a review"></textarea>
            <br />
            <Link to='/reviews' className='btn btn-xs'>ADD</Link>
        </div>
    );
};

export default AddReview;