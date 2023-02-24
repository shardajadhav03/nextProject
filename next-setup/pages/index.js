import Head from 'next/head'
import CommonScripts from "../components/CommonScripts";
import CommonStyles from '../components/CommonStyles';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Follow a good structure for your code
// Paragraphs should use <p>, not a heading tag
// Headings should use <h1> to <h6>, whatever is appropriate
export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Homepage</title>
        <meta name="description" content="" />
        <CommonStyles />
      </Head>
      <Header />
      {/* Put Page Level Content Here */}

      <div>
        <section className="banner-slider banner-slider-one banner-slider-active" id="home">
          <div className="single-banner">
            <div className="container-fluid container-1470">
              <div className="row align-items-center">
                <div className="col-lg-7">
                  <div className="banner-text">
                    <div className="banner-content">
                      <h1 data-animation="fadeInLeft" data-delay="0.6s" className="title">
                        MoveExpress
                      </h1>
                      <p data-animation="fadeInLeft" data-delay=".9s">
                        MoveExpress is a revolutionary online platform that makes it easier than ever before to book international transportation services. We provide our customers with hundreds of logistics companies offering services like air freight, sea cargo, marine shipping, freight forwarding, goods transport by rail and road, LCL booking, FCL booking, LTL booking, PTL booking and FTL booking in tens of thousands of cities worldwide.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 d-none d-lg-block">
                  <div className="banner-img" data-animation="fadeInRight" data-delay="0.5s">
                    <img src="assets/img/banner/banner-img.png" alt="Banner" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="service-section section-gap">
          <div className="container">
            <div className="section-title text-center mb-30">
              <span className="title-tag">SERVICES</span>
              <h2 className="title">What We Do</h2>
            </div>
            <div className="row service-items">
              <div className="col-lg-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                <div className="service-item color-2 text-center mt-30">
                  <div className="icon">
                    <i className="fal fa-laptop-code" />
                  </div>
                  <h5 className="title"><a href="service-details.html">Door Pickup</a></h5>
                  <p>Sed ut perspiciatis unde omnis iste natus error volup</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                <div className="service-item color-1 text-center mt-30">
                  <div className="icon">
                    <i className="fal fa-fingerprint" />
                  </div>
                  <h5 className="title"><a href="service-details.html">Door Delivery</a></h5>
                  <p>Sed ut perspiciatis unde omnis iste natus error volup</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                <div className="service-item color-3 text-center mt-30">
                  <div className="icon">
                    <i className="fal fa-chalkboard" />
                  </div>
                  <h5 className="title"><a href="service-details.html">Live Trackingt</a></h5>
                  <p>Sed ut perspiciatis unde omnis iste natus error volup</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="0.9s">
                <div className="service-item color-4 text-center mt-30">
                  <div className="icon">
                    <i className="fal fa-database" />
                  </div>
                  <h5 className="title"><a href="service-details.html">Professional Team</a></h5>
                  <p>Sed ut perspiciatis unde omnis iste natus error volup</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="feature-section section-gap soft-blue-bg" id="feature">
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-6 col-md-10">
                <div className="tile-gallery-one wow fadeInLeft" data-wow-delay="0.3s">
                  <div className="img-one">
                    <img src="assets/img/tile-gallery/tile-gallery-01.jpg" alt="Image" />
                  </div>
                  <div className="img-two text-right wow fadeInUp" data-wow-delay="0.5s">
                    <img src="assets/img/tile-gallery/tile-gallery-02.jpg" alt="Image" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-10">
                <div className="feature-text-block mt-md-gap-60 wow fadeInRight" data-wow-delay="0.4s">
                  <div className="section-title mb-20">
                    <span className="title-tag">MoveExpress</span>
                    <h2 className="title">Your All-In-One Logistics Tool for Hassle-Free Goods Transportation
                    </h2>
                  </div>
                  <p>
                    By choosing MoveExpress you are targeted a seamless experience without having to sift through various websites or contacting various differing logistics companies separately in order to book the necessary services required on each trip. Instead we streamline this process by offering everything conveniently in one spot presented clearly with details regarding associated costs thus allowing you more time to focus on other aspects related to your business or project instead of dealing with complex logistics processes associated with transporting goods!
                  </p>
                  <ul className="feature-btn mt-30">
                    <li>
                      <a className="main-btn" href="about.html">Learn More</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="service-section-two section-gap">
          <div className="container">
            <div className="section-title text-center mb-30 wow fadeInUp" data-wow-delay="0.3s">
              <span className="title-tag">OUR LATEST SERVICES</span>
              <h2 className="title">We Offer Better Soluation <br /> For MoveExpress</h2>
            </div>
            <div className="row service-items justify-content-center">
              <div className="col-lg-4 col-md-6 col-sm-10 wow fadeInUp" data-wow-delay="0.3s">
                <div className="service-item-two color-1 mt-30">
                  <div className="icon">
                    <i className="fal fa-laptop-code" />
                  </div>
                  <h3 className="title"><a href="service-details.html">Door Pickup</a></h3>
                  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                    laudantiutotam</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-10 wow fadeInUp" data-wow-delay="0.4s">
                <div className="service-item-two color-2 mt-30">
                  <div className="icon">
                    <i className="fal fa-laptop-code" />
                  </div>
                  <h3 className="title"><a href="service-details.html">Door Delivery</a></h3>
                  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                    laudantiutotam</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-10 wow fadeInUp" data-wow-delay="0.5s">
                <div className="service-item-two color-3 mt-30">
                  <div className="icon">
                    <i className="fal fa-laptop-code" />
                  </div>
                  <h3 className="title"><a href="service-details.html">Live Tracking</a></h3>
                  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                    laudantiutotam</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-10 wow fadeInUp" data-wow-delay="0.6s">
                <div className="service-item-two color-3 mt-30">
                  <div className="icon">
                    <i className="fal fa-laptop-code" />
                  </div>
                  <h3 className="title"><a href="service-details.html">Professional Team</a></h3>
                  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                    laudantiutotam</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-10 wow fadeInUp" data-wow-delay="0.7s">
                <div className="service-item-two color-1 mt-30">
                  <div className="icon">
                    <i className="fal fa-laptop-code" />
                  </div>
                  <h3 className="title"><a href="service-details.html">Multiple Logistics Companies</a></h3>
                  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                    laudantiutotam</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-10 wow fadeInUp" data-wow-delay="0.8s">
                <div className="service-item-two color-4 mt-30">
                  <div className="icon">
                    <i className="fal fa-laptop-code" />
                  </div>
                  <h3 className="title"><a href="service-details.html">Multiple Logistics</a></h3>
                  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                    laudantiutotam</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="testimonials-section section-gap soft-blue-bg">
          <div className="container">
            <div className="section-title text-center mb-60">
              <span className="title-tag">Client Testimonials</span>
              <h2 className="title">What our clients say </h2>
            </div>
            <div className="testimonials-slider row">
              <div className="col-lg-4">
                <div className="testimonial-box color-1s">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at est id leo luctus gravida a
                    in ipsum.
                  </p>
                  <div className="author d-flex align-items-center">
                    <div className="photo">
                      <img src="assets/img/testimonials/01.png" alt="Image" />
                    </div>
                    <div className="desc">
                      <h6>Eugene Freeman</h6>
                      <span className="position">Tincidunt</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="testimonial-box color-2">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at est id leo luctus gravida a
                    in ipsum.
                  </p>
                  <div className="author d-flex align-items-center">
                    <div className="photo">
                      <img src="assets/img/testimonials/02.png" alt="Image" />
                    </div>
                    <div className="desc">
                      <h6>Kelly Coleman</h6>
                      <span className="position">Nulla nec</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="testimonial-box color-3">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at est id leo luctus gravida a
                    in ipsum.
                  </p>
                  <div className="author d-flex align-items-center">
                    <div className="photo">
                      <img src="assets/img/testimonials/03.png" alt="Image" />
                    </div>
                    <div className="desc">
                      <h6>Philip Mendez</h6>
                      <span className="position">Consectetur</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="testimonial-box color-1s">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at est id leo luctus gravida a
                    in ipsum.
                  </p>
                  <div className="author d-flex align-items-center">
                    <div className="photo">
                      <img src="assets/img/testimonials/01.png" alt="Image" />
                    </div>
                    <div className="desc">
                      <h6>Eugene Freeman</h6>
                      <span className="position">Tincidunt</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="testimonial-box color-2">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at est id leo luctus gravida a
                    in ipsum.
                  </p>
                  <div className="author d-flex align-items-center">
                    <div className="photo">
                      <img src="assets/img/testimonials/02.png" alt="Image" />
                    </div>
                    <div className="desc">
                      <h6>Kelly Coleman</h6>
                      <span className="position">Nulla nec</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="testimonial-box color-3">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at est id leo luctus gravida a
                    in ipsum.
                  </p>
                  <div className="author d-flex align-items-center">
                    <div className="photo">
                      <img src="assets/img/testimonials/03.png" alt="Image" />
                    </div>
                    <div className="desc">
                      <h6>Philip Mendez</h6>
                      <span className="position">Consectetur</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="call-to-action" style={{ backgroundImage: 'url(assets/img/cta-bg/cta-bg.jpg)' }}>
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-lg-7 col-md-8">
                <div className="section-title white-color">
                  <span className="title-tag">CALL TO ACTION</span>
                  <h2 className="title">
                    Let’s Discuss With Us Your Estimate.
                  </h2>
                </div>
              </div>
              <div className="col-auto">
                <a href="#" className="main-btn main-btn-3 rounded-btn mt-md-gap-30"> <i className="fal fa-comments" /> Contact Us</a>
              </div>
            </div>
          </div>
        </section>
        <section className="latest-news section-gap" id="news">
          <div className="container">
            <div className="section-title text-center mb-30 wow fadeInUp" data-wow-delay="0.3s">
              <span className="title-tag">Latest News</span>
              <h2 className="title"> Read Our Latest <br /> News &amp; Blog </h2>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 col-sm-8 wow fadeInUp" data-wow-delay="0.3s">
                <div className="latest-news-box mt-30">
                  <div className="post-thumb">
                    <img src="assets/img/latest-news/01.jpg" alt="Image" />
                  </div>
                  <div className="post-content">
                    <ul className="post-meta">
                      <li><a href="#">By Admin,</a></li>
                      <li><a href="#">05 Aug 2019</a></li>
                    </ul>
                    <h4 className="title">
                      <a href="#">Monthly Web Development Update Design Ethics &amp; Clarity Over Solution</a>
                    </h4>
                    <a href="#" className="read-more-btn">Read More <i className="fal fa-long-arrow-right" /></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-8 wow fadeInUp" data-wow-delay="0.5s">
                <div className="latest-news-box mt-30">
                  <div className="post-thumb">
                    <img src="assets/img/latest-news/02.jpg" alt="Image" />
                  </div>
                  <div className="post-content">
                    <ul className="post-meta">
                      <li><a href="#">By Admin,</a></li>
                      <li><a href="#">05 Aug 2019</a></li>
                    </ul>
                    <h4 className="title">
                      <a href="#">Design System: What It And How To Create One Using Indigo Design Sence</a>
                    </h4>
                    <a href="#" className="read-more-btn">Read More <i className="fal fa-long-arrow-right" /></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-8 wow fadeInUp" data-wow-delay="0.7s">
                <div className="latest-news-box mt-30">
                  <div className="post-thumb">
                    <img src="assets/img/latest-news/03.jpg" alt="Image" />
                  </div>
                  <div className="post-content">
                    <ul className="post-meta">
                      <li><a href="#">By Admin,</a></li>
                      <li><a href="#">05 Aug 2019</a></li>
                    </ul>
                    <h4 className="title">
                      <a href="#">How We Used WebAssembly  To Speed Up Our Web App By Omnivus</a>
                    </h4>
                    <a href="#" className="read-more-btn">Read More <i className="fal fa-long-arrow-right" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
      <CommonScripts />
    </>

  )
}
