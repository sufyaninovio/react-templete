import React from "react";
import PageBanner from "../../components/PagesBanner";
import GetInTouchSec from "../../sections/contactus/GetInTouchSec";
import TeamSec from "../../sections/universal/TeamSec";

const ContactUs = () => {
    
    return (
        <>
            <PageBanner dark_heading="Contact" light_heading="us" />
            <GetInTouchSec />
            {/* <TeamSec /> */}
        </>
    )
}
export default ContactUs;