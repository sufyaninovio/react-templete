import React from "react";
const TeamCard = (props) => {
    return(
        <div className="col-md-3 mb-4 wow animate__animated animate__fadeInRight animate__delay-1s">
            <div className="single-card">
                <figure className="member-image">
                    <img src={props.image} className="img-here w-100" alt="" />
                </figure>
                <div className="member-data text-center pt-3">
                    <h3 className="level-3 mb-1">{props.first_name} <span className="text-primary">{props.last_name}</span></h3>
                    <span className="para light-color">{props.position}</span>
                </div>
            </div>
        </div>
    )
}
export default TeamCard;