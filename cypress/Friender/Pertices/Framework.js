describe("Checking Framework",function()
{
    before(function()
    {
     // runs once before all test in the block 
      cy.fixture('example').then(function(data)
      {
        this.data=data
      })
    })

    it("My Framework",function()
    {
         cy.visit("https://rahulshettyacademy.com/angularpractice/")
         cy.get('input[name="name"]:nth-child(2)').type(this.data.name)
         cy.get('select').select(this.data.gender)
         cy.get('input[name="name"]:nth-child(1)').should('have.value',this.data.name)

         cy.get('input[name="name"]:nth-child(2)').should('have.attr','minlength','2')
         cy.get('#inlineRadio3').should('be.disabled')

         cy.get(':nth-child(2) > .nav-link').click()
         // Intilize the deytails in command.js
         cy.SelectProduct('Blackberry')
    })
})  
