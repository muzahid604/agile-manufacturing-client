import React from 'react';
import Review from './Review';

const Reviews = () => {
    const reviews = [
        {
            "_id": "62726c20aab9d99017caa76",
            "name": "Justin baber",
            "picture": "https://tractor.thememove.com/wp-content/uploads/2018/07/testi-04-500x380.jpg",
            "description": "Their services are among the best to be honest. Making everything simple and easy, even for beginners and novices like me and my wife.",
        },
        {
            "_id": "62726c20aab9d99017ca706",
            "name": "Justin kubra",
            "picture": "	https://tractor.thememove.com/wp-content/uploads/2018/07/testi-02-500x380.jpg",
            "description": "Their services are among the best to be honest. Making everything simple and easy, even for beginners and novices like me and my wife.",
        },
        {

            "_id": "62726c20aab9d9901caa706",
            "picture": "https://tractor.thememove.com/wp-content/uploads/2018/07/testi-01-500x380.jpg",
            "name": "Justin dipjol",
            "description": "Their services are among the best to be honest. Making everything simple and easy, even for beginners and novices like me and my wife.",
        }]
    return (
        <div className='mt-5 mb-16 '>
            <div className='flex items-center justify-center'>
                <img className='lg:h-16 mt-8 h-0' src="https://media.istockphoto.com/vectors/search-icon-on-a-report-board-audit-review-check-list-icon-vector-id1165492465?k=20&m=1165492465&s=170667a&w=0&h=FEl0wBCViorMvkAd-SeIcK4ogdzufG7OquwAeba_ygk=" alt="" />
                <h1 className='text-primary text-center text-3xl lg:text-5xl mt-10 mb-5 uppercase'>Happy Customers Said</h1>
            </div>
            <div className='grid m-5 lg:grid-cols-3 gap-6 items-center justify-center'>
                {reviews.map(review => <Review
                    key={review?._id}
                    review={review}
                ></Review>)}
            </div>
        </div>
    );
};

export default Reviews;