import React from 'react';
// import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CategoriesCard = ({ categori }) => {
    const { _id, brand_name, brand_img } = categori;
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure className='p-5'><img src={brand_img} alt="Album" /></figure>
            <div className="card-body mt-10">
                <h2 className="card-title font-bold"> Brand: {brand_name}</h2>
                <div className="card-actions justify-end">

                    <Link to={`/category/${_id}`}>
                        <button className='btn btn-outline btn-primary'>See More</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CategoriesCard;