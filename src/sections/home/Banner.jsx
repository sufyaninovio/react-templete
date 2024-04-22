import InputField from "../../components/InputField";
import ThemeButton from "../../components/ThemeButton";
import { bannerImg } from "../../constants/mediaConstants";

const Banner = () => {
  return (
    <section className="mainbannerbg mb-4">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 wow animate__animated animate__fadeInLeft animate__delay-1s">
            <h1 className="banner__heading level-1 text-dark">
              Boost Your <span className="text-primary">Rankings</span> with Our
              Expert
              <span> SEO Services!</span>
            </h1>
            <p className="banner__para para">
              If your website doesn't reach the top results within 45 days, we
              won't charge you a penny—because we're that confident in our SEO
              process.
            </p>
            <div className="find">
              <h4 className="text-primary mt-5 mb-3 level-4">
                Get a free analysis of your website today!
              </h4>
              <div className="input-group mb-3">
                <form>
                  <div className="row align-items-end">
                    <div className="mb-3 col-lg-4">
                      <InputField
                        label={"Full name"}
                        type={"text"}
                        placeholder={"John Doe"}
                      />
                    </div>
                    <div className="mb-3 col-lg-4">
                      <label className="form-label w-100 m-0">
                        Service
                        <select name="" id="" className="form-select form-control">
                          <option value="">Select Service</option>
                          <option value="Website Advertising">Website Advertising</option>
                          <option value="Website Marketing">Website Marketing</option>
                          <option value="Internet Advertising">Internet Advertising</option>
                          <option value="Website Digital Advertising">Website Digital Advertising</option>
                        </select>
                      </label>
                    </div>
                    {/* <div className="mb-3 col-lg-4">
                      <InputField
                        label={"Website URL"}
                        type={"text"}
                        placeholder={"https://"}
                      />
                    </div> */}
                    <div className="mb-3 col-lg-4">
                      <InputField
                        label={"Email address"}
                        type={"text"}
                        placeholder={"youremail@email.com"}
                      />
                    </div>
                    <div className="col-lg-7">
                      {/* <InputField
                        label={"Email address"}
                        type={"email"}
                        placeholder={"John Doe"}
                      /> */}

                      <InputField
                        label={"Website URL"}
                        type={"text"}
                        placeholder={"https://"}
                      />

                    </div>
                    <div className="col-lg-5 mt-3 mt-lg-0">
                      <ThemeButton
                        text={"Let's Go!"}
                        type="submit"
                        width={"w-100"}
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-5 mt-5 mt-lg-4-0 wow animate__animated animate__fadeInRight animate__delay-1s">
            <div className="banner__img position-relative">
              <figure>
                <img
                  src={bannerImg}
                  className="img-fluid w-100"
                  alt="top-100-web"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
