import React from 'react'
import InputField from '../../components/InputField'
import ThemeButton from '../../components/ThemeButton'
import PageBanner from '../../components/PagesBanner'
import { Link } from 'react-router-dom'
const Packages = () => {
    return (
        <>
            <PageBanner dark_heading='Packages' image_logo="wihtout-image" />
            <section className="package-section section-padding">
                <div className="container">
                    <div className="package-start">
                        <div className="row">
                            <div className="col-md-6 wow animate__animated animate__fadeInLeft animate__delay-1s">
                                <div className="text-here py-5 pe-xl-3">
                                    <h6 className='level-4 text-primary m-0 '>Packages</h6>
                                    <h2 className="level-1 mb-3">Here’s what we <span className='text-primary d-block'>Charge for our service</span></h2>
                                    <p className='para me-xl-3'>We offer you our HTML Package, available for a one-time fee of $500. Your webmaster will seamlessly
                                        integrate this package into your website. Following the integration, our team at TOP 100 Advertising
                                        initiates your business's advertising campaign, priced at $250.00 per month. Should you, as the owner of the website business, ever find our performance unsatisfactory, there's no obligation to make payment.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6 px-lg-5 wow animate__animated animate__fadeInRight animate__delay-2s">
                                <div class="small-business-div">
                                    <h3 class="level-3">Small <span class="text-primary">Business</span> Website</h3>
                                    <h4 class="level-5">$500 HTML Package (one time fee), then $250 a month</h4>
                                    <div class="small-business-div-text">
                                        {/* <p class="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quisque egestas diam in arcu cursus euismod.<br />Lorem ipsum dolor sit amet,</p><p class="para"> consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quisque egestas diam in arcu cursus euismod.</p><p class="para"> consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quisque egestas diam in arcu cursus euismod.</p> */}
                                        <h4 className="level-5"> Our SEO services include:</h4>
                                        <p className="para">
                                            Keyword research and optimization <br />
                                            On-page SEO enhancements <br />
                                            Off-page SEO strategies <br />
                                            Quality backlink building <br />
                                            Content creation and optimization <br />
                                            Regular performance monitoring and reporting <br />
                                        </p>
                                    </div>

                                    <Link to="/checkout" class="btn w-100 primary-btn  ">Place Order</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="package-quote pb-5 mb-4">
                <div className="container">
                    <div className="package-quote-start quote-box p-3 p-sm-5 pt-4">
                        <div className="row">
                            <div className="col-lg-5 ps-xxl-4 pe-xxl-5">
                                <div className="text-here">
                                    <h6 className='level-5 text-primary m-0 '>Do you want a free analysis of your website?</h6>
                                    <h2 className="level-2">Get a <span className='text-primary'>Quote Now!</span></h2>
                                    {/* <p className="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p> */}
                                </div>
                            </div>
                            <div className="col-lg-7 mt-4 mt-lg-0">
                                <div className="form-here">
                                    <form>
                                        <div className="row">
                                            <div className="mb-3 col-md-4">
                                                <InputField
                                                    label={"Full name"}
                                                    type={"text"}
                                                    placeholder={"Enter Full Name"}
                                                />
                                            </div>
                                            <div className="col-md-4 mb-3">
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
                                            <div className="mb-3 col-md-4">
                                                <InputField
                                                    label={"Email"}
                                                    type={"email"}
                                                    placeholder={"Enter Email"}
                                                />
                                            </div>

                                            <div className="mb-3 col-md-8">
                                                <InputField
                                                    label={"Website URL"}
                                                    type={"text"}
                                                    placeholder={"https://"}
                                                />
                                            </div>


                                            <div className="mb-3 col-md-4  mt-auto">
                                                <ThemeButton text={"Let's Go!"} width={"w-100"} />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Packages;