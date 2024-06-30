import React, { useState } from "react";
import items from "../../mockdata/items.json";
import AddedOpt from "./AddedOpt";

const MenuItem = ({ item }) => {
  const [addedOptions, setAddedOptions] = useState([]);
  const [price, setPrice] = useState(item.price);

  const handleAddOption = (opt) => {
    setAddedOptions((prevOptions) => [...prevOptions, opt.name]);
    setPrice(price + opt.price);
  };

  return (
    <div className="border-[1px] border-gray-600 rounded-lg m-4 p-4 max-w-[20rem]">
      <div className="flex justify-between items-baseline">
        <h2 className="text-base font-semibold ">{item.name}</h2>
        <h3 className="font-bold text-2xl">{item.price} $</h3>
      </div>
      <p className="text-left text-xs font-semibold text-gray-600">
        {item.description}
      </p>
      <h3 className="text-left mt-4 text-sm font-medium underline decoration-gray-300 underline-offset-4">
        Customize options
      </h3>
      {item.customize_options.map((opt) => (
        <div
          key={opt.name}
          className="flex justify-between font-semibold my-1 items-baseline"
        >
          <p className="text-xs">{opt.name}</p>
          <div className="flex gap-2">
            <p className="text-xs">{opt.price} $</p>
            <button
              className="border-[1px] border-gray-600 px-2 text-xs rounded-full"
              onClick={() => handleAddOption(opt)}
            >
              Add
            </button>
          </div>
        </div>
      ))}
      <div className="">
        <AddedOpt added={addedOptions} />
        <div className="flex justify-between border-t-[1px] border-gray-500">
          <h3 className="font-bold">Total</h3>
          <p className="font-bold">{price} $</p>
        </div>
        <button className="border-[1px] rounded-full px-6 mt-2 border-gray-600 ">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

const Menu = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-left ms-4">Menu </h1>

      {items.food_items.map((item) => (
        <MenuItem key={item.name} item={item} />
      ))}
    </div>
  );
};

export default Menu;
