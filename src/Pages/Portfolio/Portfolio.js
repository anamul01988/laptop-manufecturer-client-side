import React from "react";

const Portfolio = () => {
  return (
    <div class="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src="https://api.lorem.space/image/shoes?w=400&h=225"
          alt="Shoes"
        />
      </figure>
      <div class="card-body">
        <h2 class="card-title">Name: Anamul Haque</h2>
        <p>Email: anamulhaque0198877@gmail.com</p>
        <p>Study: Completed BSC IN CSE from City Universiy</p>
        <ul></ul>
      </div>
    </div>
  );
};

export default Portfolio;
