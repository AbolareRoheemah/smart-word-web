import React from 'react';
import './footer.css';

export default function Footer() {
  return (
    <div className='footer-ctn'>
        <div className="footer-top-div">
            <div className="logo-div">
            <img src="../../assets/images/pngs/smart-word-logo.png" alt="Logo" />
                <div className="socials-div">
                    <img src="../../assets/images/pngs/facebook.png" alt="" />
                    <img src="../../assets/images/pngs/instagram.png" alt="" />
                    <img src="../../assets/images/pngs/linkedin.png" alt="" />
                    <img src="../../assets/images/pngs/twitter.png" alt="" />
                </div>
            </div>
            <div className="links-div">
                <p className="link-header">Company</p>
                <p className="links">Team</p>
                <p className="links">Contact us</p>
                <p className="links">Marketplace</p>
            </div>
            <div className="links-div">
                <p className="link-header">Powered by</p>
                <p className="links img-links">
                    <img src="../../assets/images/pngs/facebook.png" alt="" />
                    <span>Celo</span>
                </p>
            </div>
            <div className="links-div">
                <p className="link-header">Support</p>
                <p className="links">FAQs</p>
                <p className="links">Terms of use</p>
                <p className="links">Privacy policy</p>
            </div>
        </div>
        <div className="copy-div">
            <p className="copy-text">&copy; 2023 smartword. All rights reserved</p>
        </div>
    </div>
  )
}
