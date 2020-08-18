import React from "react";
import "./homepageJSX.styles.scss";
import ProfileForm from "../profile-form/profile-form.subcomponent";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectIsProfile,
  selectIsFetching,
  selectNotFoundMessage,
} from "../../../../redux/profile/profile.selectors";
import Profile from "../../../../components/profile/profile.component";
import Spinner from "../../../../components/spinner/spinner.component";
import Default404 from "../../../../components/default-404/default-404.component";

const HomepageJSX = ({ isProfile, isFetching, notFoundMessage }) => {
  console.log(isProfile);
  const default404Message = {
    title: 'User Not Found',
    subtitle:'Please Try Again or try with another Github Profile'
  }
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
        <ProfileForm />
      </div>
      {isProfile ? (
        <Profile />
      ) : notFoundMessage ? (
        <Default404 title={default404Message.title} subtitle={default404Message.subtitle}/>
      ) : isFetching ? (
        <Spinner />
      ) : null}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  isProfile: selectIsProfile,
  isFetching: selectIsFetching,
  notFoundMessage: selectNotFoundMessage,
});
export default connect(mapStateToProps)(HomepageJSX);
