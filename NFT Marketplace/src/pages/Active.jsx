import React from "react";
import "./Active.css";

import {
  FaFileAlt,
  FaGavel,
  FaUsers,
  FaFileExcel,
  FaTimes,
  FaPlus,
} from "react-icons/fa";

import card3 from "../images/birds.png";
import card4 from "../images/birds1.png";
import profileImage from "../images/avatar1.png";

const bids = [
  {
    id: 1,
    title: "Cute Cube Cool",
    creator: "John Abraham",
    image: card3,
    openPrice: "0.0025 ETH",
    offer: "0.0025 ETH",
    recentOffer: "0.0025 ETH",
    time: "2 Hours 1min 30s",
  },
  {
    id: 2,
    title: "Cute Cube Cool",
    creator: "John Abraham",
    image: card4,
    openPrice: "0.0025 ETH",
    offer: "0.0025 ETH",
    recentOffer: "0.0025 ETH",
    time: "2 Hours 1min 30s",
  },
  {
    id: 3,
    title: "Liquid Wave",
    creator: "John Abraham",
    image: card3,
    openPrice: "0.0025 ETH",
    offer: "0.0025 ETH",
    recentOffer: "0.0025 ETH",
    time: "2 Hours 1min 30s",
  },
  {
    id: 4,
    title: "Cute Cube Cool",
    creator: "John Abraham",
    image: card4,
    openPrice: "0.0025 ETH",
    offer: "0.0025 ETH",
    recentOffer: "0.0025 ETH",
    time: "2 Hours 1min 30s",
  },
  {
    id: 5,
    title: "Cute Cube Cool",
    creator: "John Abraham",
    image: card3,
    openPrice: "0.0025 ETH",
    offer: "0.0025 ETH",
    recentOffer: "0.0025 ETH",
    time: "2 Hours 1min 30s",
  },
  {
    id: 6,
    title: "Liquid Wave",
    creator: "John Abraham",
    image: card4,
    openPrice: "0.0025 ETH",
    offer: "0.0025 ETH",
    recentOffer: "0.0025 ETH",
    time: "2 Hours 1min 30s",
  },
  {
    id: 7,
    title: "Liquid Wave",
    creator: "John Abraham",
    image: card3,
    openPrice: "0.0025 ETH",
    offer: "0.0025 ETH",
    recentOffer: "0.0025 ETH",
    time: "2 Hours 1min 30s",
  },
];

export default function Active() {
  return (
    <div className="bids-page">

      {/* Header */}
      <div className="bids-header">
        <div>
          <h1>Bids</h1>
          <p>Welcome Bids Page</p>
        </div>

        <div className="breadcrumb">
          <span>Home</span>
          <b>›</b>
          <strong>Bids</strong>
        </div>
      </div>

      {/* Statistics */}
      <div className="bid-stats">

        <div className="stat-card">
          <div className="stat-icon purple">
            <FaFileAlt />
          </div>

          <div>
            <h3>24K</h3>
            <p>Artworks</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon green">
            <FaGavel />
          </div>

          <div>
            <h3>82K</h3>
            <p>Auction</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon yellow">
            <FaUsers />
          </div>

          <div>
            <h3>200</h3>
            <p>Creators</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon red">
            <FaFileExcel />
          </div>

          <div>
            <h3>89</h3>
            <p>Canceled</p>
          </div>
        </div>

      </div>

      {/* Active Bids Header */}
      <div className="active-bids-header">
        <h2>Active Bids</h2>

        <button className="place-bid-btn">
          <FaPlus />
          Place a Bid
        </button>
      </div>

      {/* Table */}
      <div className="bids-table">

        {/* Table Header */}
        <div className="table-header">
          <div className="check">
            <input type="checkbox" />
          </div>

          <div>Item List</div>
          <div>Open Price</div>
          <div>Your Offer</div>
          <div>Recent Offer</div>
          <div>Time Left</div>
          <div>Action</div>
        </div>

        {/* Rows */}
        <div className="bid-list">

          {bids.map((bid) => (
            <div className="bid-row" key={bid.id}>

              <div className="check">
                <input type="checkbox" />
              </div>

              {/* Item */}
              <div className="item-info">

                <img
                  src={bid.image}
                  alt={bid.title}
                  className="nft-image"
                />

                <div className="item-details">
                  <h4>{bid.title}</h4>
                  <p>{bid.creator}</p>
                </div>

              </div>

              {/* Open Price */}
              <div className="price">
                <span className="mobile-label">Open Price</span>
                {bid.openPrice}
              </div>

              {/* Your Offer */}
              <div className="price">
                <span className="mobile-label">Your Offer</span>
                {bid.offer}
              </div>

              {/* Recent Offer */}
              <div className="recent-offer">

                <span className="mobile-label">
                  Recent Offer
                </span>

                <img
                  src={profileImage}
                  alt="profile"
                  className="profile-small"
                />

                <span>{bid.recentOffer}</span>

              </div>

              {/* Time */}
              <div className="time">
                <span className="mobile-label">Time Left</span>
                {bid.time}
              </div>

              {/* Action */}
              <div className="action">
                <button>
                  <FaTimes />
                </button>
              </div>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
}

