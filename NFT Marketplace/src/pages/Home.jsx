import React, { useState } from "react";
import "./Home.css";

import card2 from "../images/card2.png";
import profileImage from "../images/Avatar.png";
import nftImage from "../images/ntfcard.png";
import card3 from "../images/birds.png";
import card4 from "../images/birds1.png";
import profileImage1 from "../images/Avatar1.png";

import {
  FaWallet,
  FaGavel,
  FaCoins,
  FaPlus,
  FaTimes,
} from "react-icons/fa";

const activities = [
  {
    name: "Papaya",
    text: "Purchase by you for 0.05 ETH",
    time: "12 mins ago",
  },
  {
    name: "Papaya",
    text: "0.05 ETH Received",
    time: "12 mins ago",
  },
  {
    name: "Papaya",
    text: "Started Following you",
    time: "12 mins ago",
  },
  {
    name: "Papaya",
    text: "Has been sold by 12.75ETH",
    time: "12 mins ago",
  },
  {
    name: "Papaya",
    text: "Purchase by you for 0.05 ETH",
    time: "12 mins ago",
  },
];

const creators = [
  { name: "Papaya", items: "60 Items" },
  { name: "Papaya", items: "60 Items" },
  { name: "Papaya", items: "60 Items" },
  { name: "Papaya", items: "60 Items" },
  { name: "Papaya", items: "60 Items" },
  { name: "Papaya", items: "60 Items" },
  { name: "Papaya", items: "60 Items" },
  { name: "Papaya", items: "60 Items" },
];

const Avatar = () => {
  return (
    <div className="home-avatar">
      <img src={profileImage} alt="Papaya" />
    </div>
  );
};

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

