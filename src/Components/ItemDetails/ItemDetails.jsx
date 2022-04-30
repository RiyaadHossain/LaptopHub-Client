import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemDetails = () => {
  const { id } = useParams();
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:4000/laptops`)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  const item = items.find((item) => item._id === id);
  console.log(item);
  return (
    <div className="py-16 bg-[#070707]">
      <div className="container mx-auto max-w-xl pt-6">
        <img
          className="h-96 w-full object-cover mx-auto rounded-md border-2 border-blue-500"
          src={item?.image}
          alt=""
        />
        <div className="mt-8">
          <h2 className="text-white text-lg mb-5">
            <span className="font-bold text-blue-600">Name:</span> {item?.name}
          </h2>
          <p className="text-white text-lg mb-5">
            <span className="font-bold text-blue-600">Id:</span> {item?._id}
          </p>
          <p className="text-white text-lg mb-5">
            <span className="font-bold text-blue-600">Price:</span> $
            {item?.price}
          </p>
          <p className="text-white text-lg mb-5">
            <span className="font-bold text-blue-600">Quantity:</span>{" "}
            {item?.quantity}
          </p>
          <p className="text-white text-lg mb-5">
            <span className="font-bold text-blue-600">Supplier Name:</span>{" "}
            {item?.supplierName}
          </p>
          <p className="text-white text-lg">
            <span className="font-bold text-blue-600">Description:</span>{" "}
            {item?.description}
          </p>
          <div className="text-center">
            <button className="text-white mt-6 py-2 px-10 bg-blue-600">
              Delivered
            </button>
          </div>
        </div>
      </div>
      <div className="text-center mt-12">
        <form>
          <input className="text-gray-600 w-[200px] py-2 pl-4 rounded outline-none" type="text" />
          <input className=" py-2 px-8 ml-5 bg-slate-400 rounded" type="submit" value='Restock' />
        </form>
      </div>
    </div>
  );
};

export default ItemDetails;
