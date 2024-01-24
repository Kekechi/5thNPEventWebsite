import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SectionMain from "./SectionMain";

function Sections() {
  return (
    <div className="sections">
      <div className="section-anchor" id="sections"></div>
      <Container className="py-5">
        <Row>
          <Col md={4}>
            <SectionMain particleColor={"pink"} title={"アイドル"} />
          </Col>
          <Col md={4}>
            <SectionMain particleColor={"aqua"} title={"キャリア前編"} />
          </Col>
          <Col md={4}>
            <SectionMain particleColor={"lightgreen"} title={"キャリア後編"} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Sections;
