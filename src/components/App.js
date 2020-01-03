import React from "react";
import { Container, Row, Col } from 'reactstrap';
import Header from './header';
import Navigation from './navigation';
import OrderForm from './orderform';
import Article from './article';
import Carousel from './carousel';
import Cart from './cart';
import {
  navigationLinks,
  shoppingBasket,
  carouselData,
  carouselSettings
} from '../data.js';
import { JSONData } from '../data.js'
import "./index.css";

const App = () => {
  return (
      <Container>
        <Row>
          <Col xs="12">
            <Cart order={shoppingBasket} />
          </Col>
        </Row>
        <Row>
          <Col xs="12">
            <OrderForm />
          </Col>
        </Row>
        <Row>
          <Col xs="12">
            <Header
              mainImg="https://www.blackhillsbadlands.com/sites/default/files/styles/bhb40_page_hero/public/photos/events/5th-annual-holiday-bazaar/abstract-background-blur-255377.jpg"
              logo="https://carlisletheacarlisletheatre.org/images/football-logo-7.png"
              text="This is the heading"
            />
          </Col>
        </Row>
        <Row>
          <Col xs="12">
            <Carousel
              data={carouselData}
              settings={carouselSettings}
            />
          </Col>
        </Row>
        <Row>
            <Col xs="12">
                <h2>Navigation</h2>
                <Navigation 
                  links={navigationLinks}
                  tabs={false}
                  pills={true}
                  vertical={false}
                  justified={false}
                  />
            </Col>
        </Row>
        <Row>
          <Col xs="12">
            <h2>Article</h2>
            <Article
              // srcType="JSON"
              // dataSrc={JSONData}
              srcType="API"
              dataSrc="https://restcountries.eu/rest/v2/all"
            />
          </Col>
        </Row>
      </Container>
  )
}
 
export default App;