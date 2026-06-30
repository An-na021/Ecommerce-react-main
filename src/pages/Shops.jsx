import React, { useEffect } from "react";

import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { Container, Row, Col } from "reactstrap";
import shopOne from "../assets/images/shop-1.png";
import shopTwo from "../assets/images/shop-2.png";

import "../styles/shops.css";

const Shops = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Helmet title="Lojas">
      <CommonSection title="Conheça nossas Lojas" />
      <section className="hero_section">
        <Container>
          <Row className="text-center">
            <Col lg="6" md="12">
              <div className="hero_content">
                <h2><span>Loja 01 - </span>ZasrBazar</h2>
                <p><i class="ri-map-pin-line"></i> Endereço: ZasrBazar, Sylhet, Bangladesh</p>
                <p><i class="ri-phone-line"></i> Telefone: 9999999999</p>
              </div>
            </Col>

            <Col lg="6" md="12">
              <div className="hero_img">
                <img src={shopOne} alt="" />
              </div>
            </Col>
          </Row>
          <Row className="text-center">
            <Col lg="6" md="12">
              <div className="hero_content">
                <h2><span>Loja 02 - </span>ZasrBazar</h2>
                <p><i class="ri-map-pin-line"></i> Endereço: ZasrBazar, Sylhet, Bangladesh</p>
                <p><i class="ri-phone-line"></i> Telefone: 9999999999</p>
              </div>
            </Col>

            <Col lg="6" md="12">
              <div className="hero_img">
                <img src={shopTwo} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet >
  )
}

export default Shops;