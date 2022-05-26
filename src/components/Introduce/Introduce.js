import React from 'react';
import partners from "../../assets/partners.jpg";
const Introduce = () => {
    return (
        <div class=" py-16 bg-base-100">
      <div class="hero ">
        <div class="hero-content text-center ">
          <div class="w-full">
            <h1 class="text-5xl mb-11 font-bold tracking-wide"> Our Partners</h1>
            <img src={partners} class=" rounded-lg shadow-2xl" />
          
          </div>
        </div>
      </div>
            
        </div>

    );
};

export default Introduce;