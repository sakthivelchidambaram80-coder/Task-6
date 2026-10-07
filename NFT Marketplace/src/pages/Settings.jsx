import React from "react";
import { FaUserCircle } from "react-icons/fa";
import "./Settings.css";

const Settings = () => {
  return (
    <div className="setting-page">

      {/* Header */}
      <div className="setting-header">
        <div>
          <h1>Setting</h1>
          <p>Welcome Setting Page</p>
        </div>

        <div className="breadcrumb">
          <span>Home</span>
          <b>›</b>
          <strong>Setting</strong>
        </div>
      </div>

      {/* Tabs */}
      <div className="setting-tabs">
        <span className="active">Profile</span>
        <span>Application</span>
        <span>Security</span>
        <span>Activity</span>
        <span>Payment Method</span>
      </div>

      {/* Profile Section */}
      <div className="profile-grid">

        {/* User Profile */}
        <div className="profile-section">
          <h2>User profile</h2>

          <div className="profile-card">

            <input
              type="text"
              className="profile-input"
            />

            <div className="user-info">
              <div className="user-icon">
                <FaUserCircle />
              </div>

              <div>
                <h3>John Smith</h3>
                <p>Welcome Setting Page</p>
              </div>
            </div>

            <button className="save-btn">
              Save
            </button>

          </div>
        </div>


        {/* Update Profile */}
        <div className="profile-section">
          <h2>Update Profile</h2>

          <div className="profile-card update-card">

            <label>Email</label>
            <input type="email" />

            <label>Password</label>
            <input type="password" />

            <button className="save-btn">
              Save
            </button>

          </div>
        </div>

      </div>


      {/* Personal Information */}
      <div className="personal-section">

        <h2>Personal Information</h2>

        <div className="personal-card">

          <div className="personal-column">

            <div className="input-group">
              <label>Info</label>
              <input type="text" />
            </div>

            <div className="input-group">
              <label>Info</label>
              <input type="text" />
            </div>

            <div className="input-group">
              <label>Info</label>
              <input type="text" />
            </div>

          </div>


          <div className="personal-column">

            <div className="input-group">
              <label>Info</label>
              <input type="text" />
            </div>

            <div className="input-group">
              <label>Info</label>
              <input type="text" />
            </div>

            <div className="input-group">
              <label>Info</label>
              <input type="text" />
            </div>

          </div>

          <button className="save-btn personal-save">
            Save
          </button>

        </div>

      </div>

    </div>
  );
};

export default Settings;