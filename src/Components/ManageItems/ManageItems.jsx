import React, { useEffect, useState } from 'react';

import { AiFillDelete } from "react-icons/ai";

const ManageItems = () => {
    const [items, setItems] = useState([]);
    const [isChange, setIsChange] = useState(false)
    useEffect(() => {
      fetch("http://localhost:4000/laptops")
        .then((res) => res.json())
        .then((data) => setItems(data));
    }, [isChange]);
    const deleteItem = (id) => {
      fetch(`http://localhost:4000/laptop/${id}`, {
        method: 'DELETE',
      })
        .then((response) => response.json())
        .then(() => { setIsChange(!isChange)});
    };
    return (
        <div className="py-16 bg-black">
      <div className=" container mx-auto">
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-800 uppercase bg-gray-300 dark:bg-gray-900 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Image
                </th>
                <th scope="col" class="px-6 py-3">
                  Name
                </th>
                <th scope="col" class="px-6 py-3">
                  Quantity
                </th>
                <th scope="col" class="px-6 py-3">
                  Price
                </th>
                <th scope="col" class="px-6 py-3">
                  <span class="sr-only">Edit</span>
                </th>
              </tr>
            </thead>

            {items.map((item) => (
              <tbody key={item._id}>
                <tr class="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                  <td class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                    <img
                      className="md:w-20 border-2 border-blue-500 md:h-20 w-10 h-10 rounded-full object-cover"
                      src={item.image}
                      alt=""
                    />
                  </td>
                  <th class="px-6 py-4 font-bold text-gray-900 dark:text-white">
                    {item.name}
                  </th>
                  <td class="px-6 py-4">{item.quantity}</td>
                  <td class="px-6 py-4">${item.price}</td>
                  <td class="px-6 py-4 text-right">
                    <button
                      onClick={() => deleteItem(item._id)}
                      class="font-medium text-2xl text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      <AiFillDelete />
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
    );
};

export default ManageItems;