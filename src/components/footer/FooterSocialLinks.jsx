// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const FooterSocialLinks = () => {
  return (
    <div className="flex flex-col justify-evenly ml-[2%] w-[14%]">
      <p className=" font-BreeSerif text-ternary ">Telephone : 0342285697</p>{" "}
      <p className=" font-BreeSerif text-ternary ">Email : serendibfashion@gmail.com</p>{" "}
      <p className=" font-BreeSerif text-ternary ">Address : No. 93/A, Kumbuka, Gonapola</p>
      <h1 className="w-[100%] text-center text-[140%] text-primary border-t-primary pt-5 border-t-[3px] font-Lavish font-bold lg:text-5xl sm:text-2xl">
        Serendib Fashion
      </h1>
      <div className="flex flex-row justify-between lg:text-[200%] sm:text-[150%] text-black ">
        <Link to="https://lk.linkedin.com/">
          <FaLinkedin />
        </Link>

        <Link to="https://www.facebook.com/">
          <FaFacebook />
        </Link>

        <Link to="https://twitter.com/">
          <FaXTwitter />
        </Link>

        <Link to="https://www.instagram.com/">
          <FaInstagram />
        </Link>
      </div>
    </div>
  );
};

export default FooterSocialLinks;
