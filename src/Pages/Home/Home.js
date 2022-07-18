import React from 'react';
import Banner from './Banner';
import Info from './Info';
import InfoBan from './InfoBan';
import MakeAppointment from './MakeAppointment';
import Services from './Services';

const Home = () => {
    return (
        <div className='px-12'>
            
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <InfoBan></InfoBan>
            <MakeAppointment></MakeAppointment>
           
        </div>
    );
};

export default Home;