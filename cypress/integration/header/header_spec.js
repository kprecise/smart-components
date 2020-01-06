describe('Header', function() {
  it('hits page', function() {
    cy.visit('http://localhost:8080/components/header/');
    cy.contains('Your cart has items in it');
  })
});
