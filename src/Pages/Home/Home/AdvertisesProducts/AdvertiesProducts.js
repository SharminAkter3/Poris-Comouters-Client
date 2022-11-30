import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AdvertiesProducts = ({ setBooking }) => {

    const { data: products = [], isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/advertised_product');
            const data = await res.json();
            console.log(data)
            return data;
        }
    });

    if (products.length > 0) {
        return (
            <div>
                <h2 className='text-2xl font-semibold text-blue-700 text-center m-5'>Adverties Product</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {
                        products.map(product => <div key={product._id}>

                            <div className="card w-full bg-base-100 shadow-xl " >
                                <figure><img className='w-full h-60 mb-0' src={product.img} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <p className='font-bold mt-0'>{product.name}</p>
                                    <small>{product.description}</small>
                                    <div className='d-flex'>
                                        <div>
                                            <small className='mr-4'>Seller Name: {product.seller_name}</small>
                                            <small>Location: {product.location}</small>
                                        </div>
                                        <div>
                                            <small className='mr-4'>Years Of Uses: {product.uses}</small>
                                            <small>Condition: {product.condition}</small>
                                        </div>
                                    </div>

                                    <small>Original Price: ${product.original_price}</small>
                                    <small>Resale Price: ${product.resale_price}</small>
                                    <small>Post Date: {product.post_date}</small>

                                    <div>
                                        <label htmlFor="product-modal" className="btn btn-outline btn-primary w-full" onClick={() => setBooking(products)}>Book Now</label>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }
                </div>

            </div>
        )
    }

};

export default AdvertiesProducts;
