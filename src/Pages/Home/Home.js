import React from 'react';
import Banner from '../../components/Banner/Banner';
import BusinessSummery from '../../components/BusinessSummery/BusinessSummery';
import NewArrival from '../../components/Part/NewArrival/NewArrival';
import Parts from '../../components/Parts/Parts';
import Review from '../../components/Review/Review';
import Subscription from '../../components/Subscripion/Subscription';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Parts></Parts>
          
            <NewArrival></NewArrival>
            <Review></Review>
            <BusinessSummery></BusinessSummery>
            <Subscription></Subscription>
            
        </div>
    );
};

export default Home;