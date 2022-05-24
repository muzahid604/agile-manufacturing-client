import React, { useEffect, useState } from 'react';
import Tool from './Tool';

const Tools = () => {
    const [tools, setTools] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setTools(data))
    }, [])
    return (
        <div className='flex items-center flex-col my-12'>
            <div className=''>
                <h1 className='text-primary text-5xl my-10 text-center'>BEST SELLING TOOLS</h1>
                {tools?.slice(0, 3)?.map(tool => <Tool key={tool._id}
                    tool={tool}
                ></Tool>)}
            </div>
            <button className="lg:my-12 btn btn-primary uppercase text-dark font-bold bg-gradient-to-r from-secondary to-primary">More TOOls</button>
        </div>
    );
};

export default Tools;