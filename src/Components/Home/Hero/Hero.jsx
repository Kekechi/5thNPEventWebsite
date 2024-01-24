import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import newspicksImg from "../../../Assets/newspicks.png";

function Hero() {
  return (
    <div className="hero d-flex flex-column justify-content-center" id="top">
      <Container>
        <Row>
          <Col xs={12} md={4} className="hero-pic-container">
            <img src={newspicksImg} alt="" className="hero-pic" />
          </Col>
          <Col xs={12} md={8}>
            <h4 className="text-warning">3月中旬2024</h4>
            <h1 className="text-light title">
              第五期Student Picker オンラインイベント告知用ウェブサイト
            </h1>
            <p className="text-light headline"></p>
            <Button variant="outline-warning">登録フォーム</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Hero;
