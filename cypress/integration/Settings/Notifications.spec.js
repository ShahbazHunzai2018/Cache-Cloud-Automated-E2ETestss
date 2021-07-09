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

  it('Should go to the notifications settings', () => {
      cy.visit('https://www.test.planeths.com/index.php?keyword=/user/settings/notifications')
        .get(':nth-child(2) > label > input').click()
        .wait(2000)
        .get('.buttons > .action-btn-group-btn').click()
        .wait(2000)

    })
     // cy.logout()
})

  