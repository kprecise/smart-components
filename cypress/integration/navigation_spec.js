describe('Navigation page', function() {
  it('loads correctly', function() {
    cy.visit('/navigation');
  })
  it('navigation home link name and href matches data', function() {
    const props = {
      id: 'home', 
      name: 'home', 
      href: '/home'
    }   
    const $homeLink = Cypress.$('.navItem a#home')
    cy.get($homeLink).should(($item) => {
      expect($item).to.have.attr('href', props.href)
      expect($item).to.have.attr('id', props.id)
    })
  })

  it('secondary navigation renders for the About section', function() {
    cy.get('.nav > li.nav-item').should(($lis) => {
      expect($lis.eq(2)).to.have.attr('id', 'about-secondary')
      expect($lis.eq(2)).to.have.attr('class', 'dropdown nav-item')
    })
  })

  it('secondary navigation link text is correct', function() {
    cy.get('#about-secondary .dropdown-item#link1').should('have.text','link1')
    cy.get('#about-secondary .dropdown-item#link2').should('have.text','link2')
  })

});
