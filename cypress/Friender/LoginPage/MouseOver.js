describe('handling mouse over',function()
    {
        it('Mouse over handing',function()
            {
             cy.visit('https://rahulshettyacademy.com/AutomationPractice/') 
             
             cy.get('div.mouse-hover-content').invoke('show')
             cy.contains('Top').click()
             cy.url().should('include','top')


            })
    })