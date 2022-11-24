import React from 'react';

const CategoriesCard = ({ category }) => {
    const { brand_name, brand_img } = category;
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure className='p-5'><img src={brand_img} alt="Album" /></figure>
            <div className="card-body mt-10">
                <h2 className="card-title font-bold"> Brand: {brand_name}</h2>
                <div className="card-actions justify-end">
                    <button className="btn btn-outline btn-primary mb-0">See More</button>
                </div>
            </div>
        </div>
    );
};

export default CategoriesCard;