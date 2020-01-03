import React from "react";
import { Container, Row, Col } from 'reactstrap';
import Header from './header';
import Navigation from './nav';
import OrderForm from './orderform';
import Article from './article';
import SimpleSlider from './carousel';
import Cart from './cart';
import { links } from '../data.js';
// import { JSONData } from '../data.js'
import "./index.css";

const App = () => {
  return (
      <Container>
        <Row>
          <Col xs="12">
            <Cart order={
              [
                {
                  id: 1,
                  heading: 'Lorem ipsum dolor sit amet',
                  content: 'Mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor. Purus sit amet luctus venenatis lectus. Non enim praesent elementum facilisis leo vel. Nullam ac tortor vitae purus faucibus ornare. Diam sollicitudin tempor id eu nisl nunc mi. Ornare suspendisse sed nisi lacus. ',
                  image:'https://via.placeholder.com/150/0000FF/808080 ?Text=Digital.com'
                },
                {
                  id: 2,
                  heading: 'Lorem ipsum dolor sit amet',
                  content: 'Mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor. Purus sit amet luctus venenatis lectus. Non enim praesent elementum facilisis leo vel. Nullam ac tortor vitae purus faucibus ornare. Diam sollicitudin tempor id eu nisl nunc mi. Ornare suspendisse sed nisi lacus. ',
                  image:'https://via.placeholder.com/150/CC0000/808080 ?Text=Digital.com'
                }
              ]
            } />
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
            <SimpleSlider />
          </Col>
        </Row>
        <Row>
            <Col xs="12">
                <h2>Navigation</h2>
                <Navigation 
                  links={links} 
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