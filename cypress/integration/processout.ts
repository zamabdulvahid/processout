describe('Home Page', () => {

  it('Should have title ProcessOut', () => {
    cy.visit('/home')
    cy.contains('ProcessOut');
  });

  it('Should test feedback form submit', () => {
    cy.get('#feedbackForm input')
      .first()
      .type('Zam Abdul Vahid')
      .should('have.value', 'Zam Abdul Vahid')
    cy.get('#feedbackForm input')
      .eq(1)
      .type('mail2zam@gmail.com')
      .should('have.value', 'mail2zam@gmail.com')
    cy.get('#feedbackForm input')
      .eq(2)
      .type('3')
      .should('have.value', '3')
    cy.get('#feedbackForm textarea')
      .first()
      .type('This is my test comment')
      .should('have.value', 'This is my test comment')
    cy.get('#btn-submit').click()
    cy.get('.comment')
      .first()
      .find('h3')
      .should('have.text', 'Zam Abdul Vahid')
  });

  it('Should test for validation messages', () => {
    cy.get('#feedbackForm input')
      .first()
      .clear()
      .type('Zam 12#')
    cy.get('#btn-submit').click()
    cy.get('#feedbackForm input')
      .first()
      .siblings('div')
      .find('span')
      .should('have.text', 'Name field should contain only characters & spaces')
  });
})
