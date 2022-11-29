import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './productCard';
import ProductModal from './ProductModal';

const Category = () => {
    const products = useLoaderData();
    const [booking, setBooking] = useState({})
    // console.log(booking)
    // console.log(products)
    return (
        <div>
            <div>
                <h2 className='text-2xl text-center font-semibold text-blue-700'>Select Your Favourite Laptop</h2>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 m-10' >
                {
                    products.map(product => <ProductCard
                        key={product._id}
                        product={product}
                        setBooking={setBooking}
                    ></ProductCard>
                    )
                }
            </div>

            {
                booking &&
                <ProductModal
                    booking={booking}
                    setBooking={setBooking}
                ></ProductModal>
            }
        </div >
    );
};

export default Category;