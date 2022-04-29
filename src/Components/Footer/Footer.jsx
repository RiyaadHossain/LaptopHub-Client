import React from "react";
import { BsFacebook, BsGoogle, BsYoutube, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="text-center bg-[#000000] py-6">
      <h3 className="text-2xl font-semibold mb-2 text-gray-200">
        Laptop Warehouse
      </h3>

      <div className="social-link flex justify-center my-4">
        <BsFacebook className="text-white ml-5 text-2xl" />
        <BsGoogle className="text-white ml-5 text-2xl" />
        <BsTwitter className="text-white ml-5 text-2xl" />
        <BsYoutube className="text-white ml-5 text-2xl" />
      </div>
      <p className="text-slate-400">
        Copyright &copy;2022. Designed By
        <span className="text-blue-500"> Riyad</span>
      </p>
    </div>
  );
};

export default Footer;
