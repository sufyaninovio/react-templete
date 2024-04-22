import InputField from "../../components/InputField";
import ThemeButton from "../../components/ThemeButton";
import { Link } from 'react-router-dom'
const PackagesSec = () => {
  return (
    <section className="packages-sec">
      <div className="packages-text">PACKAG</div>
      <div className="container">
        <div className="row ">
          <div className="col-lg-6 col-md-6 pe-lg-5 customized-quote-div wow animate__animated animate__fadeInLeft animate__delay-1s">
            <h6 className="level-4 text-primary">PACKAGES</h6>
            <h2 className="level-1">
              Here's what's we{" "}
              <span className="text-primary">charge for our service</span>
            </h2>
            <p className='para me-xl-3'>We offer the HTML Package for a one-time fee of $500. Your webmaster will seamlessly
              integrate this package into your website. Following integration, our team at TOP 100
              Advertising initiates your business's advertising campaign, priced at $250.00 per month.
              Should you, as the website business owner, you ever find our performance unsatisfactory, there's
              no obligation to make a payment.</p>


          </div>
          <div className="col-xl-5 col-lg-6 col-md-6 ps-lg-5 wow animate__animated animate__fadeInRight animate__delay-2s">
            <div className="small-business-div">
              <h3 className="level-3">
                Small <span className="text-primary">Business</span> Website
              </h3>
              <h4 className="level-4">$500 HTML Package (one time fee), then $250 a month</h4>
              <div className="small-business-div-text">
                <h4 className="level-5"> Our SEO services include:</h4>
                <p className="para">
                  Keyword research and optimization <br />
                  On-page SEO enhancements <br />
                  Off-page SEO strategies <br />
                  Quality backlink building <br />
                  Content creation and optimization <br />
                  Regular performance monitoring and reporting <br />
                </p>
                {/* <p className="para">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quisque egestas diam in arcu cursus euismod.
                  <br />
                  Lorem ipsum dolor sit amet,
                </p>

                <p className="para">
                  {" "}
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Quisque egestas diam in arcu
                  cursus euismod.
                </p>
                <p className="para">
                  {" "}
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Quisque egestas diam in arcu
                  cursus euismod.
                </p> */}
              </div>
              <div className="row">

                {/* <ThemeButton text={"Place Order"} width={"w-100"} bg={true}/> */}
                <Link
                  to="/checkout"
                  className={`btn  primary-btn w-100`}
                >
                  Place Order
                </Link>
                {/* <button type="submit" className="btn secondary-btn w-100">
                    Place Order
                  </button> */}

                {/* <div className="col-md-6  pt-3 pt-md-0">
                  <ThemeButton text={"Live Chat"} width={"w-100"} /> */}
                {/* <button type="submit" className="btn primary-btn w-100">
                    Live Chat
                  </button> */}
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackagesSec;
