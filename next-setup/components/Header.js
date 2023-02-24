function Header() {
    // <header> should contain a <nav> element

    // links
    //     Homepage
    //     Cities - Dropdown
    //     About
    //     Contact
    //     Blog

    // Make sure the header is fully responsive in mobile device and visually appealing
    return (
        <>
            <header className="header-two header-full-width sticky-header">
                <div className="header-topbar d-none d-sm-block">
                    <div className="container-fluid">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-sm-auto col-12">
                                <ul className="contact-info text-center">
                                    <li><a href="#"><i className="fal fa-envelope" /> info@webmail.com</a></li>
                                    <li><a href="#"><i className="fal fa-phone" /> 786 875 864 75 7</a></li>
                                </ul>
                            </div>
                            <div className="col-sm-auto col-12">
                                <div className="social-icon text-center">
                                    <ul>
                                        <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                                        <li><a href="#"><i className="fab fa-twitter" /></a></li>
                                        <li><a href="#"><i className="fab fa-behance" /></a></li>
                                        <li><a href="#"><i className="fab fa-linkedin-in" /></a></li>
                                        <li><a href="#"><i className="fab fa-youtube" /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-navigation">
                    <div className="container-fluid d-flex align-items-center justify-content-between">
                        <div className="header-left">
                            <div className="site-logo">
                                <a href="index.html"><img src="assets/img/logo-2.1.png" alt="Omnivus" /></a>
                            </div>
                        </div>
                        <div className="site-nav-menu">
                            <ul className="primary-menu">
                                <li>
                                    <a href="/">Home</a>
                                </li>
                                                                                              
                                <li>
                                    <a href="#">Pages</a>
                                    <ul className="submenu">
                                        <li><a href="case-study.html">case study</a></li>
                                        <li><a href="case-details.html">Case Details</a></li>
                                        <li><a href="coming-soon.html">coming soon</a></li>
                                        <li><a href="error.html">error</a></li>
                                        <li><a href="faq.html">faq</a></li>
                                        <li><a href="pricing.html">pricing</a></li>
                                        <li><a href="shop.html">shop</a></li>
                                        <li><a href="shop-details.html">shop Details</a></li>
                                        <li><a href="cart.html">Cart</a></li>
                                        <li><a href="checkout.html">Checkout</a></li>
                                        <li><a href="privacy.html">Privacy</a></li>
                                        <li><a href="team.html">team</a></li>
                                        <li><a href="team-details.html">team details</a></li>
                                    </ul>
                                </li>
                                <li className="current">
                                    <a href="#">Blog</a>
                                    <ul className="submenu">
                                        <li><a href="blog-standard.html">Blog Standard</a></li>
                                        <li><a href="blog-grid.html">Blog Grid</a></li>
                                        <li><a href="blog-details.html">Blog Details</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a className="nav-link" href="/about">About</a>
                                </li>
                                <li>
                                    <a className="nav-link" href="/tnc">Terms and Conditions</a>
                                </li>
                                <li>
                                    <a href="/contact">Contact</a>
                                </li>
                            </ul>
                            <a href="#" className="nav-close"><i className="fal fa-times" /></a>
                        </div>
                        <div className="header-extra d-flex align-items-center">
                            <div className="nav-toggler">
                                <span /><span /><span />
                            </div>
                            <div className="navbar-btn">
                                <a href="#">Get A Quote</a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </>
    )
}
export default Header