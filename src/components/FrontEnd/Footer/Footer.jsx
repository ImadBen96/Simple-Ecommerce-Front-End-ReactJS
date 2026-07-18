import React from  "react";
import "./Footer.css";
import Logo from "../assets/logo/logo-commerce-footer-removebg-preview.png"
const  Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
        return (
            <div className="footer">
                <div className="newsletter-wrap">
                    <h2>Subscribe to our newsletter</h2>
                    <p>Stay updated! Subscribe to our mailing list for news, updates, and exclusive offers.</p>
                    <div className="newsletter-pill-wrap">
                        <div className="newsletter-box">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                                 stroke="#aaa" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 7 10-7"/>
                            </svg>
                            <input type="email" placeholder="Enter your email" />
                            <button>Subscribe</button>
                        </div>
                    </div>
                </div>
                <footer className="footer">
                    <div className="footer-curve"></div>

                    <div className="footer-grid">

                        <div className="footer-col">
                            <div className="brand-logo">
                                    <img className="img-fluid" src={Logo} alt="logo" />
                            </div>
                            <p className="brand-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div className="social-icons">
                                <a href="#" aria-label="Facebook">f</a>
                                <a href="#" aria-label="Instagram">ig</a>
                                <a href="#" aria-label="LinkedIn">in</a>
                                <a href="#" aria-label="Pinterest">P</a>
                                <a href="#" aria-label="Behance">Bē</a>
                            </div>
                            <p className="app-label">Download Our App:</p>
                            <div className="app-btns">
                                <a href="#" className="app-btn">
                                    <div><span className="small">GET IT ON</span><span className="big">Google Play</span></div>
                                </a>
                                <a href="#" className="app-btn">
                                    <div><span className="small">Download on the</span><span className="big">App Store</span></div>
                                </a>
                            </div>
                        </div>

                        <div className="footer-col">
                            <h4>About</h4>
                            <ul>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Terms &amp; Conditions</a></li>
                                <li><a href="#">Careers</a></li>
                                <li><a href="#">Latest News</a></li>
                                <li><a href="#">Contact Us</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                            </ul>
                        </div>

                        <div className="footer-col">
                            <h4>My Account</h4>
                            <ul>
                                <li><a href="#">Your Account</a></li>
                                <li><a href="#">Return Policies</a></li>
                                <li><a href="#">Become a Vendor</a></li>
                                <li><a href="#">Wishlist</a></li>
                                <li><a href="#">Affiliate Program</a></li>
                                <li><a href="#">FAQs</a></li>
                            </ul>
                        </div>

                        <div className="footer-col">
                            <h4>Categories</h4>
                            <ul>
                                <li><a href="#">Healthcare</a></li>
                                <li><a href="#">Fashion</a></li>
                                <li><a href="#">Organic</a></li>
                                <li><a href="#">Beauty</a></li>
                                <li><a href="#">Groceries</a></li>
                                <li><a href="#">Fashion</a></li>
                            </ul>
                        </div>

                        <div className="footer-col">
                            <h4>Contact Information's</h4>
                            <div className="contact-item">
                                <div className="ci-icon">📍</div>
                                <div className="ci-text">2715 Ash Dr. San Jose, South Dakota 83475</div>
                            </div>
                            <div className="contact-item">
                                <div className="ci-icon">📞</div>
                                <div className="ci-text">Call Us: (239) 555-0108</div>
                            </div>
                            <div className="contact-item">
                                <div className="ci-icon">✉️</div>
                                <div className="ci-text">sara.cruz@example.com</div>
                            </div>
                            <div className="contact-item">
                                <div className="ci-icon">🖨️</div>
                                <div className="ci-text">sara.cruz@example.com</div>
                            </div>

                        </div>

                    </div>

                    <div className="footer-bottom">
                        Made by  Imad Gannoun © 2024 ❤️
                    </div>
                    <button className="scroll-top" onClick={scrollToTop}>
                       Top
                    </button>
                </footer>
            </div>
        );
}

export default Footer;