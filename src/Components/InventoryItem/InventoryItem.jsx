import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const InventoryItem = () => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:4000/laptops")
      .then((res) => res.json())
      .then((json) => setItems(json));
  }, [setItems]);
  return (
    <div className="bg-[#0b0b0b]">
      <div className="container mx-auto py-16">
        <h1 className="text-4xl font-bold text-center mb-16 text-white">
          Inventory Items
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 lg:gap-10">
          {items.slice(0,6).map((item) => (
            <div
              key={item._id}
              className="mb-8 bg-slate-200 shadow-sky-300 shadow-lg"
            >
              <img
                className="h-96 w-full object-cover"
                src={item.image}
                alt=""
              />
              <div className="py-4 px-4">
                <h3 className="text-2xl font-bold mb-3">{item.name}</h3>
                <p>
                  <span className="text-lg font-semibold ">Quantity: </span>
                  {item.quantity}
                </p>
                <p>
                  <span className="text-lg font-semibold ">Price: </span>
                  ${item.price}
                </p>
                <p>
                  <span className="text-lg font-semibold ">Supplier: </span>
                  {item.supplierName}
                </p>
                <p className="text-lg md:text-xl font-thin">{item.description}</p>
                <button
                  onClick={() => navigate(`/itemdetails/${item._id}`)}
                  className="py-3 px-8 bg-blue-600 text-white rounded mt-4"
                >
                  Stock Update
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center pb-10"><button onClick={() => navigate('/inventory')} className="text-white  py-3 px-8 bg-blue-600 rounded">Manage Invetory</button></div>
    </div>
  );
};

export default InventoryItem;
