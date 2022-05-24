import React from 'react';
import Product from '../Components/Product';
import useTools from '../hooks/useTools';

const Products = () => {
    const [tools] = useTools()
    return (
        <div >
            <h1 className='text-primary text-5xl my-10 text-center'>OUR TOOLS</h1>
            <div className='grid items-center grid-cols-1 lg:grid-cols-3 gap-5'>
                {tools?.map(tool => <Product key={tool?._id}
                    tool={tool}
                ></Product>)}
            </div>
            <button className="lg:my-12 btn btn-primary uppercase text-dark font-bold bg-gradient-to-r from-secondary to-primary">add tools</button>
        </div>
    );
};

export default Products;