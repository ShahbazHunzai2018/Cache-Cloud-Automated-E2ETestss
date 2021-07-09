// @Here is the automation code for Login form for dev.planet.com .   
/// <reference types="cypress" />

describe('Login', () => {
    beforeEach(() => {
      // should go to the Login URL on Bigteams Shedule Star 
      cy.visit('https://dev.planeths.com/login/?keyword=%2Fuser%2Fsignin&schoolID=0')
        .wait(2000)
})
it('Should go to the Login Page and Login for the new User', () => {
    cy.get('#user-email-mobile').click().type('test3@yopmail.com')
      .wait(2000)
      .get('#user-password').click().type('12345678')
      .wait(2000)
      .get('#susi-panel-body > div.checkbox > label > input[type=checkbox]').click()
      .wait(2000)
      .get('#action-btn-group > div.buttons > button').click()


  })
})