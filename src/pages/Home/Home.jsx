import React from 'react';
import Banner from '../../Main/Banner/Banner';
import Gallery from './Gallery';
import Category from './Category';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <Category></Category>
        </div>
    );
};

export default Home;