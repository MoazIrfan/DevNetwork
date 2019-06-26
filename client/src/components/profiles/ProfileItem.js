import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import isEmpty from "../../validation/is-empty";

class ProfileItem extends Component {
  render() {
    const { profile } = this.props;

    return (
      <div className="card card-body bg-light mt-3 ">
        <div className="row">
          <div className="col-md-12">
            <Link
              to={`/profile/${profile.handle}`}
              className="btn btn-dark right"
            >
              View Profile
            </Link>
            <h4>
              <img
                src={profile.user.avatar}
                alt=""
                className="avatar rounded-circle"
              />
              {profile.user.name}
            </h4>

            <p>
              {profile.status}{" "}
              {isEmpty(profile.company) ? null : (
                <span>at {profile.company}</span>
              )}
            </p>
            <p>
              {isEmpty(profile.location) ? null : (
                <span>{profile.location} </span>
              )}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;
