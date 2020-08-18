import React from "react";
import { Link } from "react-router-dom";
import "./button.styles.scss";

const Button = ({
  isLink = false,
  inverted = false,
  children,
  className,
  ...otherProps
}) => {
  return isLink ? (
    <Link className="custom-button" to={otherProps.to} {...otherProps}>
      {children}
    </Link>
  ) : (
    <button className={`custom-button ${className}`} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
