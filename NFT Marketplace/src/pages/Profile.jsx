import React from "react";
import "./Profile.css";

import profileImage from "../images/Avatar.png";
import nftImage from "../images/ntfcard.png";

const followingUsers = [
  { id: 1, name: "Papaya", items: "60 items" },
  { id: 2, name: "Papaya", items: "60 items" },
  { id: 3, name: "Papaya", items: "60 items" },
  { id: 4, name: "Papaya", items: "60 items" },
];

const nfts = [
  { id: 1, title: "Liquid Wave", image: nftImage },
  { id: 2, title: "Liquid Wave", image: nftImage },
  { id: 3, title: "Liquid Wave", image: nftImage },
  { id: 4, title: "Liquid Wave", image: nftImage },
  { id: 5, title: "Liquid Wave", image: nftImage },
  { id: 6, title: "Liquid Wave", image: nftImage },
  { id: 7, title: "Liquid Wave", image: nftImage },
  { id: 8, title: "Liquid Wave", image: nftImage },
];

export default function Profile() {
  return (
    <div className="user-profile-page">

      {/* HEADER */}
      <div className="user-profile-header">
        <div>
          <h1>Profile</h1>
          <p>Welcome Profile Page</p>
        </div>

        <div className="user-profile-breadcrumb">
          <span>Home</span>
          <span>/</span>
          <span>Profile</span>
        </div>
      </div>


      {/* TOP CONTENT */}
      <div className="user-profile-top">

        {/* PROFILE CARD */}
        <div className="user-profile-card">

          <div className="user-profile-user">
            <img
              src={profileImage}
              alt="Profile"
            />

            <div>
              <h3>Welcome, John Smith</h3>

              <p>
                Looks like you are not verified yet.
                Verify yourself
                <br />
                to use the full potential of Website.
              </p>
            </div>
          </div>


          {/* Verify Account */}
          <div className="user-profile-option">
            <span className="user-profile-option-icon user-profile-green">
              ✓
            </span>

            <span>Verify account</span>
          </div>


          {/* Two Factor Authentication */}
          <div className="user-profile-option">
            <span className="user-profile-option-icon user-profile-purple">
              ●
            </span>

            <span>Two-factor Authentication (2FA)</span>
          </div>

        </div>


        {/* FOLLOWING */}
        <div className="user-following-section">

          <h2>Following</h2>

          <div className="user-following-grid">

            {followingUsers.map((user) => (

              <div
                className="user-following-card"
                key={user.id}
              >

                <div className="user-following-user">

                  <img
                    src={profileImage}
                    alt={user.name}
                  />

                  <div>
                    <h3>{user.name}</h3>
                    <p>{user.items}</p>
                  </div>

                </div>


                <button>
                  Unfollow
                </button>

              </div>

            ))}

          </div>

        </div>

      </div>


      {/* MY BOUGHT */}
      <section className="user-nft-section">

        <h2>My bought</h2>

        <div className="user-nft-grid">

          {nfts.slice(0, 4).map((nft) => (

            <div
              className="user-nft-card"
              key={nft.id}
            >

              <div className="user-nft-image-wrapper">

                <img
                  src={nft.image}
                  alt={nft.title}
                />

                

              </div>

              <h3>{nft.title}</h3>

            </div>

          ))}

        </div>

      </section>


      {/* MY COLLECTIONS */}
      <section className="user-nft-section user-nft-collections">

        <h2>My collections</h2>

        <div className="user-nft-grid">

          {nfts.slice(4, 8).map((nft) => (

            <div
              className="user-nft-card"
              key={nft.id}
            >

              <div className="user-nft-image-wrapper">

                <img
                  src={nft.image}
                  alt={nft.title}
                />

                

              </div>

              <h3>{nft.title}</h3>

            </div>

          ))}

        </div>

      </section>

    </div>
  );
}