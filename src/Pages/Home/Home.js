import React from 'react';
import Banner from '../../components/Banner/Banner';
import BusinessSummery from '../../components/BusinessSummery/BusinessSummery';
import NewArrival from '../../components/Part/NewArrival/NewArrival';
import Parts from '../../components/Parts/Parts';
import Review from '../../components/Review/Review';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Parts></Parts>
            <BusinessSummery></BusinessSummery>
            <NewArrival></NewArrival>
            <Review></Review>
            
        </div>
    );
};

export default Home;