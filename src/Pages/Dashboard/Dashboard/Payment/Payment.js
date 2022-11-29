import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js'
import { useLoaderData, useNavigation } from 'react-router-dom';


const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
console.log(stripePromise);

const Payment = () => {
    const booking = useLoaderData();
    // const navigation = useNavigation();
    console.log(booking)
    return (
        <div>
            <h3 className='text-2xl font-semibold'>Payment for {booking.productName}</h3>
            <p className='text-xl'>Please Pay ${booking.price}</p>
            <div className='w-96 my-6'>
                <Elements stripe={stripePromise}>
                    {/* <CheckoutForm
                        booking={booking}
                    /> */}
                </Elements>
            </div>
        </div>
    );
};

export default Payment;