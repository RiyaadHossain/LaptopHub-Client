import React, { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Inventory = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [isChange, setIsChange] = useState(false);
  useEffect(() => {
    fetch("https://nameless-peak-52281.herokuapp.com/laptops")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, [isChange]);
  const deleteItem = (id) => {
    const confirm = window.confirm();
    if (confirm) {
      fetch(`https://nameless-peak-52281.herokuapp.com/laptop/${id}`, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then(() => {
          setIsChange(!isChange);
        });
    }
  };
  return (
    <div className="py-24 min-h-[80vh] bg-black">
      <div className=" container mx-auto">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-800 uppercase bg-gray-300 dark:bg-gray-900 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Image
                </th>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Quantity
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>

            {items.map((item) => (
              <tbody key={item._id}>
                <tr className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                    <img
                      className="md:w-20 border-2 border-blue-500 md:h-20 w-10 h-10 rounded-full object-cover"
                      src={item.image}
                      alt=""
                    />
                  </td>
                  <th className="px-6 py-4 font-bold text-gray-900 dark:text-white">
                    {item.name}
                  </th>
                  <td className="px-6 py-4">{item.quantity}</td>
                  <td className="px-6 py-4">${item.price}</td>
                  <td className="px-6 py-4 text-right">
                    <button
                      onClick={() => deleteItem(item._id)}
                      className="font-medium text-2xl text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      <AiFillDelete />
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
        <div className="text-center mt-10">
          <button
            onClick={() => navigate("/additem")}
            className="bg-blue-600 px-9 py-[12px] rounded  text-white font-semibold"
          >
            Add New Item
          </button>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
