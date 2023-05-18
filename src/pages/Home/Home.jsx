import React from 'react';
import Banner from '../../Main/Banner/Banner';
import Gallery from './Gallery';
import Category from './Category';
import SubHeader from './SubHeader';
import Team from './Team';
import Contacts from './Contacts';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <Category></Category>
            <SubHeader></SubHeader>
            <Team></Team>
            <Contacts></Contacts>
        </div>
    );
};

export default Home;