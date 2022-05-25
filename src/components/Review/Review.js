import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../firebase.init";
import Loading from "../../Shared/Loading";
import ReviewDetail from "./ReviewDetail";

const Review = () => {
    const [user] = useAuthState(auth);
  const [review, setReview] = useState([]);
  console.log(review);
  // console.log(reviews);

  // const { data: review, isLoading } = useQuery('review', () => fetch('http://localhost:5000/review', {

  //         method: 'GET',
  //         headers:{
  //             authorization: `Bearer ${localStorage.getItem('accessToken')}`
  //         }
  // }).then(res => res.json()));
  // console.log(review);

  // if (isLoading) {
  //     return <Loading></Loading>
  // }
  useEffect(() => {
    // fetch("http://localhost:5000/review", {
    //   method: "GET",
    //   headers: {
    //     authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    //   },
    // })
    fetch("http://localhost:5000/review")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);
  return (
    <div class="">
      <div class="hero mb-14 bg-base-200 ">
        <div class="hero-content text-center py-14">
          <div class="max-w-md">
            <h1 class="text-5xl font-bold tracking-wide"> Reviews</h1>
            {/* <h5 class="text-2xl tracking-wide">Awesome Reviews</h5> */}
            <p class="py-6">
              Our review is our interest. We try to serve our best when we
              import our laptop parts from expertist. Here some reviews are
              provided that our expectation love. In deleniti eaque aut
              repudiandae et a id nisi. Now the amonunt of review is :{" "}
              {review.length}
            </p>

            {/* <button class="btn btn-primary">Get Started</button> */}
          </div>
        </div>
      </div>
      <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-7 mb-32">
        {review.length && review?.map((review) => (
          <ReviewDetail key={review._id} review={review}></ReviewDetail>
        ))}
      </div>
    </div>
  );
};

export default Review;
