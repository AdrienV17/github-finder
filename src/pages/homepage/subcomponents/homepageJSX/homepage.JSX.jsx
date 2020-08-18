import React, { useState } from "react";
import "./homepageJSX.styles.scss";
import ProfileForm from "../profile-form/profile-form.subcomponent";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectIsProfile } from "../../../../redux/profile/profile.selectors";
import Profile from "../../../../components/profile/profile.component";
const HomepageJSX = ({isProfile}) => {
console.log(isProfile);
  return (
    <div className="homepage">
      <div className="homepage__header">
        <div className="header__github">
          <i className="fab fa-github"></i>
        </div>
        <div className="header__line"></div>
        <div className="header__finder">Finder</div>
      </div>
      <div className="homepage__body">
        <div className="body__subtitle">Search Github Profiles Easily</div>
        <ProfileForm/>
      </div>
      {isProfile?<Profile/>:null}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  isProfile: selectIsProfile
})
export default connect(mapStateToProps)(HomepageJSX);
