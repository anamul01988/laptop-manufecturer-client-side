import React, { useEffect, useState } from "react";

const NewArrival = () => {
    const [arrival, setArrival] = useState([]);
    
    console.log(arrival);
  
    useEffect(() => {
    
      fetch("http://localhost:5000/product")
        .then((res) => res.json())
        .then((data) => setArrival(data));
    }, []);
  return (
    <div class="my-6 bg-base-200 py-12 px-11">
      <div class="hero ">
        <div class="hero-content text-center">
          <div class="max-w-md">
            <h1 class="text-5xl font-bold">New Arrival</h1>
            <p class="py-6">
              Recently launched some laptop parts that has 15% discount on
              Winter season. We server our product with great effort and good
              mind.
            </p>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-7 pb-11 ">
      {
          arrival.map((arrival)=>   <div class="card bg-base-100 shadow-2xl">
          <figure class="px-10 pt-10 ">
            <img src={arrival.img} alt="Shoes" class="w-32  " />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">Name:{arrival.name}</h2>
            <h4>Available quantity: {arrival.available_quantity}</h4>
            <h4>Price: {arrival.price}</h4>
            <h4>Min quantity: {arrival.min_quantity}</h4>
            <p>{arrival.description}</p>
          
          </div>
        </div>)
      }
      </div>
     
    </div>
  );
};

export default NewArrival;
