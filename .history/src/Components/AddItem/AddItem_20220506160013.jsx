import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import auth from "../../Firebase/Firebase.init";

const AddItem = () => {
  const [user] = useAuthState(auth);

  const addLaptop = (e) => {
    e.preventDefault();
    const brandName = e.target.brandName.value;
    const quantity = e.target.quantity.value;
    const price = e.target.price.value;
    const supplierName = e.target.supplierName.value;
    const description = e.target.description.value;
    const imageURL = e.target.image.value;
    e.target.reset();
    fetch("https://nameless-peak-52281.herokuapp.com/laptop", {
      method: "POST",
      body: JSON.stringify({
        name: brandName,
        quantity: quantity,
        price: price,
        supplierName: supplierName,
        description: description,
        image: imageURL,
        email: user.email,
      }),
      headers: {
        authorization: `${user.email} ${localStorage.getItem("accessToken")}`,
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        toast.success("Item Added Successfully.");
      });
    fetch("https://nameless-peak-52281.herokuapp.com/laptop", {
      method: "POST",
      body: JSON.stringify({
        name: brandName,
        quantity: quantity,
        price: price,
        supplierName: supplierName,
        description: description,
        image: imageURL,
        email: user.email,
      }),
      headers: {
        authorization: `${user.email} ${localStorage.getItem("accessToken")}`,
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        toast.success("Item Added Successfully.");
      });
  };
  return (
    <div className=" bg-[#0c0c0c] py-24">
      <div className="bg-slate-200 w-[500px] mx-auto py-12 px-3 rounded">
        <form onSubmit={addLaptop}>
          <h1 className="text-center font-semibold text-2xl">Add Item</h1>
          <input
            // onBlur={onEmailBlur}
            className="block outline-none mt-4 py-3 w-full pl-3"
            type="text"
            name="brandName"
            placeholder="Brand Name"
          />

          <input
            // onBlur={onPasswordBlur}
            className="block outline-none mt-4 py-3 w-full pl-3"
            type="text"
            name="quantity"
            placeholder="Quantity"
          />
          <input
            // onBlur={onPasswordBlur}
            className="block outline-none mt-4 py-3 w-full pl-3"
            type="text"
            name="price"
            placeholder="Price"
          />
          <input
            // onBlur={onPasswordBlur}
            className="block outline-none mt-4 py-3 w-full pl-3"
            type="text"
            name="supplierName"
            placeholder="Supplier Name"
          />
          <input
            // onBlur={onPasswordBlur}
            className="block outline-none mt-4 py-3 w-full pl-3"
            type="text"
            name="description"
            placeholder="Description"
          />
          <input
            // onBlur={onPasswordBlur}
            className="block outline-none mt-4 py-3 w-full pl-3"
            type="text"
            name="image"
            placeholder="Image URL"
          />

          <input
            className="bg-blue-500 py-2 mt-5 px-8 rounded text-slate-100"
            type="submit"
            value="Add"
          />
        </form>
      </div>
    </div>
  );
};

export default AddItem;
