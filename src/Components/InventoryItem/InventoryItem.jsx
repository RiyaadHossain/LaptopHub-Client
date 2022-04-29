import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const InventoryItem = () => {
    const [items, setItems] = useState([]);
    const navigate = useNavigate()
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((json) => setItems(json));
  }, [setItems]);
  return (
    <div className="bg-[#0b0b0b]">
      <div className="container mx-auto py-16">
        <h1 className="text-3xl font-bold text-center mb-16 text-white">
         
          Inventory Items
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 lg:gap-10">
          {items.map((item) => (
            <div className="mb-4 bg-slate-200 shadow-sky-300 shadow-lg">
              <img src={item.image} alt="" />
              <div className="py-4 px-4">
                <h3 className="text-2xl font-bold mb-3">{item.name}</h3>
                <p>
                  <span className="text-lg font-semibold ">Quantity: </span>
                  {item.quantity}
                </p>
                <p>
                  <span className="text-lg font-semibold ">Price:</span>
                  {item.price}
                </p>
                <p>
                  <span className="text-lg font-semibold ">Supplier:</span>
                  {item.supplierName}
                </p>
                <p className="text-xl font-thin">{item.description}</p>
                <button onClick={() => navigate('/additem')} className="py-3 px-10 bg-blue-600 text-white rounded mt-4">Add Item</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InventoryItem;
