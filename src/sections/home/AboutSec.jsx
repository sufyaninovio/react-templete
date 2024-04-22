import React from 'react'
import { aboutImg } from '../../constants/mediaConstants'
import ThemeButton from '../../components/ThemeButton'
const AboutSec = () => {
    return (
        <div className="about-sce">
            <div className="row align-items-center">
                <div className="col-lg-6 wow animate__animated animate__fadeInLeft animate__delay-1s">
                    <figure>
                        <img src={aboutImg} className="img-fluid w-100" alt="" />
                    </figure>
                </div>

                <div className="col-lg-6 p-4 p-sm-5 wow animate__animated animate__fadeInRight animate__delay-1s">
                    <h6 className='level-4 text-primary m-0'>About Us</h6>
                    
                    <h2 className="level-1">Unlock Top-Tier Online Visibility with <span className='text-primary'>Our Top 100 Website Advertising Service</span></h2>
                    <p className='para'>Experience unparalleled website advertising and website marketing expertise at Top 100
Website Advertising. We pledge to position your website within the top 100 listings on
Google and 1000 other search engines within a mere 45 days, or your advertising is on
us. Elevate your online presence and secure top search engine rankings with us, riskfree. <br /><br />
With a proven track record of success, we extend an invitation for you to enhance your
online presence and witness your website ascend to the apex of search engine rankings.
Don't miss this risk-free opportunity to achieve unrivaled online success. Place your
website where it rightfully belongs: leading the way in search engine results.</p>
                    <ThemeButton text={"LEARN MORE"}  margin={"me-3"} anchor={true} linkTo={"/about-us"} />
                    {/* <ThemeButton text={"Get A Free Analysis"} /> */}
                </div>
            </div>
        </div>
    )
}

export default AboutSec