
import React, { useState } from "react";
import "./Favorites.css";
import nftImage from "../images/ntfcard.png";

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

export default function Favorites() {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <section className="favorites-section">

      {/* ================= FAVORITES HEADER ================= */}

      <div className="favorites-header">

        <h2>Saved Items</h2>

        {/* FILTER */}

        <div className="breadcrumb">
          <span>Home</span>
          <b>›</b>
          <strong>Bids</strong>
        </div>

      </div>

      {/* ================= NFT GRID ================= */}

      <div className="favorites-nft-grid">

        {nfts.map((nft) => (
          <div className="favorites-nft-card" key={nft.id}>

            {/* IMAGE */}

            <div className="favorites-nft-image-wrapper">

              <img
                src={nft.image}
                alt={nft.title}
                className="favorites-nft-image"
              />

            </div>

            {/* DETAILS */}

            <div className="favorites-nft-details">

              <h3>{nft.title}</h3>

              <div className="favorites-nft-info">

                {/* AUCTION */}

                <div className="favorites-auction">

                  <span>Auction time</span>

                  <strong>{nft.time}</strong>

                </div>

                {/* CURRENT BID */}

                <div className="favorites-current-bid">

                  <span>Current Bid</span>

                  <strong className="favorites-purple-text">
                    {nft.bid}
                  </strong>

                  <strong>{nft.total}</strong>

                </div>

              </div>

              {/* BID BUTTON */}

              <button className="favorites-place-bid">
                Place a Bid
              </button>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}
