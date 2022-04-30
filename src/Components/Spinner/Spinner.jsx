import React from "react";
import "./Spinner.css";

const Spinner = () => {
  return (
    <div className="h-[80vh] flex items-center justify-center bg-[#070707]">
      <svg className="loading" viewBox="25 25 50 50">
        <circle r="20" cy="50" cx="50"></circle>
      </svg>
    </div>
  );
};

export default Spinner;
