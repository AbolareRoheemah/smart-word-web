import React from "react";
import "./PlayforFree.css";
import ForFree from "./Images/ForFree.png";
import {FaPlay} from "react-icons/fa";

//const PlayforFree = () => {
//  return (
//    <div className="play-for-free-section">
//      <h2>Play for Free</h2>
//    <p>Enjoy the best and most fun gaming experience
//      when you play games for free.</p>
//</div>
//);
//};

//function PlayforFree() {
//return (
//<div className="hero-section">
//<div className="hero-text">
//<h1>Play for Free</h1>
//<p>Enjoy the best and most fun gaming experience when you play games for free.</p>
//</div>
//<button className="hero-button">Play for Free</button>
//</div>
//);
//}

function PlayforFree() {
  return (
    <div className="image-section">
      <div className="heading-container">
        <h2>Play for Free</h2>
        <p className="letters">
          Enjoy the best and most fun gaming experience when you play games for
          free.
        </p>
        <button className="hero-button"><FaPlay />Play for Free</button>
        
        
      </div>
      <div className="image-container">
        <img src={ForFree} className="ForFree-logo" alt="img" />
      </div>
    </div>
  );
}

export default PlayforFree;
