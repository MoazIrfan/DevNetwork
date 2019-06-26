import React from "react";
import { Link } from "react-router-dom";

const ProfileActions = () => {
  return (
    <div className="btn-group mt-4 mb-4" role="group">
      <Link to="/edit-profile" className="btn btn-link dark">
        <i className="fas fa-edit text-secondary mr-1" /> Edit Profile
      </Link>

      <Link to="/add-education" className="btn btn-link dark">
        <i className="fas fa-graduation-cap text-secondary mr-1" />
        Add Education
      </Link>

      <Link to="/add-experience" className="btn btn-link dark">
        <i className="fas fa-briefcase text-secondary mr-1" />
        Add Experience
      </Link>
    </div>
  );
};

export default ProfileActions;
