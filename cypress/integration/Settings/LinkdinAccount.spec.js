/// <reference types="cypress" />

describe('Login', () => {
    beforeEach(() => {
      // should go to the Login URL on Bigteams Shedule Star Student Central  
      cy.visit('https://www.test.planeths.com/index.php?keyword=/account_linking/overview')
      .wait(2000)
      .get('#user-email-mobile').click().type('testone@yopmail.com')
      .wait(2000)
      .get('#user-password').click().type('abc12345')
      .wait(2000)
      .get('.buttons > .action-btn-group-btn').click()
  })

  it('Should change current Password', () => {
      cy.visit('https://www.test.planeths.com/index.php?keyword=/account_linking/overview')
        .get('#account-linking-invitation-email-mobile').type('abc12345')
        .wait(2000)
  })
     // cy.logout()

})
