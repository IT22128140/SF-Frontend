// eslint-disable-next-line no-unused-vars
import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaFax } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const FooterContact = () => {
  return (
    <div className="flex flex-col justify-evenly ml-[2%] w-[24%] mr-[2%]">
      <div className="flex">
        <BsFillTelephoneFill className="text-[1rem] mt-[5px] mr-[5px]" />

        <label>Telephone :-</label>
      </div>
      <p>+00 00000 0000</p>
      <p>+00 00000 0000</p>

      <div className="flex">
        <FaFax className="text-[1rem] mt-[5px] mr-[5px]" />

        <label>Fax :-</label>
      </div>
      <p>+00 00000 0000</p>
      <p>+00 00000 0000</p>

      <div className="flex">
        <MdEmail className="text-[1rem] mt-[5px] mr-[5px]" />

        <label>Address :-</label>
      </div>
      <p>Lorem ipsum dolor sit ametexcepturi deleniti vero provi</p>
    </div>
  );
};

export default FooterContact;
