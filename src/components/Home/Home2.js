import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={8} className="home-about-description">
              <h1 style={{ fontSize: "2.6em" }}>
                DEIXE EU ME <span className="purple"> APRESENTAR </span>
              </h1>
              <p className="home-about-body">
                Desde os 13 anos, comecei a estudar programação inspirado pela minha paixão por jogos.

                Minha experiência combina lógica matemática, criatividade e uma visão
                crítica para criar experiências que cativam e são bem estruturadas.
                <br/>
                <br/>Tenho um conhecimento avançado em <b className="purple"> C#</b>,<b className="purple"> Unity</b> e<b className="purple"> matemática avançada</b>
                <br/>
                <br/>
                A minha base sólida em matemática me dá habilidades para desenvolver
                <b className="purple"> Mecânicas </b>, <b className="purple">Balanceamentos </b> e também questões relacionadas a
                <b className="purple"> física</b>
                <br/>
                <br/>
                Sempre estou jogando os mais diversos tipos de jogos em diversas plataformas, analisando tanto os
                aspectos
                <b className="purple"> Técnicos</b> quanto o que os tornam
                <b className="purple"> Divertidos</b>
              </p>
            </Col>
            <Col md={4} className="myAvtar">
            <Tilt>
                <img src={myImg} className="img-fluid" alt="avatar" />
              </Tilt>
            </Col>
          </Row>
          <Row>
            <Col md={12} className="home-about-social">
              <h1>ENCONTRE-ME EM</h1>
              <p>
                Sinta-se à vontade para <span className="purple">conectar </span>comigo
              </p>
              <ul className="home-about-social-links">
                <li className="social-icons">
                  <a
                      href="https://github.com/GivaldoF"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                      href="https://x.com/GivaldoFernands"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                  >
                    <AiOutlineTwitter />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                      href="https://www.linkedin.com/in/givaldofernandes/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                      href="https://www.instagram.com/givaldo.fernandess/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                  >
                    <AiFillInstagram />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
  );
}
export default Home2;