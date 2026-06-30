import React, { useEffect } from "react";

import "../styles/cart.css";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { Col, Container, Row } from "reactstrap";

import { motion } from "framer-motion";
import { cartActions } from "../redux/slices/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems)
  const totalAmount = useSelector((state) => state.cart.totalAmount)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Helmet title="Carrinho">
      <CommonSection title="Carrinho de Compras" />
      <section>
        <Container>
          <Row>
            <Col lg="9">
              {cartItems.length === 0 ? (
                <h2 className="fs-4 text-center">Nenhum item adicionado ao carrinho</h2>
              ) : (
                <table className="table bordered">
                  <thead>
                    <tr>
                      <th>Produto</th>
                      <th>Nome</th>
                      <th>Preço</th>
                      <th>Quant.</th>
                      <th>Excluir</th>
                    </tr>
                  </thead>

                  <tbody>
                    {cartItems.map((item, index) => (
                      <Tr item={item} key={index} />
                    ))}
                  </tbody>
                </table>
              )}
            </Col>

            <Col lg="3">
              <div>
                <h6 className="d-flex align-items-center justify-content-between">Subtotal
                  <span className="fs-4 fw-bold">R$ {totalAmount},00</span>
                </h6>
              </div>
              <p className="fs-6 mt-2">Impostos e frete serão calculados na finalização da compra.</p>
              <div>
                <button className="buy_btn w-100">
                  <Link to="/checkout">Finalizar Compra</Link>
                </button>

                <button className="buy_btn w-100 mt-3">
                  <Link to="/products">Continue Comprando</Link>
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

const Tr = ({ item }) => {

  const dispatch = useDispatch()

  const deleteProduct = () => {
    dispatch(cartActions.deleteItem(item.id))
  }

  return (
    <tr>
      <td><img src={item.imgUrl} alt="" /></td>
      <td>{item.productName}</td>
      <td>$ {item.price}</td>
      <td>{item.quantity}</td>
      <td>
        <motion.i
          whileTap={{ scale: 1.2 }}
          class="ri-delete-bin-line"
          onClick={deleteProduct}>
        </motion.i>
      </td>
    </tr>
  )
}

export default Cart