import ConfirmationPage from "./ConfirmationPage"

class Cartpage {
    sumOfProduct() {
        let sum = 0
        return cy.get('tr td:nth-child(4) strong')
            .each($e1 => {
                const amount = Number($e1.text().split(" ")[1].trim())
                sum = sum + amount
            }).then(function () {
                return sum
                //expect(sum).to.be.lessThan(200000)
            })
    }

    checkoutItems() {
        cy.contains('button', 'Checkout').click()
        return new ConfirmationPage()
    }



}
export default Cartpage;
