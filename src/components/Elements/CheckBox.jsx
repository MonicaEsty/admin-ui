import React from "react";

function CheckBox(props) {
  const { label, id, ...rest } = props;

  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        className="accent-primary"
        id={id}
        {...rest}
      />

      <label
        htmlFor={id}
        className="text-sm text-gray-500 ml-2"
      >
        {label}
      </label>
    </div>
  );
}

export default CheckBox;