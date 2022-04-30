import React, { useEffect, useState } from "react";

const ItemDetails = ({ id }) => {
  const [item, setItem] = useState();
    useEffect(() => {
      fetch(`http://localhost:4000/laptops`)
      .then(res => res.json())
      .then(data => setItem(data))
  }, []);
  return <div></div>;
};

export default ItemDetails;
