describe('Login', () => {
    beforeEach(() => {
      // should go to the Login URL on Bigteams Shedule Star 
      cy.visit('https://schedulestar-dev.bigteams.com/login/')
        .wait(2000)
        .get('#username').click().type('bedrock@bigteams.com')
        .wait(2000)
        .get('#password').click().type('Bedrock123')
        .wait(2000)
        // .get('#password').click().type('Bedrock123')
        // .wait(2000)
        // .get('username').click().type('there is something')
        // .wait(2000)

})
    it('Should go to the Login Page and Login for the new User', () => {
      cy.get('label > .fa').click()
        .wait(2000)
        .get('.panel-body > .btn').click()
        .wait(2000)
        .get('littleCalendar > div > div > table > tbody > tr:nth-child(5) > td.fc-day.fc-thu.fc-widget-content.fc-today.fc-state-highlight.selectedDay > div > div.fc-day-number')
        .wait(2000)
  })
})