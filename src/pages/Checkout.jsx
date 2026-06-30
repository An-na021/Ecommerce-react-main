import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import "../styles/checkout.css";
import { useSelector } from "react-redux";

const Checkout = () => {
  const [formValues, setFormValues] = useState({
    usuario: '',
    nome: '',
    centroDeCusto: '',
    email: '',
  });
  const totalQty = useSelector(state => state.cart.totalQuantity)
  const totalAmount = useSelector(state => state.cart.totalAmount)
  const cartItems = useSelector(state => state.cart.cartItems)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues(prev => ({ ...prev, [name]: value }));
  };

  const placeOrder = async (e) => {
    e.preventDefault();

    // Monta o objeto do pedido com os dados do formulário e do carrinho
    const orderData = {
      customerInfo: formValues,
      orderItems: cartItems,
      totalAmount: totalAmount,
      totalQuantity: totalQty
    };

    console.log("Dados do Pedido", orderData);

    try {
      const response = await fetch('http://localhost:5000/send-order-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ orderData, recipientEmail: 'annamalschitzky@gmail.com' })
      });

      const result = await response.json();
      if (response.ok) {
        alert('Pedido enviado com sucesso. Um e-mail foi encaminhado para ' + result.email);
        // aqui você pode limpar o carrinho e redirecionar
      } else {
        console.error('Resposta do servidor:', result);
        alert('Erro ao enviar pedido: ' + (result.message || 'Erro desconhecido'));
      }
    } catch (error) {
      console.error('Erro de rede:', error);
      alert('Erro de rede ao enviar o pedido. Verifique se o backend está rodando em http://localhost:5000');
    }
    // Em um ambiente real, você limparia o carrinho e redirecionaria aqui.
  };

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Helmet title="Checkout">
      <CommonSection title="Checkout" />
      <section>
        <Container>
          <Row>
            <Col lg="8">
              <h6 className="mb-4 fw-bold">Informações de solicitação, serão enviadas via chamados@condor.ind.br: </h6>
              <Form className="billing_form" onSubmit={placeOrder}>
                <FormGroup className="form_group">
                  <input type="text" placeholder="Digite seu usúario de rede" required name="usuario" value={formValues.usuario} onChange={handleChange} />
                </FormGroup>

                <FormGroup className="form_group">
                  <input type="text" placeholder="Digite seu nome" required name="nome" value={formValues.nome} onChange={handleChange} />
                </FormGroup>

                <FormGroup className="form_group">
                  <input type="email" placeholder="Email Condor" required name="email" value={formValues.email} onChange={handleChange} />
                </FormGroup>

                <FormGroup className="form_group">
                  <input type="number" placeholder="Digite seu centro de custo" required name="centroDeCusto" value={formValues.centroDeCusto} onChange={handleChange} />
                </FormGroup>
              </Form>
            </Col>

            <Col lg="4">
              <div className="checkout_cart">
                <h3>Resumo do Pedido</h3>
                <h6>Produtos: <span>{totalQty} items</span></h6>
                <h6>Subtotal: <span>R$ {totalAmount},00</span></h6>
                <h6>
                  <span>Envio: <br />Envio Grátis</span><span>R$ 0</span>
                </h6>
                <h4>Total: <span>R$ {totalAmount},00</span></h4>
                <motion.button whileTap={{ scale: 1.1 }} className="buy_btn auth_btn w-100" type="submit" onClick={placeOrder}>Fazer um pedido</motion.button>
                <motion.button whileTap={{ scale: 1.1 }} className="buy_btn auth_btn w-100 mt-3">
                  <Link to="/products">Escolher mais Produtos</Link>
                </motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Checkout;