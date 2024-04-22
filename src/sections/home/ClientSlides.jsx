import {
  clientLogoOne,
  clientLogoTwo,
  clientLogoThree,
  clientLogoFour,
  clientLogoFive,
} from "../../constants/mediaConstants";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ClientSlides = () => {
  const clientLogos = [
    { img: clientLogoOne },
    { img: clientLogoTwo },
    { img: clientLogoThree },
    { img: clientLogoFour },
    { img: clientLogoFive },
  ];
  var settings = {
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 2500,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <>
      <div className="pt-5"></div>
      <div className="top-div wow animate__animated animate__fadeInUpBig ">
        <div className="container">
          <div className="slide-show">
            <Slider {...settings}>
              {/* {
                            clientLogos?.map((logo, i) => {
                                <div className="slick-slideshow__slide">
                                    <figure>
                                        <img src={logo?.img} alt={`client's ${i}`} />
                                    </figure>
                                </div>
                            })
                        } */}
              <div className="slick-slideshow__slide">
                <figure>
                  <img src={clientLogoOne} alt={`client's`} />
                </figure>
              </div>
              <div className="slick-slideshow__slide">
                <figure>
                  <img src={clientLogoTwo} alt={`client's`} />
                </figure>
              </div>
              <div className="slick-slideshow__slide">
                <figure>
                  <img src={clientLogoThree} alt={`client's`} />
                </figure>
              </div>
              <div className="slick-slideshow__slide">
                <figure>
                  <img src={clientLogoFour} alt={`client's`} />
                </figure>
              </div>
              <div className="slick-slideshow__slide">
                <figure>
                  <img src={clientLogoFive} alt={`client's`} />
                </figure>
              </div>
              <div className="slick-slideshow__slide">
                <figure>
                  <img src={clientLogoOne} alt={`client's`} />
                </figure>
              </div>
              <div className="slick-slideshow__slide">
                <figure>
                  <img src={clientLogoTwo} alt={`client's`} />
                </figure>
              </div>
              <div className="slick-slideshow__slide">
                <figure>
                  <img src={clientLogoThree} alt={`client's`} />
                </figure>
              </div>
              <div className="slick-slideshow__slide">
                <figure>
                  <img src={clientLogoFour} alt={`client's`} />
                </figure>
              </div>
              <div className="slick-slideshow__slide">
                <figure>
                  <img src={clientLogoFive} alt={`client's`} />
                </figure>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientSlides;
