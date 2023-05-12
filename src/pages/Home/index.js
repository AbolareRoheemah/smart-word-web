import React from "react";
import Header from "../../components/Header";
import About from "../../components/About";
import Jumbotron from "../../components/Jumbotron";
import Levels from "../../components/Levels";
import PlayforFree from "../../components/PlayForFree/PlayforFree";
import PlaytoEarn from "../../components/PlayToEarn/PlaytoEarn";
import Ready from "../../components/ReadySection";
import Footer from "../../components/Footer";
import "./home.css";

export default function Home() {
  return (
    <div className="home-ctn">
      <Header />
      <Jumbotron />
      <About />
      <Levels />
      <PlayforFree />
      <PlaytoEarn />
      <Ready />
      <Footer />
    </div>
  );
}
