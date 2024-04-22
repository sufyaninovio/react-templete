import React from 'react'
import PageBanner from '../../components/PagesBanner'
import { serviceDetail2Img } from '../../constants/mediaConstants'
import { Link } from 'react-router-dom'
import TeamSec from '../../sections/universal/TeamSec'
const AboutUs = () => {
    return (
        <>
            <PageBanner dark_heading="About" light_heading="us" image_logo="wihtout-image" />
            <div class="section-padding pt-5">
                <div class="container-fluid px-0">
                    <div class="row align-items-center">
                        <div class="col-lg-6 ms-auto px-4  px-md-5 py-lg-4  py-md-5 wow animate__animated animate__fadeInRight order-1 order-lg-0">
                            <div class="ps-xxl-5">
                                <h6 class="level-4 text-primary m-0">About Us</h6>
                                {/* <h2 class="level-1">Your Trusted Partner in<span class="text-primary"> Digital Success</span></h2> */}
                                <h2 className="level-1">Discovering Our Narrative: <span className='text-primary'>Pioneering Website Advertising Innovation</span></h2>
                                <p className='para'>Elevate your online visibility to new heights with our Top 100 Website Advertising
                                    service. We offer a guarantee: Your website will achieve top 100 rankings on Google and
                                    1000 other search engines within 45 days, or you won't pay a dime for our advertising
                                    services. Join us to boost your online presence confidently.</p>
                                <Link to="/services" class="btn  primary-btn  ">View Services</Link>
                            </div>
                        </div>
                        <div class="col-lg-6 ps-lg-4 py-5 wow animate__animated animate__fadeInLeft">
                            <figure><img src={serviceDetail2Img} class="img-fluid w-100" alt="" /></figure>
                        </div>
                    </div>

                </div>
            </div>
            <section className="vision-mission ">
                <div className="container-fluid">
                    <div className="about-text-section">
                        <div className="row">
                            <div className="col-md-6 px-0 pe-lg-3">
                                <div className="single-text-box">
                                    <div className="text-here">
                                        <h2 className="level-2">Our <span className=' text-primary'>Mission</span></h2>
                                        <p className="para">Our mission at Top 100 Website Advertising is unwavering dedication to website
                                            advertising excellence. We are on a mission to revolutionize online visibility, providing
                                            cutting-edge solutions that propel businesses to the top of search engine rankings. With
                                            a proven track record and a commitment to delivering exceptional results, we invite you
                                            to join us in reaching new heights of online success. Our mission is to position your
                                            website where it truly belongs – at the forefront of search engine results, driving your
                                            business towards unparalleled achievements.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 px-0 ps-lg-3">
                                <div className="single-text-box">
                                    <div className="text-here">
                                        <h2 className="level-2">Our <span className=' text-primary'>Vision</span></h2>
                                        <p className="para">Our vision at Top 100 Website Advertising is to be the undisputed leader in the website
                                            advertising industry, setting new standards of excellence and innovation. We aspire to
                                            be the go-to partner for businesses worldwide, guiding them towards unassailable
                                            online prominence and success. We envision a future where our advanced strategies
                                            and unwavering commitment to our client’s drive lasting positive change in the digital
                                            landscape. Through sustainable growth and a relentless pursuit of excellence, we aim to
                                            shape the future of website advertising and inspire businesses to achieve their full
                                            potential online.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class=" py-5">
                <div class="container-fluid px-0">
                    <div class="row align-items-center">
                        <div class="col-lg-6 pe-lg-4 py-5 wow animate__animated animate__fadeInLeft">
                            <figure><img src={serviceDetail2Img} class="img-fluid w-100" alt="" /></figure>
                        </div>
                        <div class="col-lg-6 ms-auto px-4  px-md-5 py-lg-4  py-md-5 wow animate__animated animate__fadeInRight">
                            <div class="pe-xxl-5">
                                <h6 class="level-4 text-primary m-0">Services</h6>
                                <h2 class="level-1">A look back at brief<span class="text-primary"> History of Top 100 Adverts </span></h2>
                                <p class="para">Our primary focus is on search engine optimization (SEO), a critical aspect of any successful online strategy. Through meticulous keyword research, content optimization, and cutting-edge SEO techniques, we have consistently propelled our clients' websites to the top of search engine rankings. What sets us apart is our unwavering commitment to our clients' success. That's why we confidently offer a guarantee: if we don't achieve top search engine rankings for your website within 45 days, we'll refund your money. It's a testament to our confidence in our abilities and our dedication to delivering results.</p>
                                <Link to="/services" class="btn  primary-btn  ">View Services</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <TeamSec /> */}
        </>
    )
}
export default AboutUs;