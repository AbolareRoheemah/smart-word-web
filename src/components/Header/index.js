import React from 'react';
import './header.css';

export default function Header() {
  return (
    <div className='header-ctn'>
        <div className="logo-ctn">
            <img src="../../assets/images/pngs/smart-word-logo.png" alt="Logo" />
        </div>
        <div className="links-ctn">
            <p className="link-tags">Home</p>
            <p className="link-tags">Games</p>
            <p className="link-tags">Marketplace</p>
            <p className="link-tags">Team</p>
            <p className="link-tags">Community</p>
        </div>
        <div className="btn-div">Connect wallet</div>
    </div>
  )
}
