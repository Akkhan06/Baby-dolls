import React, { useEffect } from 'react';
import Banner from '../../Main/Banner/Banner';
import Gallery from './Gallery';
import Category from './Category';
import SubHeader from './SubHeader';
import Team from './Team';
import Contacts from './Contacts';
import setTitle from '../../hook/TitleHook';
// import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Home = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS in the component
      }, []);
setTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <Gallery data-aos="fade-up"></Gallery>
            <Category></Category>
            <SubHeader></SubHeader>
            <Team></Team>
            <Contacts></Contacts>
        </div>
    );
};

export default Home;