import React from 'react';
import useTools from '../hooks/useTools';
import Tool from './Tool';
import { Link } from 'react-router-dom';

const Tools = () => {
    const [tools] = useTools()
    return (
        <div className='flex items-center flex-col my-12'>
            <div className=''>
                <h1 className='text-primary text-5xl my-10 text-center'>BEST SELLING TOOLS</h1>
                {tools?.slice(0, 3)?.map(tool => <Tool key={tool._id}
                    tool={tool}
                ></Tool>)}
            </div>
            <Link to='/tools' className="lg:my-12 btn btn-primary uppercase text-dark font-bold bg-gradient-to-r from-secondary to-primary">More TOOls</Link>
        </div>
    );
};

export default Tools;