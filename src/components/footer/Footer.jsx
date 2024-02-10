// eslint-disable-next-line no-unused-vars
import React from "react";
import FooterSocialLinks from "./FooterSocialLinks";
import FooterLinks from "./FooterLinks";
import FooterMap from "./FooterMap";
import FooterContact from "./FooterContact";

const Footer = () => {
  return (
    <>
      <div className="flex flex-row mt-[5%] w-full bg-footer min-h-[350px]">
        <FooterSocialLinks />
        <FooterLinks />
        <FooterMap />
        <FooterContact />
      </div>
      <center>
        <label>© 2022 Serendib Fashions Ltd.</label>
      </center>
    </>
  );
};

export default Footer;
