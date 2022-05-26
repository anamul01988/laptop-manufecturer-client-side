import React from "react";
import { Link } from "react-router-dom";
import footerLog from "../assets/footer/f_logo.webp";
const Footer = () => {
  return (
    <>
      <footer class="footer p-10  bg-neutral text-neutral-content">
        <div class="items-center">
          <div className="img">
            <img src={footerLog} alt="img" class="h-16 w-full" />
          </div>
          <p>
            Copyright © 2022 - All right <br /> reserved for Laptop Menufecture
          </p>
        </div>
        <div>
          <span class="footer-title">Services</span>
          <Link to=""class="link link-hover">Branding</Link>
          <Link to=""class="link link-hover">Parts</Link>
          <Link to=""class="link link-hover">Marketing</Link>
          <Link to=""class="link link-hover">Advertisement</Link>
        </div>
        <div>
          <span class="footer-title">Company</span>
          <Link to=""class="link link-hover">About us</Link>
          <Link to=""class="link link-hover">Contact</Link>
          <Link to=""class="link link-hover">Jobs</Link>
          <Link to=""class="link link-hover">Press kit</Link>
        </div>
        <div>
          <span class="footer-title">Legal</span>
          <Link to=""class="link link-hover">Terms of use</Link>
          <Link to=""class="link link-hover">Privacy policy</Link>
          <Link to=""class="link link-hover">Cookie policy</Link>
        </div>
      </footer>
      {/* <footer className="footer my-10 footer-center p-4 bg-base-300 text-base-content">
        <div className="">
          <p>Copyright © 2022 - All right reserved for Laptop Menufecture</p>
        </div>
      </footer> */}
    </>
  );
};

export default Footer;
