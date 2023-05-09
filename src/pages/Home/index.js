import React from 'react';
import Header from '../../components/Header';
import About from '../../components/About';
import Jumbotron from '../../components/Jumbotron';
import Levels from '../../components/Levels';
import Ready from '../../components/Ready';
import Footer from '../../components/Footer';
import './home.css';

export default function Home() {
  return (
    <div>
        <Header />
        <Jumbotron />
        <About />
        <Levels />
        <Ready />
      <Footer />
    </div>
  )
}
