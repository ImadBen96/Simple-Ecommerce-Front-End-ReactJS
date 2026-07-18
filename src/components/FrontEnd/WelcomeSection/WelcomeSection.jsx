import "./WelcomeSection.css";
import image1 from "../assets/herov03.webp";
import freeShopping from "../assets/shipping-section/free-shipping.svg";
import shipping2 from "../assets/shipping-section/shipping2.svg";
import shipping3 from "../assets/shipping-section/shipping3.svg";
import shipping4 from "../assets/shipping-section/shipping4.svg";
function WelcomeSection() {
    return (
        <section className="hero-container">
            <div className="container">
                <div className="bar-hero">
                    <div className="row align-items-center">
                        <div className="col-md-6 order-2">
                            <div className="left-img">
                                <img  src={image1} alt="Person with laptop" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="right-img hero__body half">
                                <h4 className="hero__subtitle">The all-in-one SEO tool for Business.</h4>
                                    <h1 className="hero__title">The SEO tool you need to grow your traffic and revenue.</h1>
                                    <p className="hero__subtext">Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    <footer className="hero__footer">
                                        <button className="btn btn--primary">Try for free</button>
                                        <button className="btn btn--outline">Discover more</button>
                                    </footer>
                            </div>
                        </div>
                    </div>
                    {/*<div className="hero__photo">*/}
                    {/*    <img src={image1} alt="Person with laptop" />*/}
                    {/*</div>*/}
                    {/*<div className="hero__body half">*/}
                    {/*    <h4 className="hero__subtitle">The all-in-one SEO tool for Business.</h4>*/}
                    {/*    <h1 className="hero__title">The SEO tool you need to grow your traffic and revenue.</h1>*/}
                    {/*    <footer className="hero__footer">*/}
                    {/*        <button className="btn btn--primary">Try for free</button>*/}
                    {/*        <button className="btn btn--outline">Discover more</button>*/}
                    {/*    </footer>*/}
                    {/*</div>*/}
                </div>
                <div className="shipping">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="shipping-img">
                                <img src={freeShopping} alt="Person with laptop" />
                                <div className="shipping-description">
                                    <h5>Free Shipping</h5>
                                    <p>Free Shipping for orders over $130</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="shipping-img">
                                <img src={shipping2} alt="Person with laptop" />
                                <div className="shipping-description">
                                    <h5>Free Returns</h5>
                                    <p>Within 30 days for an exchange.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="shipping-img">
                                <img src={shipping3} alt="Person with laptop" />
                                <div className="shipping-description">
                                    <h5>Flexible Payment</h5>
                                    <p>Pay with Multiple Credit Cards</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="shipping-img">
                                <img src={shipping4} alt="Person with laptop" />
                                <div className="shipping-description">
                                    <h5>Support Online</h5>
                                    <p>24 hours a day, 7 days a week</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WelcomeSection;