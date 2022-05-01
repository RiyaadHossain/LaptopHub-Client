import React from 'react';
import Banner from '../Banner/Banner';
import ContactUs from '../ContactUs/ContactUs';
import InventoryItem from '../InventoryItem/InventoryItem';
import OurClient from '../OurClient/OurClient';

const Home = () => {
    return (
        <>
            <Banner />
            <InventoryItem />
            <OurClient />
            <ContactUs/>
        </>
    );
};

export default Home;