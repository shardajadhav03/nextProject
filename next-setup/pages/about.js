import Head from 'next/head'
import CommonScripts from "../components/CommonScripts";
import CommonStyles from '../components/CommonStyles';
import Header from '../components/Header';
import Footer from '../components/Footer';
// Follow a good structure for your code
// Paragraphs should use <p>, not a heading tag
// Headings should use <h1> to <h6>, whatever is appropriate
export default function AboutUs() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>About Us</title>
        <meta name="description" content="" />
        <CommonStyles />
      </Head>
      <Header />
      {/* Put Page Level Content Here */}
      <div>
        <section className="page-title-area">
          <div className="container">
            <h1 className="title">About Us</h1>
            <ul className="breadcrumb-nav">
              <li><a href="index.html">Home</a></li>
              <li className="active">About</li>
            </ul>
          </div>
        </section>
        <section className="experience-section section-gap">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-md-8 wow fadeInLeft" data-wow-delay="0.3s">
                <div className="section-title with-right-border mb-md-gap-30">
                  <span className="title-tag">Welcome to MoveExpress</span>
                  <h2 className="title">An International Goods Transportation Service Booking Platform</h2>
                </div>
              </div>
              <div className="col-lg-6 offset-lg-1 wow fadeInRight" data-wow-delay="0.3s">
                <div className="experience-text">
                  <p className="fs-16 text-color-2">At MoveExpress, we strive to provide our clients with the most comprehensive and reliable transportation services for goods. Our platform offers complete solutions of logistics service booking across hundreds of global transport companies in just a few clicks. Whether you need to ship goods, freight forwarding or simply book cargo services, MoveExpress has got you covered!
                  </p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center mt-50">
              <div className="col-lg-4 col-md-6 col-sm-8 wow fadeInUp" data-wow-delay="0.3s">
                <div className="feature-box mt-30">
                  <img src="assets/img/feature-1.jpg" alt />
                  <div className="feature-overlay">
                    <div className="content">
                      <h5 className="title">Introduction to MoveExpress</h5>
                      <p>MoveExpress is an online international transportation services booking platform, providing top-notch service across 400+ logistics companies. We specialize in offering efficient door pickup and delivery of goods with the use of multiple transport modes like road, rail, sea, and air Cargo. With our comprehensive network of tens of thousands of cities throughout the globe, MoveExpress ensures that your goods are delivered on time and safely from point to point.
                      </p>
                      <i className="fal fa-laptop-code" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-8 wow fadeInUp" data-wow-delay="0.4s">
                <div className="feature-box mt-30">
                  <img src="assets/img/feature-2.jpg" alt />
                  <div className="feature-overlay">
                    <div className="content">
                      <h5 className="title">Live Tracking &amp; Professional Team</h5>
                      <p>An integral part of our efficiency is a professional team which keeps a constant check on your shipment all through its journey ensuring that it reaches the correct destination without any damage (best tried but not guaranteed, insurance essential) or delay. Furthermore, you can keep track real-time using our live tracking feature available 12/7 at MoveExpress. You never have to worry about where your shipments are anymore!
                      </p>
                      <i className="fal fa-headphones-alt" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-8 wow fadeInUp" data-wow-delay="0.5s">
                <div className="feature-box mt-30">
                  <img src="assets/img/feature-3.jpg" alt />
                  <div className="feature-overlay">
                    <div className="content">
                      <h5 className="title">Professional Team &amp; Expert Advice </h5>
                      <p>We understand that different business have very specific needs for their logistical needs which is why our highly skilled team consists of experts who specialize in each sector. Therefore, we are able to provide personalized advice tailored according to your business’ requirements while ensuring that quality standards are met at every step along the way.
                      </p>
                      <i className="fal fa-analytics" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="about-intro-video section-gap soft-blue-bg">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-10">
                <div className="feature-text-block">
                  <div className="section-title with-right-border mb-20">
                    <h2 className="title">What We Do </h2>
                  </div>
                  <p>
                    MoveExpress provides easy access to all possible modes of transport like air freight shipping, sea cargo/marine shipping, rail and road shipment as well as LCL (Less than Container Load), FCL (Full Container Load), LTL (Less Than Truckload) and PTL (Partial Truckload) booking services. Our advanced platform allows customers from over tens of thousands cities around the world to enjoy an effortless online booking experience. With top features including door-to-door pickup &amp; delivery and live tracking visibility on shipments – it’s never been easier to stay ahead of your goods on their journey!
                  </p>
                  <a className="main-btn mt-30" href="about.html">Learn More</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="history-section section-gap">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="section-title text-center mb-80">
                  <h2 className="title mb-10">Benefits Of Choosing Our Platform </h2>
                </div>
              </div>
            </div>
            <div className="history-timeline history-isotope">
              <div className="history-item wow fadeInUp" data-wow-delay="0.3s">
                <div className="history-thumb" style={{ backgroundImage: 'url(assets/img/history-1.jpg)' }} />
                <div className="history-content">
                  <span className="history-year">Comprehensive Logistics Solutions</span>
                  <h4 className="title">Choose from hundreds of logistics companies offering various types of transportation services globally depending upon your individual needs with absolute convenience through our user-friendly platform– no more tedious paperwork!
                  </h4>
                </div>
                <div className="number-box">
                  <span>01</span>
                </div>
              </div>
              <div className="history-item wow fadeInUp" data-wow-delay="0.3s">
                <div className="history-thumb" style={{ backgroundImage: 'url(assets/img/history-2.jpg)' }} />
                <div className="history-content">
                  <span className="history-year">Live Tracking</span>
                  <h4 className="title">Track every single step taken for your goods on its journey with live visibility feature that updates regularly in real time so you know exactly where your products are 12/7!
                  </h4>
                </div>
                <div className="number-box">
                  <span>02</span>
                </div>
              </div>
              <div className="history-item wow fadeInUp" data-wow-delay="0.3s">
                <div className="history-thumb" style={{ backgroundImage: 'url(assets/img/history-3.jpg)' }} />
                <div className="history-content">
                  <span className="history-year">Door To Door Pickup &amp; Delivery</span>
                  <h4 className="title">Home pickup and delivery options available now–simply fill out details online from the comfortability from home; no need for manual trips outside anymore - saving yourself time while being cost efficient simultaneously!
                  </h4>
                </div>
                <div className="number-box">
                  <span>03</span>
                </div>
              </div>
              <div className="history-item wow fadeInUp" data-wow-delay="0.3s">
                <div className="history-thumb" style={{ backgroundImage: 'url(assets/img/history-4.jpg)' }} />
                <div className="history-content">
                  <span className="history-year">Professional Team Of Experts</span>
                  <h4 className="title">Benefit from consultations by veteran specialists who have gathered years worth experiential knowledge about everything related logistic industry wherein they can guide you towards finding optimal solution best suited for YOU!
                  </h4>
                </div>
                <div className="number-box">
                  <span>04</span>
                </div>
              </div>
              <div className="history-item wow fadeInUp" data-wow-delay="0.3s">
                <div className="history-thumb" style={{ backgroundImage: 'url(assets/img/history-3.jpg)' }} />
                <div className="history-content">
                  <span className="history-year">Secure Storage</span>
                  <h4 className="title">Get access secure storage facilities designed specifically to store any type product you might have reduce any potential risk posed due mishandling during transit thereby ensuring that each consignment arrives safely precisely where it was intended without fail! </h4>
                </div>
                <div className="number-box">
                  <span>05</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="faq-section section-gap bg-cover" style={{ backgroundImage: 'url(assets/img/faq-bg.jpg)' }}>
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-7">
                <div className="accordion-four" id="accordionExample">
                  <div className="card">
                    <div className="card-header" id="headingOne">
                      <a className href data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <i className="fal fa-magic" />Conclusion
                      </a>
                    </div>
                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                      <div className="card-body">
                        <p>At MoveExpress,we believe firmly in providing world-class Logistical Services at reasonable prices combined high quality customer service . Whether it is leveraging state-of-the art technology or simply having personnel dedicated exclusively providing assistance whatever inquiry may arise –you can rest assured knowing fact regardless situation will always stand side make sure every consignment leaves undamage (best tried but not guaranteed, insurance essential)d unharmed on due date as agreed upon. By choosing us as partner logistics solutions provider,can expect only best service delivered fast &amp; efficiently ready take initiative manage process however small big scale may be!
                        </p>
                      </div>
                    </div>
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