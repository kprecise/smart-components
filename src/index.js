import React from "react";
import ReactDOM from "react-dom";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import App from "./components/App";
import HeaderPage from "./components/header/";
import ArticlePage from "./components/article/";
import CarouselPage from "./components/carousel/";
import CartPage from "./components/cart/";
import OrderFormPage from "./components/orderform/";
import NavigationPage from "./components/navigation/";
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.scss';

const routing = (
  <Router>
    <Container>
      <Row>
        <Col xs="12">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/header">Header</Link>
            </li>
            <li>
              <Link to="/article">Article</Link>
            </li>
            <li>
              <Link to="/carousel">Carousel</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
            <li>
              <Link to="/orderform">Order Form</Link>
            </li>
            <li>
              <Link to="/navigation">Navigation</Link>
            </li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col xs="12">
          <Route exact path="/" component={App} />
          <Route path="/header" component={HeaderPage} />
          <Route path="/article" component={ArticlePage} />
          <Route path="/carousel" component={CarouselPage} />
          <Route path="/cart" component={CartPage} />
          <Route path="/orderform" component={OrderFormPage} />
          <Route path="/navigation" component={NavigationPage} />
        </Col>
      </Row>
    </Container>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'))