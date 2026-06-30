import React, { useEffect } from "react";

import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import aboutImg from "../assets/images/about-img.png";

import "../styles/about.css";

const About = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Helmet title="Sobre">
      <CommonSection title="Sobre" />
      <section className="hero_section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero_content">
                <p className="hero_subtitle"></p>
                <h2>Quem somos nós ?</h2>
                <p>A eShop é tecnologia. Se você ligou uma coisa a outra,
                  provavelmente conhece a gente. Por definição, a eShop é
                  um varejo especializado em tecnologia e informática. Mas, na
                  verdade, é muito mais que isso. Fundada no início do desenvolvimento
                  do mercado de informática no país, a eShop é hoje um dos
                  maiores varejos especializados do Brasil. É fácil saber o porquê.
                </p>

                <motion.button whileTap={{ scale: 1.2 }} className="buy_btn">
                  <Link to="/products">Compre agora</Link>
                </motion.button>

                <motion.button whileTap={{ scale: 1.2 }} className="wpp_btn">
                  <a href="https://web.whatsapp.com/" target='_blank' rel='noreferrer'>
                    Fale com a gente <i class="ri-whatsapp-line"></i>
                  </a>
                </motion.button>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="hero_img">
                <img src={aboutImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default About