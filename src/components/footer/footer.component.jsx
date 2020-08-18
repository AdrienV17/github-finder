import React from "react";
import "./footer.styles.scss";
import { socialMedia } from "../../assets/base-data";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__header">
        <div className="header__title">Adrien</div>
      </div>
      <div className="footer__social-media">
        {socialMedia.map(({ icon, name,pageLink }, i) => (
          <div key={i} className="social-media__social">
            <i className={icon}></i>
            <a  target='_blank' rel='noopener noreferrer' href={pageLink} className="social__name">{name}</a>
          </div>
        ))}
      </div>
      <div className="footer__copyright">
          <div className="copyright__text">

      © Copyright Adrien 2020 || All Rights Reserved.
          </div>
      </div>
    </div>
  );
};

export default Footer;
