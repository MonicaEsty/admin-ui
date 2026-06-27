import React from "react";

function Button(props) {
  const {
    children,
    type = "button",
    variant = "primary",
    ...rest
  } = props;

  const baseClasses = 
  "h-12 rounded-md text-sm w-full cursor-pointer hover:scale-105";

  const variantClasses = {
    primary: "bg-primary text-white",
    secondary: "bg-gray-05 text-gray-02",
  };

  const finalClasses = `${baseClasses} ${
    variantClasses[variant] || variantClasses.primary
  }`;

  return (
    <button
      type={type}
      className={finalClasses}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;