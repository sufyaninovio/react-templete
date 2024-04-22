import React from "react";
import ServicesSec from "../../sections/services/ServicesSec";
import PageBanner from "../../components/PagesBanner";

const Services = () => {
    return (
        <>
            <PageBanner dark_heading="Our" light_heading="Services" />
            <ServicesSec />
        </>
    )
}
export default Services;