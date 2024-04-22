import React from "react";
import { Link } from 'react-router-dom'
const ServiceItem = (props) => {
    return (
        <>
            <div className={`${(props.columns == 3) ? 'col-lg-4 col-md-6 col-sm-6' : 'col-lg-6 col-md-6 col-sm-6'} px-lg-4 my-4 wow animate__animated animate__fadeInLeft animate__delay-1s`} key={props.key}>
                <Link className="text-decoration-none" to={`/service/${props.id}`}>
                    <div className="single-service">
                        <figure className="service-image">
                            <img src={props.image} className="img-here w-100" alt="" />
                        </figure>
                        <div className={`text-here py-4 ${(props.columns == 3) ? '' : 'px-4'}`}>
                            <h4 className="level-3 pt-1">{props.first_name} <span className="text-primary">{props.last_name}</span></h4>
                            <span className="level-5 font-small line-clamp lines-2">{props.para}</span>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}
export default ServiceItem;