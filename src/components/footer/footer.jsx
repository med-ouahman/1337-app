import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="footer-content">
          <div className="footer-title" >
            <h3>1337++</h3>
          </div>
          <div>
          <div  className="footer-add">
         <p className="footer-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div  className="Quick-Links">
            <h4 className="footer-subtitle">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="/home">Home</a></li>
              <li><a href="/news">News</a></li>
              <li><a href="/experiences">Experiences</a></li>
              <li><a href="FAQ">FQA</a></li>
            </ul>
          </div>
          <div className="Contact-Us">
            <h4 className="footer-subtitle">Contact Us</h4>
            <ul className="footer-contact">
              <li>Email: 1337.ma</li>
              <li>Address: 123 Street Name, City, Country</li>
            </ul>
          </div>
          <div className="Follow-Us">
              <h4 className="footer-subtitle">Follow Us</h4>
            <div className='icons'>
              <a href="#" aria-label="Facebook">
                    <FaFacebook className="social-icon" />
                  </a>
                  <a href="#" aria-label="Instagram">
                    <FaInstagram className="social-icon" />
                  </a>
                  <a href="#" aria-label="Twitter">
                    <FaTwitter className="social-icon" />
                  </a>
            </div>
          </div>
          </div>
          <div className='copyright'>
              <p className="copyright">
                  &copy; {currentYear} 1337++. All rights reserved.
                </p>
          </div>
         </div>
      </div>

    </footer>
  );
};

export default Footer;
