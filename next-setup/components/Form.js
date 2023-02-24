// This is a component that will be used in the pages\blog.js and pages\contact.js

// Fields: Type of Service (select), Name (input - text), Contact (input - number), Message (textarea), Submit (button)

export default function Form() {
    return (
        <div className="col-12 mt-40 mb-40">
              <div className="form-box form-box-3 white-bg">
                <h4 className="sub-title mb-40">Get a quote</h4>
                <form className="quote-form mb-20" action="/contact">
                  <div className="choice-list mb-20 border">
                    <span className="input-title pl-20">Type Of Service</span>
                    <select className="select-product" name="type" id="select-area">
                      <option value="Life Insurance">Life Insurance</option>
                      <option value="Car Insurance">Car Insurance</option>
                      <option value="House Insurance">House Insurance</option>
                      <option value="Accident Insurance">Accident Insurance</option>
                    </select>
                  </div>
                  <div className="email-input border">
                    <label className="input-title">From</label>
                    <input type="text" placeholder="From City" name="source" />
                  </div>
                  <div className="email-input border">
                    <label className="input-title">To City</label>
                    <input type="text" placeholder="To City" name="destination" />
                  </div>
                  <div className="email-input border">
                    <label className="input-title">Goods Details</label>
                    <textarea type="text" placeholder name="goodsDetails" defaultValue={""} />
                  </div>
                  <div className="email-input border">
                    <label className="input-title">Contact</label>
                    <input type="number" placeholder name="contact" />
                  </div>
                  <input type="hidden" name="site" defaultValue="MoveExpress" />
                  <input type="hidden" name="url" id="url" defaultValue="/test-url" />
                  <button className="q-btn-lg">Start a quote</button>
                </form>
                <p className="review-text">Been here before? <a href="#">Review your quotes.</a></p>
              </div>
            </div>
    )
}