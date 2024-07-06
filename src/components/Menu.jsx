import React from "react";
import data from "../../mockdata/data.json";
import MenuItem from "./MenuItem";

const Menu = () => {
  return (
    <div>
      <h1 className="flex justify-center text-3xl font-bold text-left ms-4">
        Menu{" "}
      </h1>
      <div className="flex flex-wrap justify-center">
        {data.menuItems.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
