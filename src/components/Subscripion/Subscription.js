import React from "react";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { AiOutlineRight } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaPinterestSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

// import { FaBeer } from 'react-icons/fa';
const Subscription = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-12 px-11 py-12 bg-base-300">
      <div class="card card-side bg-base-100 shadow-xl">
        <figure>
          {" "}
          <MdOutlineMarkEmailRead className="icon" />
        </figure>
        <div class="card-body">
          <h4>Fear of missing out?</h4>
          <p>
            Get the latest deals, <br />
            updates & more
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <input type="text" class="input input-bordered mr-3" placeholder="your email address" />
        <button className=" btn btn-primary">
          Subscribe <AiOutlineRight className="ml-2 text-lg " />
        </button>
      </div>

      <div className="social-icons flex items-center ">
        <p class="mr-3 font-bold text-base">Follows us</p>
        <ul class="grid grid-flow-col gap-4 ">
          <li>
            <Link to="">
              <BsFacebook class='text-3xl text-primary' />
            </Link>
          </li>
          <li>
            <Link to="">
              <FaTwitterSquare class='text-3xl text-primary'/>
            </Link>
          </li>
          <li>
            <Link to="">
              <FaInstagramSquare class='text-3xl text-primary'/>
            </Link>
          </li>
          <li>
            <Link to="">
              <FaPinterestSquare class='text-3xl text-primary'/>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Subscription;
