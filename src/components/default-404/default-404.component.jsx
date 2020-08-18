import React from "react";
import "./default-404.styles.scss";
const INITIAL_ICON = "https://i.imgur.com/A040Lxr.png";
const Default404 = ({ title, subtitle, icon = INITIAL_ICON }) => {
  return (
    <div className="default-404">
      <div className="default-404__icon">
        <img src={icon} alt="" />
      </div>
      <div className="default-404__text">
        <div className="text__title">{title}</div>
        <div className="text__subtitle">{subtitle}</div>
      </div>
    </div>
  );
};

export default Default404;
