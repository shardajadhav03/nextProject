import Head from 'next/head'
import CommonScripts from "../components/CommonScripts";
import CommonStyles from '../components/CommonStyles';
import Header from '../components/Header';
import Footer from '../components/Footer';
export default function Contact() {
  return (<><Head>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Contact Us & Calculate Rates</title>
    <meta name="description" content="" />
    <CommonStyles />
  </Head>
    <Header />
    {/* Put Page Level Content Here */}
    <div>
      <section className="page-title-area">
        <div className="container">
          <h1 className="title">Contact Us</h1>
          <ul className="breadcrumb-nav">
            <li><a href="index.html">Home</a></li>
            <li className="active">Contact</li>
          </ul>
        </div>
      </section>
      <section className="contact-info-section section-gap">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="contact-info-items mb-md-gap-50">
                <div className="contact-info-item text-center">
                  <i className="fal fa-phone" />
                  <h5 className="title">Phone Number</h5>
                  <p>+7 (800) 123 45 69</p>
                </div>
                <div className="contact-info-item text-center">
                  <i className="fal fa-envelope" />
                  <h5 className="title">Email Address</h5>
                  <p>info@webmail.com</p>
                </div>
                <div className="contact-info-item text-center">
                  <i className="fal fa-map" />
                  <h5 className="title">Office Location</h5>
                  <p>12/A, London, UK</p>
                </div>
                <div className="contact-info-item text-center">
                  <i className="fal fa-globe" />
                  <h5 className="title">Social Network</h5>
                  <p>fb.com/example</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-map-section section-gap soft-blue-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-9">
              <div className="section-title text-left mb-45">
                <span>Get In Touch</span>
                <h2 className="title">Estimate For Your Projects.</h2>
              </div>
              <div className="form-area">
                <form id="contactForm" action="assets/php/form-process.php" name="contactForm" method="post">
                  <div className="input-group form-group">
                    <input type="text" name="name" id="name" placeholder="Enter your name" required data-error="Please enter your name" />
                    <label className="icon" htmlFor="name"><i className="fal fa-user" /></label>
                    <div className="help-block with-errors" />
                  </div>
                  <div className="input-group form-group mt-20">
                    <input type="email" id="email" name="email" placeholder="Enter your email" required data-error="Please enter your Email" />
                    <label className="icon" htmlFor="email"><i className="fal fa-envelope" /></label>
                    <div className="help-block with-errors" />
                  </div>
                  <div className="input-group form-group textarea-group mt-20">
                    <textarea name="message" id="message" cols={30} rows={10} placeholder="Enter your message" required data-error="Please enter your Message" defaultValue={""} />
                    <label className="icon" htmlFor="message"><i className="fal fa-edit" /></label>
                    <div className="help-block with-errors" />
                  </div>
                  <div className="input-group d-block mt-20">
                    <button className="main-btn" type="submit">Submit Now</button>
                    <div id="msgSubmit" className="hidden" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <Footer />
    <CommonScripts />
  </>)
}