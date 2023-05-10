import React from "react";
import "./PlaytoEarn.css";
import ToEarn from "./Images/ToEarn.png";
import {FaPlay} from "react-icons/fa";

//const PlaytoEarn = () => {
//  return (
//    <div className="play-to-earn-section">
//      <h2>Play to Earn</h2>
//    <p>Connect your preferred cryptocurrency wallet from the available wallets
//      when you sign up to earn and accumulate your rewards in cryptocurrency.</p>
//</div>
//);
//};

//function PlaytoEarn() {
//  return (
//  <div className="hero-section">
//  <div className="hero-text">
//  <h1>Play to Earn</h1>
//<p>Connect your preferred cryptocurrency wallet from the available wallets
//    when you sign up to earn and accumulate your rewards in cryptocurrency.</p>
//</div>
//<button className="hero-button">Play to Earn</button>
//</div>
//);
//}

function PlaytoEarn() {
  return (
    <div className="image-text-section">
      <div className="text-container">
        <h2>Play to Earn</h2>
        <p className="bridge">
          Connect your preferred cryptocurrency wallet from the available
          wallets when you sign up to earn and accumulate your rewards in
          cryptocurrency.
        </p>
        <button className="hero-btn"><FaPlay />Play to Earn</button>
      </div>
      <div className="img-container">
        <img src={ToEarn} className="ToEarn-logo" alt="img" />
      </div>
    </div>
  );
}

export default PlaytoEarn;
