import React from "react";

const AddedOpt = ({ added }) => {
  return (
    <>
      {added.length > 0 && (
        <div className="flex flex-wrap items-baseline gap-1 my-2 text-sm font-medium border-t-[1px] border-gray-500">
          <h2 className="pt-1"> Added</h2>
          {added.map((item) => (
            <span className="border-[1px] text-xs border-gray-600 rounded-full px-2">
              {item}
            </span>
          ))}
        </div>
      )}
      
    </>
  );
};

export default AddedOpt;
