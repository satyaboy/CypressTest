import { Given,When,Then } from "@badeball/cypress-cucumber-preprocessor" 
import Homepage from "../../../support/PageObjects/HomePage"
const homepage = new Homepage()


Given('I am on Ecommerce Page',function()
{ 
    homepage.goTo("https://rahulshettyacademy.com/loginpagePractise/")
})

When('I Login to the Application',function()
{
    this.productpage = homepage.login(this.data.username, this.data.password)
    this.productpage.pageValidation()
    this.productpage.getCardCount().should('have.length', 4)
})

When('I add items to Cart and checkout',function()
    {
        this.productpage.selectProduct(this.data.productname)
        this.productpage.selectFirstProduct()
        this.cartpage = this.productpage.goToCart()
    })

When('validation the total price limit',function()
    {
       this.cartpage.sumOfProduct().then(function (sum) {
        expect(sum).to.be.lessThan(200000)
    })
})

Then('select the country submit and verify Thankyou',function()
    {
        const confirmationpage = this.cartpage.checkoutItems()
        confirmationpage.submitFromDetails()
        confirmationpage.getAlertMessage().should('contain', 'Success')

})