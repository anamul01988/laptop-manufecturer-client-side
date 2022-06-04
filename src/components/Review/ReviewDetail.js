import React from "react";

const ReviewDetail = ({ review }) => {
  const { _id, name, ratings, description, img } = review;
  // console.log(review);
  let reviewsRatings = [];
  for (let i = 0; i < ratings; i++) {
    reviewsRatings[i] = i;
  }
  return (
    <div class="card bg-base-100 shadow-2xl">
      <figure class="px-10 pt-10">
        <img src={img} alt="Shoes" class="rounded-xl " />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">Name:{name}</h2>
        {/* <h4>Ratings: {ratings}</h4> */}
       <div>
          {
            reviewsRatings.map(() => (
              <div class="rating rating-md">
              <input
                type="radio"
                name="rating-7"
                class="mask mask-star-2 bg-orange-400"
              />
            </div>
            ))
          }
       </div>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ReviewDetail;
