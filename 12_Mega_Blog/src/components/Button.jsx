import React, { Children } from "react";

function Button({
  children,
  type = "button",
  bgColor = "bg-blue-600",
  textColor = white,
  className = "",
  ...props
}) {
  return (
    <div
      className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`}
      {...props}
    >
      {Children}
    </div>
  );
}

export default Button;
