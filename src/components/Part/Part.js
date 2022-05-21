import React from "react";

const Part = ({ part }) => {
//   console.log(part);
  const { available, img, price, name, short_desc, min_order_quantity } = part;
  return (
    <div class="card bg-base-100 shadow-xl">
      <figure class="px-10 pt-10">
        <img src={img} alt="Shoes" class="rounded-xl " />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">Name:{name}</h2>
        <h4>Available: {available}</h4>
        <h4>Price: ${price}</h4>
        <h4>Min_order_qunatity{min_order_quantity}</h4>
        <p>{short_desc}</p>
        <div class="card-actions">
          <button class="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Part;
