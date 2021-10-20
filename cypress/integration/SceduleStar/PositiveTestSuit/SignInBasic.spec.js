// @Here is the automation code for Login form for dev.planet.com .   
/// <reference types="cypress" />

describe('Login', () => {
    beforeEach(() => {
      // should go to the Login URL on Bigteams Shedule Star 
      cy.visit('https://schedulestar-dev.bigteams.com/login/')
        .wait(2000)
        .get('#username').click().type('cholgerson@qcusd.org')
        .wait(2000)
        .get('#password').click().type('Carl1234!')
        .wait(2000)
})
    it('Should go to the Login Page and Login for the new User', () => {
      cy.get('label > .fa').click()
        .wait(2000)
        .get('.panel-body > .btn').click()
  })
})