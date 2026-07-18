import "./About.css";
import aboutUsImg01 from "../../../assets/images/about-us-img01.jpg"
import aboutUsImg02 from "../../../assets/images/about-us-img02.png"
import aboutUsImg03 from "../../../assets/images/about-hero-right.webp"
function About() {
    return (
        <div className="about">
            <div className="header-about">
                <h1>AboutUs Page</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
            </div>
            <section className="section">
                <div className="text-col">
                    <div className="badge">
                        <div className="badge-dot"></div>
                        Features
                    </div>

                    <h2>Faster Free Delivery</h2>

                    <p className="lead">
                        Experience the ultimate convenience with our Faster Free Delivery service—designed to bring your
                        orders to your doorstep quickly and without any extra cost. Whether you're ordering essentials
                        or
                        gifts,
                        we make sure you get them faster than ever. Why You'll Love It:
                    </p>

                    <ul className="checklist">
                        <li>
                            <div className="check-icon">
                                <svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="#fff"
                                     strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="2 6 5 9 10 3"/>
                                </svg>
                            </div>
                            <span><strong>Absolutely Free:</strong> No delivery fees, no hidden charges—just fast, reliable service.</span>
                        </li>
                        <li>
                            <div className="check-icon">
                                <svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="#fff"
                                     strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="2 6 5 9 10 3"/>
                                </svg>
                            </div>
                            <span><strong>Real-Time Tracking:</strong> Stay updated every step of the way with live order tracking.</span>
                        </li>
                        <li>
                            <div className="check-icon">
                                <svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="#fff"
                                     strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="2 6 5 9 10 3"/>
                                </svg>
                            </div>
                            <span><strong>Reliable Delivery Partners:</strong> We've partnered with trusted couriers to ensure your packages.</span>
                        </li>
                        <li>
                            <div className="check-icon">
                                <svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="#fff"
                                     strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="2 6 5 9 10 3"/>
                                </svg>
                            </div>
                            <span><strong>Weekend &amp; Evening Delivery:</strong> Get your items when it's most convenient for you.</span>
                        </li>
                    </ul>

                    <p className="outro">
                        Say goodbye to long waits and shipping fees. With Faster Free Delivery, we're raising the
                        standard—fast, seamless, and 100% free.
                    </p>
                </div>
                <div className="img-col">

                    <div className="img-main">
                        <img src={aboutUsImg01} alt="Woman using shopping app"/>

                        <div className="phone-mock">
                            <div className="phone-bar"></div>
                            <div className="phone-row">
                                <span className="phone-label">Flash Sale!</span>
                                <span className="phone-see">See All ›</span>
                            </div>
                            <div className="phone-banner">
                                <span>Up to 50% OFF<br/>Ends in 3 Hours!</span>
                            </div>
                            <div className="phone-row">
                                <span className="phone-label">Live Now</span>
                                <span className="phone-see">See All ›</span>
                            </div>
                            <div className="phone-avatars">
                                <div className="phone-av"></div>
                                <div className="phone-av"></div>
                                <div className="phone-av"></div>
                                <div className="phone-av"></div>
                                <div className="phone-av"></div>
                            </div>
                            <div className="phone-row">
                                <span className="phone-label">Mega Live Sales</span>
                                <span className="phone-see">See All ›</span>
                            </div>
                            <div className="phone-thumbnail">
                                <span>🔴 Live — Flash Sale</span>
                            </div>
                        </div>
                    </div>

                    <div className="img-side">
                        <img src={aboutUsImg02} alt="Fashion model"/>
                    </div>

                </div>
            </section>
            <div className="quality-section">

                <div className="quality-top">
                    <div className="wave-side"></div>
                    <div className="wave-center"></div>
                    <div className="wave-side"></div>
                </div>

                <div className="quality-header">
                    <h2>Quality is our priority</h2>
                    <p>Because you deserve nothing less than the best.</p>
                </div>

                <div className="cards-row">

                    <div className="card">
                        <div className="icon-wrap">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 stroke="#b8860b" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                                <rect x="1" y="3" width="15" height="13" rx="1"/>
                                <path d="M16 8h4l3 5v3h-7V8z"/>
                                <circle cx="5.5" cy="18.5" r="2.5"/>
                                <circle cx="18.5" cy="18.5" r="2.5"/>
                            </svg>
                        </div>
                        <h3>Free Shipping</h3>
                        <p>Enjoy the Convenience of Free Shipping on Every Order</p>
                    </div>
                    <div className="card">
                        <div className="icon-wrap">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 stroke="#b8860b" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M3 18v-6a9 9 0 0 1 18 0v6"/>
                                <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z"/>
                                <path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>
                            </svg>
                        </div>
                        <h3>24x7 Support</h3>
                        <p>Round-the-Clock Assistance, Anytime You Need It</p>
                    </div>
                    <div className="card">
                        <div className="icon-wrap">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 stroke="#b8860b" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                                <rect x="2" y="5" width="20" height="14" rx="2"/>
                                <path d="M2 10h20"/>
                                <path d="M9 15l-2-2 2-2"/>
                                <path d="M7 13h5a3 3 0 0 0 0-6"/>
                            </svg>
                        </div>
                        <h3>30 Days Return</h3>
                        <p>Your Satisfaction is Our Priority: Return Any Product Within 30 Days</p>
                    </div>

                </div>
            </div>
            <div className="container bottom-aboutUs">
                <div className="row">
                    <div className="col-md-6">
                        <div className="bottom-about-left">
                            <h2>Faster Free Delivery</h2>
                            <p>Experience the ultimate convenience with our Faster Free Delivery service—designed to bring your orders to your doorstep quickly and without any extra cost. Whether you're ordering essentials or gifts, we make sure you get them faster than ever. Why You'll Love It</p>
                            <ul className="checklist">
                                <li>
                                    <div className="check-icon">
                                        <svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="#fff"
                                             strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="2 6 5 9 10 3"/>
                                        </svg>
                                    </div>
                                    <span><strong>Absolutely Free:</strong> No delivery fees, no hidden charges—just fast, reliable service.</span>
                                </li>
                                <li>
                                    <div className="check-icon">
                                        <svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="#fff"
                                             strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="2 6 5 9 10 3"/>
                                        </svg>
                                    </div>
                                    <span><strong>Real-Time Tracking:</strong> Stay updated every step of the way with live order tracking.</span>
                                </li>
                                <li>
                                    <div className="check-icon">
                                        <svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="#fff"
                                             strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="2 6 5 9 10 3"/>
                                        </svg>
                                    </div>
                                    <span><strong>Reliable Delivery Partners:</strong> We've partnered with trusted couriers to ensure your packages.</span>
                                </li>
                                <li>
                                    <div className="check-icon">
                                        <svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="#fff"
                                             strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="2 6 5 9 10 3"/>
                                        </svg>
                                    </div>
                                    <span><strong>Weekend &amp; Evening Delivery:</strong> Get your items when it's most convenient for you.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6 ">
                        <div className="bottom-about-right">
                            <img src={aboutUsImg03} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default About;