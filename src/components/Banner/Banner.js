import React from 'react';
import img1 from '../../assets/banner.jpg'
const Banner = () => {
    return (
        <div class="hero min-h-screen bg-base-200 mb-16">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img src={img1} class="max-w-sm md:max-w-sm lg:max-w-md  rounded-lg shadow-2xl" alt='img' />
          <div>
            <h1 class="text-5xl font-bold">Power Welshion Electronics Co. LTD</h1>
            <p class="py-6">We have arrived with electronic computer parts for modern generation. Come and look for our services.
            We are here to deliver our product to you. All products are auhentic and modern. Servcie quality will ensured must. So don't delay come and get our services.</p>
            <button class="btn btn-primary">Read More</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;