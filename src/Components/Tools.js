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
        <div>
            <h1 className='text-primary text-5xl my-10 text-center'>BEST SELLING TOOLS</h1>
            <div className='grid grid-cols-2  items-center gap-5 justify-center'>

                {tools.map(tool => <Tool key={tool._id}
                    tool={tool}
                ></Tool>)}
            </div>
        </div>
    );
};

export default Tools;