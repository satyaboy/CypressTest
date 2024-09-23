describe('Should handel child tab',()=>
    {
       it('Handling the child window',()=>
        {

            cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
            
            cy.get('#opentab').invoke('removeAttr','target').click()
           //cy.get('#opentab').click()

           cy.origin('https://www.qaclickacademy.com/',()=>
            {
                cy.get("#navbarSupportedContent a[href*='about']").click();
                cy.get('.mt-50 h2').should('contain','Welcome to QAClick Academy');
            })



        })
    })