describe('Handel child window',function()
{
    it('Handling Child Window',function()
    {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#opentab').then(function(el)
        {
            const url=el.prop('href')
            cy.visit(url)
            cy.origin(url,function()
            {
                cy.get("div.sub-menu-bar a[href*='about']").click()
            })
            
        })
    })
})