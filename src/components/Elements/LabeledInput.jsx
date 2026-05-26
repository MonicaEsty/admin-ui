import React from "react";

function LabeledInput(props) {
  const { label, id, ...rest } = props;

  return (
    <div>
      <label htmlFor={id} className="block text-sm mb-2">
        {label}
      </label>

      <input
        id={id}
        {...rest}
        className="py-3 px-4 text-sm rounded-md w-full border"
      />
    </div>
  );
}

export default LabeledInput;