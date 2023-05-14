import React from 'react';
import './levels.css'

export default function Levels() {
  return (
    <div className='level-ctn'>
      <p className="level-text">Levels of games</p>
      <p className="levels-smalls"> Our puzzle game is designed to provide hours of fun and entertainment for players of all levels ranging from beginners to intermediate and also, expert level.</p>
      <div className="level-types-ctn">
        <div className="level-types">
          <div className='img'><img src="../../../assets/images/pngs/level1.png" alt="" /></div>
          <p className="level-name">Beginner</p>
        </div>
        <div className="level-types">
        <div className='img'><img src="../../../assets/images/pngs/level2.png" alt="" /></div>
          <p className="level-name">Intermediate</p>
        </div>
        <div className="level-types">
        <div className='img'><img src="../../../assets/images/pngs/level3.png" alt="" /></div>
          <p className="level-name">Expert</p>
        </div>
      </div>
    </div>
  )
}
