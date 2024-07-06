import React from "react";
import data from "../../mockdata/data.json";
import MenuItem from "./MenuItem";

const Menu = ({ selectedCategory }) => {
  return (
    <div>
      <h1 className="flex justify-center text-3xl font-bold text-left ms-4">
        Menu
      </h1>
      <h2 className="flex text-2xl font-bold text-left ms-4">
        {selectedCategory}
      </h2>
      <div className="flex flex-wrap justify-center">
        {data.menuItems.map((item) =>
          selectedCategory == "All Items" || selectedCategory == item.category ? (
            <MenuItem key={item.id} item={item} />
          ) : null
        )}
      </div>
    </div>
  );
};

export default Menu;
