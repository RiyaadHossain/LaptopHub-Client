import React from 'react';
import Banner from '../Banner/Banner';
import ContactUs from '../ContactUs/ContactUs';
import InventoryItem from '../InventoryItem/InventoryItem';
import OurClient from '../OurClient/OurClient';
import OurTeam from '../OurTeam/OurTeam';

const Home = () => {
    return (
        <>
            <Banner />
            <InventoryItem />
            <OurTeam/>
            <OurClient />
            <ContactUs/>
        </>
    );
};

export default Home;