import React from 'react'
import './jumbotron.css'

export default function Jumbotron() {
  return (
    <div className='jumbotron-ctn'>
        <div className="text-ctn">
            <p className="extra">Extraordinary Creative Puzzle <br /><span>Games</span></p>
            <p className="below-extra">Start winning with the most exclusive crypto</p>
            <button className="demo-btn">
                <img src="../../../assets/images/pngs/play.png" alt="" />
                <p>Play Demo</p>
            </button>
        </div>
        <div className="hero-img-ctn">
            <img src="../../../assets/images/pngs/hero-img.png" alt="" />
        </div>
    </div>
  )
}
