import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading";
import ReviewDetail from "./ReviewDetail";

const Review = () => {
    // // const [reviews, setReviews] = useState([]);
    // console.log(reviews);
    const { data: review, isLoading } = useQuery('review', () => fetch('http://localhost:5000/review', {
        
            method: 'GET',
            headers:{
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
    }).then(res => res.json()));
    console.log(review);

    if (isLoading) {
        return <Loading></Loading>
    }
  return (
      <>
       <div class="hero mb-14 bg-base-200">
      <div class="hero-content text-center py-14">
        <div class="max-w-md">
          <h1 class="text-5xl font-bold tracking-wide"> Reviews</h1>
          {/* <h5 class="text-2xl tracking-wide">Awesome Reviews</h5> */}
          <p class="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi. Now the amonunt of review is : {review.length}
          </p>
      
          
          {/* <button class="btn btn-primary">Get Started</button> */}
         
        </div>
      </div>
    </div>
       <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-7 mb-32">
              
               {
                   review.map(review=><ReviewDetail key={review._id} review={review}></ReviewDetail>)
               }
          </div>
      </>
   
  );
};

export default Review;
