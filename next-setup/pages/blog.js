import Head from 'next/head'
import BlogScripts from "../components/BlogScripts";
import BlogStyles from '../components/BlogStyles';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Form from '../components/Form';
export default function AboutUs() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>About Us</title>
        <meta name="description" content="" />
        <BlogStyles />
      </Head>
      <Header />
      {/* Put Page Level Content Here */}
      <div>
        <section className="page-title-area">
          <div className="container">
            <h1 className="title">News Standard</h1>
            <ul className="breadcrumb-nav">
              <li><a href="index.html">Home</a></li>
              <li className="active">News</li>
            </ul>
          </div>
        </section>
        {/*====== Page Title End ======*/}
        {/*====== Blog Area Start  ======*/}
        <section className="blog-area section-gap">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-8 col-sm-10">
                <div className="blog-sidebar">
                  <div className="widget categories-widget">
                    <h4 className="widget-title">Categories</h4>
                    <ul>
                      <li><a href="#"> Door Pickup<span>26</span></a></li>
                      <li><a href="#">Door Delivery<span>30</span></a></li>
                      <li><a href="#">Live Tracking<span>71</span></a></li>
                      <li><a href="#">Professional Team<span>56</span></a></li>
                      <li><a href="#">Multiple Logistics <span>60</span></a></li>
                    </ul>
                  </div>
                  <div className="widget about-widget">
                    <h4 className="widget-title">About Me</h4>
                    <div className="about-contnent">
                      <img src="assets/img/sidebar/blog-about.png" alt />
                      <h6 className="title">Rosalina D. Willaimson</h6>
                      <p>Lorem ipsum dolor sit amet, consecte-tur adipisicing elit, sed do eiusmod tempor
                        incididunt ut labore.</p>
                      <ul>
                        <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                        <li><a href="#"><i className="fab fa-twitter" /></a></li>
                        <li><a href="#"><i className="fab fa-behance" /></a></li>
                        <li><a href="#"><i className="fab fa-linkedin-in" /></a></li>
                        <li><a href="#"><i className="fab fa-youtube" /></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="widget news-feed-widget">
                    <h4 className="widget-title">Popular Feeds</h4>
                    <div className="news-feed-items">
                      <div className="news-feed-item">
                        <a href="#">
                          <h4 className="title">Lorem ipsum dolor sit cing elit, sed do.</h4>
                        </a>
                        <span><i className="fal fa-calendar-alt" />24th March 2019</span>
                        <img src="assets/img/sidebar/feeds-1.png" alt="Image" />
                      </div>
                      <div className="news-feed-item">
                        <a href="#">
                          <h4 className="title">Lorem ipsum dolor sit cing elit, sed do.</h4>
                        </a>
                        <span><i className="fal fa-calendar-alt" />24th March 2019</span>
                        <img src="assets/img/sidebar/feeds-2.png" alt="Image" />
                      </div>
                      <div className="news-feed-item">
                        <a href="#">
                          <h4 className="title">Lorem ipsum dolor sit cing elit, sed do.</h4>
                        </a>
                        <span><i className="fal fa-calendar-alt" />24th March 2019</span>
                        <img src="assets/img/sidebar/feeds-3.png" alt="Image" />
                      </div>
                      <div className="news-feed-item">
                        <a href="#">
                          <h4 className="title">Lorem ipsum dolor sit cing elit, sed do.</h4>
                        </a>
                        <span><i className="fal fa-calendar-alt" />24th March 2019</span>
                        <img src="assets/img/sidebar/feeds-4.png" alt="Image" />
                      </div>
                    </div>
                  </div>
                  <div className="widget social-links">
                    <h4 className="widget-title">Never Miss News</h4>
                    <ul>
                      <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                      <li><a href="#"><i className="fab fa-twitter" /></a></li>
                      <li><a href="#"><i className="fab fa-behance" /></a></li>
                      <li><a href="#"><i className="fab fa-linkedin-in" /></a></li>
                      <li><a href="#"><i className="fab fa-pinterest" /></a></li>
                    </ul>
                  </div>
                  <div className="widget instagram-feed-widget">
                    <h4 className="widget-title">Instagram Feeds</h4>
                    <ul>
                      <li><a href="#"><img src="assets/img/sidebar/instagram-1.jpg" alt="instagram" /></a></li>
                      <li><a href="#"><img src="assets/img/sidebar/instagram-2.jpg" alt="instagram" /></a></li>
                      <li><a href="#"><img src="assets/img/sidebar/instagram-3.jpg" alt="instagram" /></a></li>
                      <li><a href="#"><img src="assets/img/sidebar/instagram-4.jpg" alt="instagram" /></a></li>
                      <li><a href="#"><img src="assets/img/sidebar/instagram-5.jpg" alt="instagram" /></a></li>
                      <li><a href="#"><img src="assets/img/sidebar/instagram-6.jpg" alt="instagram" /></a></li>
                      <li><a href="#"><img src="assets/img/sidebar/instagram-7.jpg" alt="instagram" /></a></li>
                      <li><a href="#"><img src="assets/img/sidebar/instagram-8.jpg" alt="instagram" /></a></li>
                      <li><a href="#"><img src="assets/img/sidebar/instagram-9.jpg" alt="instagram" /></a></li>
                    </ul>
                  </div>
                  <div className="widget ad-widget">
                    <img src="assets/img/sidebar/sidebar-ad-2.jpg" alt="add" />
                    <div className="add-content">
                      <span>350x600</span>
                      <h5 className="title">Add Banner</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="blog-standard">
                  <div className="single-blog-standard mb-30">
                    <div className="blog-standard-thumb">
                      <img src="assets/img/blog/blog-standard-1.jpg" alt="blog" />
                    </div>
                    <div className="blog-standard-content">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                        incidi-dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                        irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
                    </div>
                  </div>
                  <div className="single-blog-standard mb-30">
                    <div className="blog-standard-content">
                      <div className="col-lg-12 col-md-9">
                        <div className="section-title text-left mb-45">
                          <h2 className="title">GET A QUOTE</h2>
                        </div>
                        <div className="form-area">
                          {/* assets/php/form-process.php */}
                          <form id="contactForm" action="/contact" name="contactForm" method="post">
                            <div className="input-group form-group" style={{ border: '0.5px solid black' }}>
                              <input type="text" name="name" id="name" placeholder="Enter your name" required data-error="Please enter your name" />
                              <label className="icon" htmlFor="name"><i className="fal fa-user" /></label>
                              <div className="help-block with-errors" />
                            </div>
                            <div className="input-group form-group mt-20" style={{ border: '0.5px solid black' }}>
                              <input type="email" id="email" name="email" placeholder="Enter your email" required data-error="Please enter your Email" />
                              <label className="icon" htmlFor="email"><i className="fal fa-envelope" /></label>
                              <div className="help-block with-errors" />
                            </div>
                            <div className="input-group mt-30" style={{ border: '0.5px solid black' }}>
                              <input type="text" placeholder="Phone No" />
                              <span className="icon"><i className="fal fa-phone" /></span>
                            </div>
                            <div className="input-group form-group textarea-group mt-20" style={{ border: '0.5px solid black' }}>
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
                </div>
                <div className="single-blog-standard mb-30">
                  <div className="blog-dteails-content">
                    <h3 className="subtitle">Setting the mood with incense</h3>
                    <ul className="post-content-list">
                      <li><i className="fal fa-check" />Lorem ipsum dolor sit amet, consectetur</li>
                      <li><i className="fal fa-check" />Lorem ipsum dolor sit amet, consectetur</li>
                      <li><i className="fal fa-check" />Lorem ipsum dolor sit amet, consectetur</li>
                      <li><i className="fal fa-check" />Lorem ipsum dolor sit amet, consectetur</li>
                      <li><i className="fal fa-check" />Lorem ipsum dolor sit amet, consectetur</li>
                    </ul>
                  </div>
                </div>
                <div className="single-blog-standard mb-30">
                  <div className="blog-standard-content">
                    <div className="section-title text-left mb-45">
                      <h2 className="mb-25">This is a title</h2>
                      <table className="table table-bordered table-striped">
                        <tbody>
                          <tr>
                            <td>Data</td>
                            <td>Data</td>
                          </tr>
                          <tr>
                            <td>Data</td>
                            <td>Data</td>
                          </tr>
                          <tr>
                            <td>Data</td>
                            <td>Data</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="single-blog-standard mb-30">
                  <div className="blog-standard-content">
                    <h2 className="title mb-20">Magna aliqua. Ut enim ad minim venia m, quis nostrud exercitation ullamco</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                      incidi-dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                      dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
                  </div>
                </div>
                <div className="single-blog-standard mb-30">
                  <div className="blog-standard-content">
                    <div className="comment-template">
                      <h3 className="template-title">Rosalina Kelian</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
      <BlogScripts />
    </>

  )
}