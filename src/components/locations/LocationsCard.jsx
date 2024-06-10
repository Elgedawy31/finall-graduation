import React from "react";
import { Col } from "react-bootstrap";

function LocationsCard({ icon, title, desc, isMail = false }) {
  return (
    <Col data-aos="fade-up" lg={4} md={6}   >
      <div className="d-flex align-items-center justify-content-start gap-3 ">
        <div className="icon d-flex align-items-center justify-content-center">
          {icon}
        </div>
        <div className="content">
          <h4 className="secondary-color mb-2 fs-4">{title}</h4>
          {!isMail ? <p>{desc}</p> : <a href={`mailto:${desc}`}>{desc}</a>}
        </div>
      </div>
    </Col>
  );
}

export default LocationsCard;
