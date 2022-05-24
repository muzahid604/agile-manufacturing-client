import React from 'react';
import Summary from './Summary';

const BusinessSummary = () => {
    const summary = [
        {
            "_id": "62726c20aab9d99017caa76",
            "picture": "https://i.ibb.co/YTpWB6x/006-oil-1.png",
            "name": "Nationwide Branches",
            "quantity": "500+",
            "description": "Our branches have expanded all over the country and oversea.",
        },
        {
            "_id": "62726c20aab9d99017ca706",
            "picture": "https://i.ibb.co/1MMMJSj/018-greenhouse-1.png",
            "name": "Completed Projects",
            "description": "We are so proud of the enormous number of projects completed.",
            "quantity": "1000+",
        },
        {

            "_id": "62726c20aab9d9901caa706",
            "quantity": "2500+",
            "picture": "https://i.ibb.co/PQm1Kzr/001-trees.png",
            "name": "Trees Planted",
            "description": "Planting green trees for maintaining the sustainability.",
        },
        {
            "_id": "62726c20aab9d9917caa706",
            "quantity": "3000+",
            "picture": "https://i.ibb.co/2WqfV7h/007-reuse.png",
            "name": "Business Retails",
            "description": "Our network of retails can reach everywhere in this world.",
        }]
    return (
        <div>
            <h1 className='text-primary text-center text-5xl my-10 uppercase'>Numbers Speak for Themselves</h1>
            <div className='grid lg:grid-cols-4 gap-3 bg-slate-100'>
                {summary.map(s => <Summary key={s?._id}
                    summary={s}
                ></Summary>)}
            </div>
        </div>
    );
};

export default BusinessSummary;