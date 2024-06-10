import React from "react";
import { Col, Row } from "react-bootstrap";
import history from "../../images/his.jpg";

function History() {
  return (
    <div className="container history-section">
      <Row className="space-between-sections">
        <Col lg={6}>
          <img data-aos="fade-up-right" src={history} alt="" loading="lazy" />
        </Col>
        <Col lg={6} className="tablet-gap ml-5">
          <Col className="history-box mb-5 ">
            <h3 className="secondary-color fs-2 mb-2">The Story</h3>
            <p className="aaaa">
              Lorem Ipsum is that it has a more-or-less normal distribution of
              letters, as opposed to using 'Content here, content gfshere',
              makinlook like readable English. Many desktop publishing packages.
            </p>
          </Col>
          <Row>
            <Col>
              <h3 className="secondary-color fs-2 mb-2">1996</h3>
              <p className="aaaa">
                Lorem Ipsum is that it has a more-or-less normal distribution of
                letters,
              </p>
            </Col>
            <Col>
              <h3 className="secondary-color fs-2 mb-2">2024</h3>
              <p>
                as opposed to using 'Content here, content gfshere', makinlook
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default History;
