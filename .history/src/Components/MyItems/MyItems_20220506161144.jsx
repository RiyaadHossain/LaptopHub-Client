import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { AiFillDelete } from "react-icons/ai";
import auth from "../../Firebase/Firebase.init";

const MyItems = () => {
  const [user] = useAuthState(auth);
  const [items, setItems] = useState([]);
  const [isChange, setIsChange] = useState(false);
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
  useEffect(() => {
    fetch("https://nameless-peak-52281.herokuapp.com/myitems", {
      headers: {
        authorization: `${user.email} ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [user.email, isChange]);
  return (
    <div className="min-h-[51.6vh] bg-[#0c0c0c]">
      <div className="container mx-auto">
        <h1 className="text-4xl font-semibold text-center text-white pt-14 mb-10">
          My Items
        </h1>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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

            {items?.map((item) => (
              <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                  >
                    <img
                      className="md:w-20 border-2 border-blue-500 md:h-20 w-10 h-10 rounded-full object-cover"
                      src={item.image}
                      alt=""
                    />
                  </th>
                  <td className="px-6 py-4">{item.name}</td>
                  <td className="px-6 py-4">{item.quantity}</td>
                  <td className="px-6 py-4">{item.price}</td>
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
      </div>
    </div>
  );
};

export default MyItems;
