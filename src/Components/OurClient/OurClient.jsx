import React from "react";
import Client1 from "../../Photo/person1.jpg";
import Client2 from "../../Photo/person2.jpg";
import Client3 from "../../Photo/person3.jpg";

const OurClient = () => {
  return (
    <div className="bg-[black] py-12">
      <h1 className="text-white text-4xl font-bold text-center">Our Clients</h1>
      <div className="container gap-11 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-[90px]">
        <div className="border relative text-center rounded-md bg-[#0e0d0d] py-6 px-2">
          <img
            className="w-28 absolute top-[-50px] left-[140px] lg:left-[100px] h-28 object-cover rounded-full mx-auto border-2 border-blue-600"
            src={Client1}
            alt=""
          />
          <div className="mt-14">
            <p className=" text-lg font-thin text-zinc-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              repellendus repellat tempora quisquam veritatis aliquid aut error
              voluptatibus. Aut, quam?
            </p>
            <h2 className="text-blue-600 mt-5 text-xl font-bold">
              Sundar Pichai{" "}
              <span className="text-slate-500 text-sm font-normal">
                {" "}
                - CEO at Google
              </span>
            </h2>
          </div>
        </div>
        <div className="border  mt-12 md:mt-0 relative text-center rounded-md bg-[#0e0d0d] py-6 px-2">
          <img
            className="w-28 lg:left-[100px] absolute top-[-50px] left-[140px] h-28 object-cover rounded-full mx-auto border-2 border-blue-600"
            src={Client2}
            alt=""
          />
          <div className="mt-14">
            <p className=" text-lg font-thin text-zinc-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              repellendus repellat tempora quisquam veritatis aliquid aut error
              voluptatibus. Aut, quam?
            </p>
            <h2 className="text-blue-600 mt-5 text-xl font-bold">
              Satya Nadella{" "}
              <span className="text-slate-500 text-sm font-normal">
                {" "}
                - CEO at Microsoft
              </span>
            </h2>
          </div>
        </div>
        <div className="border mt-12 lg:mt-0 md:mt-12 relative text-center rounded-md bg-[#0e0d0d] py-6 px-2">
          <img
            className="w-28 lg:left-[100px] absolute top-[-50px] left-[140px] h-28 object-cover rounded-full mx-auto border-2 border-blue-600"
            src={Client3}
            alt=""
          />
          <div className="mt-14">
            <p className=" text-lg font-thin text-zinc-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              repellendus repellat tempora quisquam veritatis aliquid aut error
              voluptatibus. Aut, quam?
            </p>
            <h2 className="text-blue-600 mt-5 text-xl font-bold">
              Leena Nair{" "}
              <span className="text-slate-500 text-sm font-normal">
                {" "}
                - CEO at Chanel
              </span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurClient;
