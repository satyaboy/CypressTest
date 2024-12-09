describe('Handling web tables', () => {
    it('Handeld the web tables', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        cy.get('tr td:nth-child(2)').each(($el, index, $list) => {
            const coursrtext = $el.text()
            if (coursrtext.includes("Python")) {
                cy.get("tr td:nth-child(2)").eq(index).next().then(function (price) {
                    const pricetext = price.text()
                    expect(pricetext).to.equal('25')
                })
            }
        })

    })
})