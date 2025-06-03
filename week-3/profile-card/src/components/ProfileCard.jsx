import React from "react";
import PropTypes from "prop-types";
import "./ProfileCard.css";
import Skeleton from "@mui/material/Skeleton";

const ProfileCard = ({ name, age, profession, profileImage, loading = true }) => {
  return (
    <div className="profile-card">
      <div className="profile-image-area">
        {loading ? (
          <Skeleton variant="circular" width={100} height={100} animation="wave" />
        ) : (
          <img src={profileImage} alt={`${name}'s profile`} />
        )}
      </div>
      <div className="profile-content">
        <h2>
          {loading ? (
            <Skeleton animation="wave" width="60%" height={30} />
          ) : (
            name
          )}
        </h2>
        <p>
          <strong>Age:</strong>{" "}
          {loading ? <Skeleton animation="wave" width="30%" /> : age}
        </p>
        <p>
          <strong>Profession:</strong>{" "}
          {loading ? <Skeleton animation="wave" width="80%" /> : profession}
        </p>
      </div>
    </div>
  );
};

ProfileCard.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  profession: PropTypes.string,
  profileImage: PropTypes.string,
  loading: PropTypes.bool,
};

export default ProfileCard;
