import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ItemDetails = () => {
  const { id } = useParams();
  const [items, setItems] = useState([]);
  const [isChange, setIsChange] = useState(false)
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`http://localhost:4000/laptops`)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, [isChange]);

  const item = items.find((item) => item._id === id);
  const deliveredItem = () => {
    const quantity = item.quantity - 1;
    fetch(`http://localhost:4000/laptopQuantityUpdate/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        quantity: quantity,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
    .then((response) => response.json())
    .then((json) => setIsChange(!isChange));
  };

  const updateStock = e => {
    e.preventDefault()
    const quantity = parseInt(e.target.quantity.value) + parseInt(item.quantity)
    e.target.reset()
    fetch(`http://localhost:4000/laptopQuantityUpdate/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        quantity: quantity,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => setIsChange(!isChange));
  }
  return (
    <div className="py-16  bg-[#070707]">
      <div className="lg:flex container mx-auto">
        <div className=" max-w-xl mx-auto pt-6">
          <img
            className="h-96 w-full object-cover mx-auto rounded-md border-2 border-blue-500"
            src={item?.image}
            alt=""
          />
          <div className="mt-8">
            <h2 className="text-white text-lg mb-5">
              <span className="font-bold text-blue-600">Name: </span>{" "}
              {item?.name}
            </h2>
            <p className="text-white text-lg mb-5">
              <span className="font-bold text-blue-600">Id: </span> {item?._id}
            </p>
            <p className="text-white text-lg mb-5">
              <span className="font-bold text-blue-600">Price: </span> $
              {item?.price}
            </p>
            <p className="text-white text-lg mb-5">
              <span className="font-bold text-blue-600">Quantity: </span>
              {item?.quantity}
            </p>
            <p className="text-white text-lg mb-5">
              <span className="font-bold text-blue-600">Supplier Name: </span>
              {item?.supplierName}
            </p>
            <p className="text-white text-lg">
              <span className="font-bold text-blue-600">Description: </span>
              {item?.description}
            </p>
            <div className="text-center">
              <button
                onClick={deliveredItem}
                className="text-white mt-6 py-2 px-10 bg-blue-600"
              >
                Delivered
              </button>
            </div>
          </div>
        </div>
        <div className="rounded text-center border py-5 mt-12 bg-slate-300 lg:px-2 h-36">
          <h1 className="font-semibold text-2xl mb-4 ">Update Stock</h1>
          <form onSubmit={updateStock}>
            <input
              name="quantity"
              className="text-gray-600 border-none w-[200px] py-2 pl-4 rounded outline-none"
              type="text"
            />
            <input
              className=" py-2 px-8 ml-5 bg-slate-400 rounded"
              type="submit"
              value="Restock"
            />
          </form>
        </div>
      </div>
      <div className="text-center lg:mt-20 mt-10">
        <button
          className="font-semibold hover:bg-blue-500 hover:text-white text-black mt-6 py-2 border-2 border-blue-500 px-10 bg-gray-300 "
          onClick={() => navigate("/inventory")}
        >
          Manage Inventory
        </button>
      </div>
    </div>
  );
};

export default ItemDetails;
