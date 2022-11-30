import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../../Contexts/AuthProvider';
import toast from 'react-hot-toast';

const MyProduct = () => {
    const { user } = useContext(AuthContext)

    const { data: products = [], refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch(`https://poris-computer-server.vercel.app/products?email=${user?.email}`);
            const data = await res.json();
            console.log(data)
            return data;
        }
    })

    const handleAdvertised = (_id) => {

        fetch(`https://poris-computer-server.vercel.app/advertise/product/${_id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success('Product Advertise Success')
                }
            })
    }

    return (
        <div>
            <h3 className='text-2xl font-semibold mb-4'>My Product</h3>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, i) => <tr key={product._id}>
                                <th>{i + 1}</th>
                                <td>{product.name}</td>
                                <td>${product.resale_price}</td>
                                <td>
                                    {
                                        product?.sellStatus !== true ? 'Available' : 'Sold'
                                    }
                                </td>
                                <td>
                                    {
                                        product.advertise !== true ? <button onClick={() => handleAdvertised(product._id)} className='btn btn-outline btn-primary mr-2'>Advertise</button> : <button disabled className='btn btn-outline btn-primary mr-2'>Advertised</button>

                                    }
                                    <button className='btn btn-primary'>Delete</button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProduct;