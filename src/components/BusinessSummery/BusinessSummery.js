import React from "react";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { CgProductHunt } from "react-icons/cg";
import { MdUnsubscribe } from "react-icons/md";
import { BiLike } from "react-icons/bi";
const BusinessSummery = () => {
  return (
    <div className="business bg-base-200 py-16 lg:px-10">
      <div class="hero  ">
        <div class="hero-content text-center">
          <div class="lg:max-w lg:px-11">
            <h1 class="text-5xl font-bold">Why choose our parts?</h1>
            <p class="py-6">
              We are importing all modern technology . Especially, laptop parts
              that are find to very difficult . So here we create a platform to
              where you can find your valueable product.
            </p>
          </div>
        </div>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="card card-compact lg:card-side py-6 bg-base-100 shadow-xl">
          <figure>
            <AiOutlineUsergroupAdd class="sm:text-8xl"/>
          </figure>
          <div class="card-body ">
            <h2 class="card-title">Consumer</h2>
            <h1 class="text-3xl font-bold text-primary">2M+</h1>
            <p>we have almost 2 million consumer around the world.</p>
          </div>
        </div>
        <div class="card card-compact lg:card-side py-6 bg-base-100 shadow-xl">
          <figure>
            <CgProductHunt class="sm:text-8xl"/>
          </figure>
          <div class="card-body ">
            <h2 class="card-title">Selled Product</h2>
            <h1 class="text-3xl font-bold text-primary">15M+</h1>
            <p>
              we have purchased almost 15 million product to all over the world.
            </p>
          </div>
        </div>
        <div class="card card-compact lg:card-side py-6 bg-base-100 shadow-xl">
          <figure>
            <MdUnsubscribe class="sm:text-8xl"/>
          </figure>
          <div class="card-body ">
            <h2 class="card-title">Subscriber</h2>
            <h1 class="text-3xl font-bold text-primary">80,000+</h1>
            <p>Number of subscriber are increasing day by day. </p>
          </div>
        </div>
        <div class="card card-compact lg:card-side py-6 bg-base-100 shadow-xl">
          <figure>
            <BiLike class="sm:text-8xl"/>
          </figure>
          <div class="card-body ">
            <h2 class="card-title">Like</h2>
            <h1 class="text-3xl font-bold text-primary">2M+</h1>
            <p>Every posts we get huge like by posting wonderfull parts .</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummery;
