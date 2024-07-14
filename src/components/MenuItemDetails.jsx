import React from "react";

const MenuItemDetails = ({ item, modal }) => {
  return (
    <>
      <div className="flex justify-between items-baseline">
        <h2 className="text-base text-left font-semibold">{item.name}</h2>
        {!modal && <h3 className="font-bold text-xl">{item.price} $</h3>}
      </div>
      <p className="text-left text-xs font-semibold text-gray-600">
        {item.description}
      </p>
    </>
  );
};

export default MenuItemDetails;
