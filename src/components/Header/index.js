import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

export default function Header() {
  return (
    <div className='header-ctn'>
        <div className="logo-ctn">
            <img src="../../assets/images/pngs/smart-word-logo.png" alt="Logo" />
        </div>
        <div className="links-ctn">
            <NavLink className="link-tags" to="/">Home</NavLink>
            <NavLink className="link-tags" to="/game">Games</NavLink>
            <NavLink className="link-tags" to="/">Marketplace</NavLink>
            <NavLink className="link-tags" to="/">Team</NavLink>
            <NavLink className="link-tags" to="/">Community</NavLink>
        </div>
        <div className="btn-div">Connect wallet</div>
    </div>
  )
}
