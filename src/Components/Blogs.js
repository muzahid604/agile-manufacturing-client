import React from 'react';

const Blogs = () => {
    return (
        <div className='lg:m-10'>
            <div class="card lg:w-full w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title lg:text-2xl">How will you improve the performance of a React Application?</h2>
                    <p className='lg:text-xl'><li>Keeping component state local where necessary.</li>
                        <li>Memoizing React components to prevent unnecessary </li><li>re-renders.</li>

                        <li>Code-splitting in React using dynamic import()</li>
                        <li> Windowing or list virtualization in React.</li>
                        <li>                    Lazy loading images in React.</li>
                    </p>
                </div>
            </div>

            <div class="card lg:w-full w-96 mt-5 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title lg:text-2xl">What are the different ways to manage a state in a React application?</h2>
                    <p className='lg:text-xl'>
                        There are four main types of state you need to properly manage in your React apps:
                        <li>Local state.</li>
                        <li>Global state.</li>
                        <li>Server state.</li>
                        <li>URL state.</li>

                    </p>
                </div>
            </div>

            <div class="card lg:w-full w-96 mt-5 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title lg:text-2xl">How does prototypical inheritance work?</h2>
                    <p className='lg:text-xl'>
                        The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.
                    </p>
                </div>
            </div>

            <div class="card lg:w-full w-96 mt-5 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title lg:text-2xl">You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
                    <p className='lg:text-xl'>
                        Given an array arr[] of n integers, construct a Product Array prod[] (of same size) such that prod[i] is equal to the product of all the elements of arr[] except arr[i].
                    </p>
                </div>
            </div>

            <div class="card lg:w-full w-96 mt-5 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title lg:text-2xl">What is a unit test? Why should write unit tests?</h2>
                    <p className='lg:text-xl'>
                        Unit testing ensures that all code meets quality standards before it's deployed. This ensures a reliable engineering environment where quality is paramount. Over the course of the product development life cycle, unit testing saves time and money, and helps developers write better code, more efficiently.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;