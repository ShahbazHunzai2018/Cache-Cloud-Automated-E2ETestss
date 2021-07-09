/// <reference types="cypress" />

describe('Login', () => {
    beforeEach(() => {
      // should go to the Login URL on Bigteams Shedule Star Student Central  
      cy.visit('https://www.test.planeths.com/index.php?keyword=/user/settings/notifications')
      .wait(2000)
      .get('#user-email-mobile').click().type('testone@yopmail.com')
      .wait(2000)
      .get('#user-password').click().type('abc12345')
      .wait(2000)
      .get('.buttons > .action-btn-group-btn').click()
  })

  it('Should change current Password', () => {
      cy.visit('https://www.planeths.com/index.php?keyword=/user/settings/password')
        .get('#user-password-current').type('abc12345')
        .wait(2000)
        .get('#user-password').type('abc12345')
        .wait(2000)
        .get('#user-password-confirm').type('abc12345')
        .wait(2000)
        .get('.buttons > .action-btn-group-btn').click()
           
    })
     // cy.logout()

    })
