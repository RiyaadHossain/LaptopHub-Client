import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <div className="lg:pt-60 pt-24 md:w-[600px] min-w-[300px] px-8 md:px-0 mx-auto">
        <h1 className="text-center md:text-5xl text-3xl font-bold text-slate-200">
          World's Biggest Laptop Stock is Here
        </h1>
        <p className="mt-10 text-slate-400 font-thin text-center text-lg ">
          In our Laptop warehoue you'll find most popular brand's Laptop with best quality around the world. We stock latest and in demand laptops in almost every price range.
        </p>
      </div>
    </div>
  );
};

export default Banner;
