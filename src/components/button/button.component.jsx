import React from "react";
import "./button.styles.scss";

const Button = ({
  inverted = false,
  children,
  className,
  ...otherProps
}) => {
  return (
    <button className={`custom-button ${className}`} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
