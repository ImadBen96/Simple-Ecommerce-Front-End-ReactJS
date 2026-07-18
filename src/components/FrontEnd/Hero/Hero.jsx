import React from 'react';
import  "./Hero.css";
import hand_icon from "../assets/hand_icon.png";
// import hero_image from "../assets/exclusive_image.png";
import right_logo from "../assets/hero-right-1.webp";
function Hero() {
    return (
        <div className="hero">
            {/*back-hero.svg*/}
            <div className="hero-left">
                <h2>NEW ARRIVALS ONLY</h2>
              <div>
                  <div className="hero-hand-icon">
                      <p style={{color: "#994bc2"}} className="new">New</p>
                      <img src={hand_icon}  alt=""/>
                  </div>
                  <p>Collections</p>
                  <p>For Everyone</p>
              </div>
                <div   className="hero-latest-btn">
                    <div>Latest Collection</div>
                </div>
            </div>

            <div className="hero-right">
                <img src={right_logo}  alt=""/>
            </div>
        </div>
    );
}

export default Hero;