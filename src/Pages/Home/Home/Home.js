import React from 'react';
import About from './About/About';
import AdvertiesProducts from './AdvertisesProducts/AdvertiesProducts';
import Banner from './Banner/Banner';
import Categories from './Categories/Categories';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AdvertiesProducts></AdvertiesProducts>
            <Categories></Categories>
            <About></About>
        </div>
    );
};

export default Home;