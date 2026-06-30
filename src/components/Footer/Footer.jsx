import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row, ListGroup, ListGroupItem } from "reactstrap";
import "./footer.css";

const Footer = () => {

  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="6" className="mb-4">
            <div className="logo">
              <span><i class="ri-shopping-bag-line"></i></span>
              <div>
                <h1 className="text-white"><span className="logo_new">e</span>Shop</h1>
              </div>
            </div>
            <p className="footer_text mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              aliquam at autem nesciunt natus illo ipsum dignissimos provident
              voluptate qui?
            </p>
            <div className="social_icons">
              <a href="https://www.instagram.com/" target='_blank' rel='noreferrer'>
                <i class="ri-instagram-line"></i>
              </a>
              <a href="https://www.linkedin.com/" target='_blank' rel='noreferrer'>
                <i class="ri-linkedin-fill"></i>
              </a>
              <a href="https://www.facebook.com/" target='_blank' rel='noreferrer'>
                <i class="ri-facebook-fill"></i>
              </a>
              <a href="https://web.whatsapp.com/" target='_blank' rel='noreferrer'>
                <i class="ri-whatsapp-line"></i>
              </a>
            </div>
          </Col>

          <Col lg="3" md="3" className="mb-4">
            <div className="footer_quick-links">
              <h4 className="quick_links-title">Principais Categorias</h4>
              <ListGroup className="mb-3">
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Mobile Phones</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Modern Sofa</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Arm Chair</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Smart Watches</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg="2" md="3" className="mb-4">
            <div className="footer_quick-links">
              <h4 className="quick_links-title">Links Úteis</h4>
              <ListGroup className="mb-3">
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/about">Sobre</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="/products">Produtos</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="/shops">Lojas</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="/cart">Carrinho</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="/login">Login</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg="3" md="4">
            <div className="footer_quick-links">
              <h4 className="quick_links-title">Contato</h4>
              <ListGroup className="footer_contact">
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span><i class="ri-map-pin-line"></i></span>
                  <p>Loja 1 - ZasrBazar, Sylhet, Bangladesh</p>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span><i class="ri-map-pin-line"></i></span>
                  <p>Loja 2 - ZasrBazar, Sylhet, Bangladesh</p>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span><i class="ri-phone-line"></i></span>
                  <p>+558899999999</p>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span><i class="ri-mail-line"></i></span>
                  <p>contactcenter606@gmail.com</p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="12">
            <p className="footer_copyright">Copyright {year} developed by
              Paulo Araújo. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer >
  )
}

export default Footer