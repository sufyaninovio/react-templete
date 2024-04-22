import React from "react";
import { Link } from "react-router-dom";

const ServicesCard = ({ card }) => {
  return (
    <div className="card h-100">
      <figure>
        <img src={card?.img} className="img-fluid" alt="services" />
      </figure>
      <div className="text mb-auto mt-4">
        
      <h3 className="level-3 mb-2">{card?.name}</h3>
      <p className="para text-primary">{card?.para}</p>
      </div>
      <Link to={`/service/${card?.slug}`} className="level-5 text-primary">
        LEARN MORE
      </Link>
    </div>
  );
};

export default ServicesCard;
