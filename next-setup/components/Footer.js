// 3 divs in footer with equal width (col-lg-4)

// 1st div: Logo (img) and text (p) (provided by us in footer_content file) +  email address (p)

// 2nd div: Quick links (h4) - 5 links (a) to pages (Home, About, Contact, Privacy Policy, Terms and Conditions)

// 3rd div: Disclaimer (h4) - text (p) (lorem ipsum)

function Footer() {
    return (
        <footer className="footer-area footer-area-two" style={{ backgroundImage: 'url(assets/img/footer-bg.jpg)' }}>
            <div className="container">
                <div className="row footer-widgets">
                    <div className="col-lg-4 col-md-6 col-md-7">
                        <div className="widget about-widget">
                            <div className="logo">
                                <img src="assets/img/logo-1.1.png" alt="Image" />
                            </div>
                            <p>MoveExpress is the trusted global goods transportation booking platform powered by Weeple Logistics Solution Private Limited, a registered company with CIN: U60231MP2020PTC050930. Our one-stop solution enables clients to book and manage efficient door-to-door delivery solutions with over 400+ logistics companies around the world; offering comprehensive service coverage, live tracking, and an experienced team for every shipment. Enjoy peace of mind knowing that MoveExpress has got you covered!
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 offset-xl-1">
                        <div className="widget nav-widget">
                            <h4 className="widget-title">Links</h4>
                            <div className="footer-list">
                                <ul>
                                    <li><a href="/"><i className="fal fa-angle-right" /> Home</a></li>
                                    <li><a href="/about"><i className="fal fa-angle-right" /> About</a></li>
                                    <li><a href="/tnc"><i className="fal fa-angle-right" /> Terms and Conditions</a></li>
                                    <li><a href="/privacy-policy"><i className="fal fa-angle-right" /> Privacy Policy</a></li>
                                    <li><a href="/contact"><i className="fal fa-angle-right" /> Contact</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-md-6">
                        <div className="widget contact-widget">
                            <h4 className="widget-title">Disclaimer</h4>
                            <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio iusto dolores esse. Excepturi
                                voluptas eos voluptatibus ab saepe soluta iure error dicta sequi. Dignissimos qui vitae quo
                                aliquid, officiis commodi esse nostrum tempora placeat.</p>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <p>Copyright By@ <a href="#">WebTend</a> - 2021</p>
                </div>
            </div>
        </footer>

    )
}
export default Footer