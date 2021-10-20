/// <reference types="cypress" />

describe('Login', () => {
    
    beforeEach(() => {
        // should go to the Login URL on Bigteams Shedule Star Student Central  
        cy.visit('https://www.dev.planeths.com/index.php?keyword=/user/settings/notifications')
        //.wait(2000)
        //.get('#user-email-mobile').click().type('testone@yopmail.com')
        //.wait(2000)
        //.get('#user-password').click().type('abc12345')
        .wait(2000)
        //.get('.buttons > .action-btn-group-btn').click()
    })

  it('Should go to Login Page an enter wrong Email', () => {
      cy.visit('https://dev.planeths.com/index.php?keyword=admin%20home')
        .wait(2000)
        .get('#user-email-mobile').click().type('45654324566')
        .wait(2000)
        .get('#user-password').click().type('abc12345@#*')
        .wait(2000)
        .get('.buttons > .action-btn-group-btn').click()
        //.get('')     
    })

  it('Should go to Login Page and enter wrong Password', () => {
        cy.visit('https://dev.planeths.com/index.php?keyword=admin%20home')
          .wait(2000)
          .get('#user-email-mobile').click().type('shahbaz.khan@cache-cloud.com')
          .wait(2000)
          .get('#user-password').click().type('55445544')
          .wait(2000)
          .get('.buttons > .action-btn-group-btn').click()
          //.get('')     
      })
    it('Should go to Login Page and login to the User Account', () => {
        cy.visit('https://dev.planeths.com/index.php?keyword=admin%20home')
          .wait(2000)
          .get('#user-email-mobile')
          .wait(2000)
          .get('#user-password').click().type('shahbaz.khan@cache-cloud.com')
          .wait(2000)
          .get('.buttons > .action-btn-group-btn').click()
          //.get('')     
      })
          //cy.logout()
})

  