import React from 'react';
import Banner from '../../components/Banner/Banner';
import NewArrival from '../../components/Part/NewArrival/NewArrival';
import Parts from '../../components/Parts/Parts';
import Review from '../../components/Review/Review';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Parts></Parts>
            <NewArrival></NewArrival>
            <Review></Review>
            
        </div>
    );
};

export default Home;