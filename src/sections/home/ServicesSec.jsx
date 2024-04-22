import { servicesCardData } from "../../constants/data";
import ServicesCard from "../../components/ServicesCard";
// import ThemeButton from "../../components/ThemeButton";
import { Link } from 'react-router-dom'

const ServicesSec = () => {
  return (
    <section className="services-sec">
      <div className="container">
        <div className="text-center mb-5">
          <h6 className="text-primary level-4 m-0">SERVICES</h6>
          <h2 className="level-2">
            Elevating Your
            <span className="text-primary d-block">Online Presence</span>
          </h2>
        </div>

        <div className="row">
          {servicesCardData?.map((card, i) => (
            <div key={i} className="col-md-4 mb-3 mh-100  wow animate__animated animate__fadeInLeft animate__delay-1s">
              <ServicesCard  card={card} />
            </div>
          ))}
        </div>
        <div className="text-center mt-3  wow animate__animated animate__fadeInUp">
            {/* <ThemeButton text={"View All"} margin={"mt-3"}/> */}
            <Link
              to="/services"
              className={`btn  primary-btn`}
            >
              View All
          </Link>
          {/* <button type="submit" className="btn primary-btn">
            View All
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default ServicesSec;
