
const links = {
  home: {
    label: 'Home',
    url: '/'
  },
  header: {
    label: 'Header',
    url: '/header'
  },  
  article: {
    label: 'Article',
    url: '/article'
  },    
  carousel: {
    label: 'Carousel',
    url: '/carousel'
  },     
  cart: {
    label: 'Cart',
    url: '/cart'
  },    
  orderform: {
    label: 'Order Form',
    url: '/orderform'
  },    
  navigation: {
    label: 'Navigation',
    url: '/navigation'
  },    
}

describe('Homepage', function() {
  it('loads correctly', function() {
    cy.visit('/');
  })
  it('home has correct values for link hrefs and labels', function() {
    const $homeLink = Cypress.$('a#home')
    cy.get($homeLink).should(($el) => {
      expect($el).to.have.attr('href', links.home.url)
    })
    cy.get($homeLink).should('have.text', links.home.label)
  })  
  it('header has correct values for link hrefs and labels', function() {
    const $headerLink = Cypress.$('a#header')
    cy.get($headerLink).should(($el) => {
      expect($el).to.have.attr('href', links.header.url)
    })
    cy.get($headerLink).should('have.text', links.header.label)    
  })
  it('article has correct values for link hrefs and labels', function() {
    const $articleLink = Cypress.$('a#article')
    cy.get($articleLink).should(($el) => {
      expect($el).to.have.attr('href', links.article.url)
    })
    cy.get($articleLink).should('have.text', links.article.label)    
  })  
  it('carousel has correct values for link hrefs and labels', function() {
    const $carouselLink = Cypress.$('a#carousel')
    cy.get($carouselLink).should(($el) => {
      expect($el).to.have.attr('href', links.carousel.url)
    })
    cy.get($carouselLink).should('have.text', links.carousel.label)    
  })    
  it('cart has correct values for link hrefs and labels', function() {
    const $cartLink = Cypress.$('a#cart')
    cy.get($cartLink).should(($el) => {
      expect($el).to.have.attr('href', links.cart.url)
    })
    cy.get($cartLink).should('have.text', links.cart.label)    
  })    
  it('orderform has correct values for link hrefs and labels', function() {
    const $orderformLink = Cypress.$('a#orderform')
    cy.get($orderformLink).should(($el) => {
      expect($el).to.have.attr('href', links.orderform.url)
    })
    cy.get($orderformLink).should('have.text', links.orderform.label)    
  })    
  it('navigation has correct values for link hrefs and labels', function() {
    const $navigationLink = Cypress.$('a#navigation')
    cy.get($navigationLink).should(($el) => {
      expect($el).to.have.attr('href', links.navigation.url)
    })
    cy.get($navigationLink).should('have.text', links.navigation.label)    
  })    
});