import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../../Contexts/AuthProvider';

const AddProduct = () => {
    const { user } = useContext(AuthContext);
    // const [addProduct, setAddProduct] = useState('');
    // console.log(user)

    const { data: categories = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/brands');
            const data = await res.json();
            console.log(data)
            return data;
        }
    })

    // useEffect((id) => {
    //     fetch(`http://localhost:5000/category/${id}`, {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify()
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             setAddProduct();
    //             if (data.acknowledged) {
    //                 toast.success("Product added Successfully");
    //             }
    //         })
    // }, []);

    const handleAddProduct = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const category_id = form.category_id.value;
        // const brand_name = form.brand_name.value;
        const productImage = form.productImage.value;
        const resale_price = form.resale_price.value;
        const original_price = form.original_price.value;
        const condition = form.condition.value;
        const seller_email = form.seller_email.value;
        const seller_phone = form.seller_phone.value;
        const location = form.location.value;
        const uses = form.uses.value;
        const seller_name = form.seller_name.value;
        const description = form.description.value;
        // console.log(name, seller_name, seller_email, productImage, resale_price, original_price, condition, seller_phone, location, uses, description);

        const productInfo = {
            name,
            category_id,
            seller_name,
            seller_email,
            resale_price: resale_price,
            original_price: original_price,
            img: productImage,
            description: description,
            condition,
            location,
            seller_phone: seller_phone,
            uses,
            advertise: false,
            sellStatus: false,
            postedOn: new Date()
        };
        console.log(productInfo)


        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success("Product added Successfully");
                }
            })
    }



    return (
        <div>
            <div>
                <h2 className='text-3xl font-bold m-4'>Add a Product</h2>
                <form onSubmit={handleAddProduct}>
                    <div>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3'>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Brand</span>
                                </label>
                                {/* <select name='category_id' className="select select-bordered w-full">
                                    <option disabled selected>What is your favourite brands</option>
                                    {
                                        categories.map(category => <option
                                            key={category._id}
                                            value={category._id}
                                        >{category.brand_name}</option>)
                                    }
                                </select> */}

                                <select name='category_id' className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" >
                                    <option>Please select a category</option>
                                    {
                                        categories?.map(category => <option key={category._id} value={category._id}>{category.brand_name}</option>)
                                    }
                                </select>

                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Product Name</span>
                                </label>
                                <input name='name' type="text" placeholder="Product Name" className="input input-bordered w-full" />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Original Price</span>
                                </label>
                                <input name='original_price' type="text" placeholder="Original Price" className="input input-bordered w-full" />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Resale Price</span>
                                </label>
                                <input name='resale_price' type="text" placeholder="Resale Price" className="input input-bordered w-full" />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Product Image</span>
                                </label>
                                <input name='productImage' type="text" placeholder="Product Image URL" className="input input-bordered w-full" />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Years of Purchase</span>
                                </label>
                                <input name='uses' type="text" placeholder="Years of Purchase" className="input input-bordered w-full" />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Location</span>
                                </label>
                                <input name='location' type="text" placeholder="Location" className="input input-bordered w-full" />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Seller Name</span>
                                </label>
                                <input name='seller_name' type="text" placeholder="Seller Name" defaultValue={user?.displayName} className="input input-bordered w-full" />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Seller Email</span>
                                </label>
                                <input name='seller_email' type="text" placeholder="Seller Email" defaultValue={user?.email} className="input input-bordered w-full" />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Phone Number</span>
                                </label>
                                <input name='seller_phone' type="text" placeholder="Phone Number" className="input input-bordered w-full" />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Condition</span>
                                </label>
                                <select name='condition' className="select select-bordered w-full">
                                    <option disabled selected>Condition</option>
                                    <option>Excellent</option>
                                    <option>Good</option>
                                    <option>Fair</option>
                                </select>
                            </div>
                        </div>
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea name='description' className="textarea textarea-bordered h-18 w-full mb-5" placeholder="Description"></textarea>
                        <input className='btn btn-outline btn-primary text-center w-full mb-4' type="submit" value="Add Product" />

                    </div>
                </form>
            </div>

        </div>
    );
};

export default AddProduct;