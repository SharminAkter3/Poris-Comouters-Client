import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../../Contexts/AuthProvider';

const MyProduct = () => {
    const { user } = useContext(AuthContext)

    const { data: products = [] } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/products?name=${user?.displayName}`);
            const data = await res.json();
            console.log(data)
            return data;
        }
    })

    return (
        <div>
            <h3 className='text-2xl font-semibold'>My Product</h3>
        </div>
    );
};

export default MyProduct;