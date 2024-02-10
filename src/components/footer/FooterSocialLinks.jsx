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
      <h1 className="mt-[40%] w-[100%] text-center text-[140%] border-t-black border-t-[1px] ">
        Blood Transfution Service
      </h1>

      <div className="flex flex-row justify-between mt-[25%] text-[200%] text-black">
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
