import React from 'react';
import About from '../../components/About';
import Jumbotron from '../../components/Jumbotron';
import Levels from '../../components/Levels';
import Ready from '../../components/Ready';
import './home.css';

export default function Home() {
  return (
    <div>
        <Jumbotron />
        <About />
        <Levels />
        <Ready />
    </div>
  )
}
