
import React, { useState } from "react";
import "./Collections.css";
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

export default function Collections() {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <section className="collections-section">

      {/* ================= COLLECTIONS HEADER ================= */}

      <div className="collections-header">

        <h2>Collections<span className="sub" ><br></br>Welcome Collections Page</span></h2>
        

        <div className="collections-breadcrumb">
          <span>Home</span>
          <b>›</b>
          <strong>Bids</strong>
        </div>

      </div>

      {/* ================= FILTER TABS ================= */}

      <div className="collections-filter-tabs">

        {["All", "Artwork", "Book"].map((tab) => (
          <button
            key={tab}
            className={
              activeTab === tab
                ? "collections-filter-active"
                : "collections-filter-button"
            }
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}

      </div>

      {/* ================= NFT GRID ================= */}

      <div className="collections-nft-grid">

        {nfts.map((nft) => (
          <div className="collections-nft-card" key={nft.id}>

            {/* IMAGE */}

            <div className="collections-nft-image-wrapper">

              <img
                src={nft.image}
                alt={nft.title}
                className="collections-nft-image"
              />

            </div>

            {/* DETAILS */}

            <div className="collections-nft-details">

              <h3>{nft.title}</h3>

              <div className="collections-nft-info">

                {/* AUCTION */}

                <div className="collections-auction">

                  <span>Auction time</span>

                  <strong>{nft.time}</strong>

                </div>

                {/* CURRENT BID */}

                <div className="collections-current-bid">

                  <span>Current Bid</span>

                  <strong className="collections-purple-text">
                    {nft.bid}
                  </strong>

                  <strong>{nft.total}</strong>

                </div>

              </div>

              {/* BID BUTTON */}

              <button className="collections-place-bid">
                Place a Bid
              </button>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}
