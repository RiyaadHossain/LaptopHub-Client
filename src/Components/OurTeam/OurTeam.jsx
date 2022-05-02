import React from "react";
import Google from "../../Logo/Google-logo.png";
import Microsoft from "../../Logo/Microsoft-logo.png";
import Motorolla from "../../Logo/Motorola-logo.png";
import Meta from "../../Logo/Meta-logo.png";
import Lenovo from "../../Logo/Lenovo-logo.png";
import Huawei from "../../Logo/Huawei-logo.png";

const OurTeam = () => {
  return (
    <div className="bg-black py-16">
      <h1 className="text-3xl font-semibold text-center text-white">
        Our Team
      </h1>
      <div className="grid grid-cols-3 md:grid-cols-6 mt-6">
        <div>
          <img
            className="w-44 transition hover:translate-y-[-10px] mx-auto"
            src={Microsoft}
            alt=""
          />
        </div>
        <div>
          <img
            className="w-44 transition hover:translate-y-[-10px]  mx-auto"
            src={Google}
            alt=""
          />
        </div>
        <div>
          <img
            className="w-44 transition hover:translate-y-[-10px]  mx-auto"
            src={Meta}
            alt=""
          />
        </div>
        <div>
          <img
            className="w-44 transition hover:translate-y-[-10px]  mx-auto"
            src={Motorolla}
            alt=""
          />
        </div>
        <div>
          <img
            className="w-44 transition hover:translate-y-[-10px]  mx-auto"
            src={Huawei}
            alt=""
          />
        </div>
        <div>
          <img
            className="w-44 transition hover:translate-y-[-10px]  mx-auto"
            src={Lenovo}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
