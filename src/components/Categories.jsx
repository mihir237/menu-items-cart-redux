import React, { useRef, useEffect } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import {
  addToCategory,
  selectCategory,
} from "../feature/addToCart/categoryListSlice";
import { useDispatch, useSelector } from "react-redux";
import data from "../../mockdata/data.json";

const Categories = ({ selectedCategory, setSelectedCategory }) => {
  const ref = useRef();
  const { events } = useDraggable(ref);
  const categoryList = useSelector(selectCategory);
  const dispatch = useDispatch();

  const getUniqueCategories = (data) => {
    const categories = data.menuItems.map((item) => item.category);
    return [...new Set(categories)];
  };

  useEffect(() => {
    dispatch(addToCategory(getUniqueCategories(data)));
  }, [dispatch]);

  const sortedCategoryList = [...categoryList];
  const selectedIndex = sortedCategoryList.findIndex(
    (item) => item === selectedCategory
  );
  if (selectedIndex !== -1) {
    const selectedCategoryItem = sortedCategoryList.splice(selectedIndex, 1);
    sortedCategoryList.unshift(selectedCategoryItem[0]);
  }

  return (
    <div className="sticky top-12  bg-white pe-4 my-1">
      <div
        className="flex gap-28 overflow-x-scroll p-1 !cursor-grabbing"
        {...events}
        ref={ref}
      >
        {sortedCategoryList.map((item, index) => (
          <button
            className={`text-nowrap !cursor-pointer ${
              selectedCategory === item
                ? "sticky left-0 bg-white border-[1px] border-black ps-2 pe-1 py-1 rounded-full"
                : ""
            }`}
            key={index}
          >
            <span onClick={() => setSelectedCategory(item)}> {item}</span>
            {selectedCategory !== "All Items" && selectedCategory === item && (
              <span
                className="m-1 px-1 border-[1px] border-transparent hover:border-black hover:border-[1px] rounded-full"
                onClick={() => setSelectedCategory("All Items")}
              >
                X
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Categories;
