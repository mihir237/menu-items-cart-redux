import React from "react";

const CustomizeOptions = ({ options }) => {
  return (
    <div className="flex flex-col gap-2 mt-2">
      {Object.keys(options).map((optKey) => {
        const option = options[optKey];
        return (
          <div key={optKey} className="flex flex-col">
            <h3 className="font-medium">{optKey}</h3>
            {option.options.map((opt, index) => (
              <div key={index} className="flex items-center gap-2">
                <input
                  type={option.multipleChoice ? "checkbox" : "radio"}
                  name={optKey}
                  value={opt}
                  id={`${optKey}-${opt}`}
                />
                <label htmlFor={`${optKey}-${opt}`}>{opt}</label>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default CustomizeOptions;
