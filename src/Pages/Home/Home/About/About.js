import React from 'react';

const About = () => {
    return (
        <div className="hero my-20 py-20">
            <div className="hero-content h-full bg-base-100 rounded-2xl flex-col lg:flex-row">
                <div className='relative w-1/2'>
                    <img src="https://ticktocktech.com/edmonton-computer-repair/wp-content/uploads/sites/11/2022/05/laptop-shop.jpg" alt='' className="w-4/5 h-full rounded-lg shadow-2xl" />
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-26-MtM3nbKB28VGDhYVskjNzhaD7pQeKgJvlSqKUAcj-ohB-GDm4vDTZ-6XbclUr7uw&usqp=CAU" alt='' className="absolute right-5 top-1/2 border-8 rounded-lg shadow-2xl" />
                </div>
                <div className='w-1/2'>
                    <h1 className="text-4xl font-bold text-blue-700">About Us!</h1>
                    <p className="py-6">Pori's Computers is the best used laptop shop in Bangladesh and a leading seller of all kinds of IT products. It's been a place of reliability for new and used laptops as well as other accessories since its beginning back in 2020.</p>
                    <p className='mb-5'>We, as a used laptop shop, supply A-grade used laptops imported from Dubai, Malaysia, and Singapore. With a goal of giving exceptional customer support, Pori's Computers is also working with multiple corporate clients.</p>
                    <button className="btn btn-primary">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;