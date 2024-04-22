import React from "react";
import ServiceItem from "../../components/ServiceItem";
import servicesData from "../../components/ServiceData";
const ServicesSec = () => {
    const columns = 2;
    return (
        <>
            <section className="services-seciton py-5">
                <div className="container">
                    <div className="services-start col-lg-10 mx-auto">
                        <div className="row">
                            {
                                servicesData.map((service, index) => (
                                    <ServiceItem first_name={service.first_name} columns={columns} id={service.slug} last_name={service.last_name} para={service.para} image={service.image} key={index} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default ServicesSec;