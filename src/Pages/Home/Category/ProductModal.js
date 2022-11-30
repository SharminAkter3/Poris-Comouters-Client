import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';
import toast from 'react-hot-toast';

const ProductModal = ({ booking, setBooking }) => {
    const { user } = useContext(AuthContext);
    console.log(user)
    const { name, resale_price, img } = booking;
    console.log(booking)

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const userName = user?.displayName;
        const email = user?.email;
        const price = form.price.value;
        const productImage = form.productImage.value;
        const phoneNumber = form.phoneNumber.value;
        const location = form.location.value;

        const booked = {
            productName: name,
            userName,
            email,
            price,
            productImage,
            phoneNumber,
            location
        }

        // console.log(booked)

        fetch('https://poris-computer-server.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booked)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setBooking(null)
                    toast.success("Product booked Successfully");
                }
            })

    }

    return (
        <>
            <input type="checkbox" id="product-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="product-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-2'>
                        <input name='name' type="text" defaultValue={user?.displayName} className="input input-bordered w-full" readOnly />
                        <input name='email' type="text" defaultValue={user?.email} className="input input-bordered w-full" readOnly />
                        <input name='price' type="text" defaultValue={resale_price} className="input input-bordered w-full" readOnly />
                        <input name='productImage' type="text" defaultValue={img} className="input input-bordered w-full" readOnly />
                        <input name='phoneNumber' type="text" placeholder="Phone Number" className="input input-bordered w-full" />
                        <input name='location' type="text" placeholder="Your Location" className="input input-bordered w-full" />

                        <input className='w-full mt-0 btn btn-outline btn-primary' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default ProductModal;