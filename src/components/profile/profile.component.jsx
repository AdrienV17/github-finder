import React from "react";
import "./profile.styles.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectProfileEssentials } from "../../redux/profile/profile.selectors";

const Profile = ({ profile }) => {
  const url = `https://github.com/${profile.username}`;
  return (
    <a className="homepage__profile" href={url} target="_blank" rel="noopener noreferrer">
      <div className="profile__header">
        <div className="header__title">{profile.username}</div>
      </div>
      <div className="profile__card">
        <div className="card__left">
          <div
            className="left__avatar"
            style={{
              background: `url(${profile.avatarUrl})`,
              backgroundSize: 155,
              backgroundPosition: "center",
            }}
          ></div>
          <div className="left__text">
            <div className="text__name">{profile.name}</div>
            <div className="text__username">({profile.username})</div>
          </div>
        </div>
        <div className="card__right">
          <div className="right__repos">
            <div className="repos__title">Repos</div>
            <div className="repos__number">{profile.repos}</div>
          </div>
          <div className="right__followers">
            <div className="followers__title">Followers</div>
            <div className="followers__number">{profile.followers}</div>
          </div>
        </div>
      </div>
    </a>
  );
};
const mapStateToProps = createStructuredSelector({
  profile: selectProfileEssentials,
});
export default connect(mapStateToProps)(Profile);
