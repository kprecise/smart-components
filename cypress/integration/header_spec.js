const props = {
  mainImg: "https://www.blackhillsbadlands.com/sites/default/files/styles/bhb40_page_hero/public/photos/events/5th-annual-holiday-bazaar/abstract-background-blur-255377.jpg",
  logo: "https://carlisletheacarlisletheatre.org/images/football-logo-7.png",
  text: "This is the heading"
}

describe('Header page', function() {
  it('Passes correct property values from Header component', function() {
    cy.visit('/header')
    cy.get('h1').should('have.text', props.text)
    cy.get('img.main').should(($el) => {
      expect($el).to.have.attr('src', props.mainImg)
    })
    cy.get('img.logo').should(($el) => {
      expect($el).to.have.attr('src', props.logo)
    }) 
  })
});
