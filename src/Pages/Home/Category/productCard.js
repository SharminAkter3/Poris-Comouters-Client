import React from 'react';

const ProductCard = ({ product, setBooking }) => {
    const { img, name, description, location, original_price, resale_price, uses, post_date, seller_name, seller_email, seller_phone, condition } = product;
    return (
        <div>
            < div className="card w-full bg-base-100 shadow-xl" >
                <figure><img className='w-full h-60 mb-0' src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <p className='font-bold mt-0'>{name}</p>
                    <small>{description}</small>
                    <div className='d-flex'>
                        <div>
                            <small className='mr-4'>Seller Name: {seller_name}</small>
                            <small>Location: {location}</small>
                        </div>
                        <div>
                            <small className='mr-4'>Years Of Uses: {uses}</small>
                            <small>Condition: {condition}</small>
                        </div>
                    </div>

                    <small>Original Price: ${original_price}</small>
                    <small>Resale Price: ${resale_price}</small>
                    <small>Post Date: {post_date}</small>

                    <div>
                        <label htmlFor="product-modal" className="btn btn-outline btn-primary w-full" onClick={() => setBooking(product)}>Book Now</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;