const nfts = [
  {
    id: 1,
    title: "Liquid Wave",
    image: nftImage,
    time: "3h 1m 50s",
    bid: "0.05 ETH",
    total: "0.15 ETH",
  },
  {
    id: 2,
    title: "Liquid Wave",
    image: nftImage,
    time: "3h 1m 50s",
    bid: "0.05 ETH",
    total: "0.15 ETH",
  },
  {
    id: 3,
    title: "Liquid Wave",
    image: nftImage,
    time: "3h 1m 50s",
    bid: "0.05 ETH",
    total: "0.15 ETH",
  },
  {
    id: 4,
    title: "Liquid Wave",
    image: nftImage,
    time: "3h 1m 50s",
    bid: "0.05 ETH",
    total: "0.15 ETH",
  },
  {
    id: 5,
    title: "Liquid Wave",
    image: nftImage,
    time: "3h 1m 50s",
    bid: "0.05 ETH",
    total: "0.15 ETH",
  },
  {
    id: 6,
    title: "Liquid Wave",
    image: nftImage,
    time: "3h 1m 50s",
    bid: "0.05 ETH",
    total: "0.15 ETH",
  },
  {
    id: 7,
    title: "Liquid Wave",
    image: nftImage,
    time: "3h 1m 50s",
    bid: "0.05 ETH",
    total: "0.15 ETH",
  },
  {
    id: 8,
    title: "Liquid Wave",
    image: nftImage,
    time: "3h 1m 50s",
    bid: "0.05 ETH",
    total: "0.15 ETH",
  },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState("All");
  const [liked, setLiked] = useState([]);

  const toggleLike = (id) => {
    setLiked((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="home-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <div className="home-hero-cards">

        <div className="home-hero-banner">
          <div className="home-hero-content">
            <h1>
              Discover, Collect, Sell
              <br />
              and Create your NFT
            </h1>

            <p>
              Digital marketplace for crypto collectibles
              and non fungible tokens
            </p>

            <div className="home-hero-buttons">
              <button className="home-purple-btn">
                Explore
              </button>

              <button className="home-red-btn">
                Create
              </button>
            </div>
          </div>
        </div>

        {/* FEATURED NFT */}

        <div className="home-featured-banner">
          <div className="home-featured-card">

            <img
              src={card2}
              alt="Brighten LQ"
              className="home-featured-image"
            />

            <div className="home-featured-content">

              <div className="home-creator">
                <img
                  src={profileImage}
                  alt="John Abraham"
                />

                <span>
                  John Abraham
                </span>

                
              </div>

              <h2>
                Brighten LQ
              </h2>

              <div className="home-featured-info">

                <div>
                  <span>
                    Auction time
                  </span>

                  <strong>
                    3h 1m 50s
                  </strong>
                </div>

                <div>
                  <span>
                    Current Bid
                  </span>

                  <strong className="home-purple-text">
                    0.05 ETH
                  </strong>

                  <strong>
                    0.15 ETH
                  </strong>
                </div>

              </div>

              <div className="home-featured-buttons">

                <button className="home-purple-btn">
                  Place a Bid
                </button>

                <button className="home-red-btn">
                  Details
                </button>

              </div>

            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          TRENDING NFT
      ===================================================== */}

      <section className="home-trending-section">

        <div className="home-trending-header">

          <h2>
            Trending Bids
          </h2>

          <div className="home-filter-tabs">

            {["All", "Artwork", "Book"].map((tab) => (
              <button
                key={tab}
                className={
                  activeTab === tab
                    ? "home-filter-active"
                    : ""
                }
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}

          </div>
        </div>

        <div className="home-nft-grid">

          {nfts.map((nft) => (
            <div
              className="home-nft-card"
              key={nft.id}
            >

              <div className="home-nft-image-wrapper">

                <img
                  src={nft.image}
                  alt={nft.title}
                  className="home-nft-image"
                />

              </div>

              <div className="home-nft-details">

                <h3>
                  {nft.title}
                </h3>

                <div className="home-nft-info">

                  <div className="home-auction">

                    <span>
                      Auction time
                    </span>

                    <strong>
                      {nft.time}
                    </strong>

                  </div>

                  <div className="home-current-bid">

                    <span>
                      Current Bid
                    </span>

                    <strong className="home-purple-text">
                      {nft.bid}
                    </strong>

                    <strong>
                      {nft.total}
                    </strong>

                  </div>

                </div>

                <button className="home-place-bid">
                  Place a Bid
                </button>

              </div>
            </div>
          ))}

        </div>
      </section>

      {/* =====================================================
          DASHBOARD
      ===================================================== */}

      <div className="home-dashboard">

        <div className="home-top-dashboard">

          {/* TRENDING BIDS */}

          <section className="home-dashboard-trending">

            <h3 className="home-dashboard-title">
              Trending Bids
            </h3>

            <div className="home-bid-card">

              <div className="home-bid-icon home-purple">
                <FaWallet />
              </div>

              <div className="home-bid-info">
                <h4>24K</h4>
                <span>Artworks</span>
              </div>

              <div className="home-bid-growth home-positive">
                +168.00%
              </div>

            </div>

            <div className="home-bid-card">

              <div className="home-bid-icon home-red">
                <FaGavel />
              </div>

              <div className="home-bid-info">
                <h4>89</h4>
                <span>Auction</span>
              </div>

              <div className="home-bid-growth home-negative">
                -168.00%
              </div>

            </div>

            <div className="home-bid-card">

              <div className="home-bid-icon home-green">
                <FaCoins />
              </div>

              <div className="home-bid-info">
                <h4>82K</h4>
                <span>Creators</span>
              </div>

              <div className="home-bid-growth home-positive">
                +158.00%
              </div>

            </div>

          </section>

          {/* ETH PRICE */}

          <section className="home-eth-section">

            <h3 className="home-dashboard-title">
              ETH Price
            </h3>

            <div className="home-chart-card">

              <div className="home-chart-area">

                <div className="home-chart-labels">
                  <span>350</span>
                  <span>300</span>
                  <span>250</span>
                  <span>200</span>
                  <span>150</span>
                  <span>100</span>
                  <span>50</span>
                  <span>0</span>
                </div>

                <svg
                  className="home-line-chart"
                  viewBox="0 0 450 180"
                  preserveAspectRatio="none"
                >

                  <path
                    d="
                      M20 165
                      L60 95
                      L105 103
                      L150 70
                      L195 80
                      L240 38
                      L285 87
                      L330 103
                      L375 115
                      L420 70
                      L420 165
                      L20 165
                      Z
                    "
                    className="home-chart-fill"
                  />

                  <path
                    d="
                      M20 165
                      L60 95
                      L105 103
                      L150 70
                      L195 80
                      L240 38
                      L285 87
                      L330 103
                      L375 115
                      L420 70
                    "
                    className="home-chart-line"
                  />

                  <circle cx="20" cy="165" r="4" />
                  <circle cx="60" cy="95" r="4" />
                  <circle cx="105" cy="103" r="4" />
                  <circle cx="150" cy="70" r="4" />
                  <circle cx="195" cy="80" r="4" />
                  <circle cx="240" cy="38" r="4" />
                  <circle cx="285" cy="87" r="4" />
                  <circle cx="330" cy="103" r="4" />
                  <circle cx="375" cy="115" r="4" />
                  <circle cx="420" cy="70" r="4" />

                </svg>

              </div>
            </div>
          </section>

          {/* STATISTICS */}

          <section className="home-statistics-section">

            <h3 className="home-dashboard-title">
              Statistics
            </h3>

            <div className="home-statistics-card">

              <div className="home-donut-chart">
                <div className="home-donut-inner"></div>
              </div>

              <div className="home-statistics-legend">

                <div className="home-legend-item">
                  <span className="home-legend-dot home-sold"></span>

                  <span>
                    Artwork Sold
                  </span>
                </div>

                <div className="home-legend-item">
                  <span className="home-legend-dot home-cancel"></span>

                  <span>
                    Artwork Cancel
                  </span>
                </div>

              </div>
            </div>
          </section>

        </div>

        {/* =====================================================
            BOTTOM DASHBOARD
        ===================================================== */}

        <div className="home-bottom-dashboard">

          {/* RECENT ACTIVITY */}

          <section className="home-recent-section">

            <div className="home-section-header">

              <h3>
                Recent Activity
              </h3>

              <button>
                See more
              </button>

            </div>

            <div className="home-activity-card">

              {activities.map((activity, index) => (

                <div
                  className="home-activity-item"
                  key={index}
                >

                  <Avatar />

                  <div className="home-activity-info">

                    <h4>
                      {activity.name}
                    </h4>

                    <p>
                      {activity.text}
                    </p>

                  </div>

                  <span className="home-activity-time">
                    {activity.time}
                  </span>

                </div>

              ))}

            </div>

          </section>

          {/* TOP CREATORS */}

          <section className="home-creators-section">

            <div className="home-section-header">

              <h3>
                Top Creators
              </h3>

            </div>

            <div className="home-creators-grid">

              {creators.map((creator, index) => (

                <div
                  className="home-creator-card"
                  key={index}
                >

                  <Avatar />

                  <div className="home-creator-info">

                    <h4>
                      {creator.name}
                    </h4>

                    <span>
                      {creator.items}
                    </span>

                  </div>

                  <button className="home-follow-btn">
                    Follow
                  </button>

                </div>

              ))}

            </div>

          </section>

        </div>
      </div>

      {/* =====================================================
          ACTIVE BIDS
      ===================================================== */}

      <div className="home-active-bids">

        <div className="home-active-bids-header">

          <h2>
            Active Bids
          </h2>

          <button className="home-place-bid-btn">
            <FaPlus />
            Place a Bid
          </button>

        </div>

        <div className="home-bids-table">

          <div className="home-table-header">

            <div className="home-check">
              <input type="checkbox" />
            </div>

            <div>Item List</div>
            <div>Open Price</div>
            <div>Your Offer</div>
            <div>Recent Offer</div>
            <div>Time Left</div>
            <div>Action</div>

          </div>

          <div className="home-bid-list">

            {bids.map((bid) => (

              <div
                className="home-bid-row"
                key={bid.id}
              >

                <div className="home-check">
                  <input type="checkbox" />
                </div>

                <div className="home-item-info">

                  <img
                    src={bid.image}
                    alt={bid.title}
                    className="home-table-nft-image"
                  />

                  <div className="home-item-details">

                    <h4>
                      {bid.title}
                    </h4>

                    <p>
                      {bid.creator}
                    </p>

                  </div>

                </div>

                <div className="home-price">
                  <span className="home-mobile-label">
                    Open Price
                  </span>

                  {bid.openPrice}
                </div>

                <div className="home-price">
                  <span className="home-mobile-label">
                    Your Offer
                  </span>

                  {bid.offer}
                </div>

                <div className="home-recent-offer">

                  <span className="home-mobile-label">
                    Recent Offer
                  </span>

                  <img
                    src={profileImage1}
                    alt="profile"
                    className="home-profile-small"
                  />

                  <span>
                    {bid.recentOffer}
                  </span>

                </div>

                <div className="home-time">

                  <span className="home-mobile-label">
                    Time Left
                  </span>

                  {bid.time}

                </div>

                <div className="home-action">

                  <button>
                    <FaTimes />
                  </button>

                </div>

              </div>

            ))}

          </div>
        </div>
      </div>

    </div>
  );
}