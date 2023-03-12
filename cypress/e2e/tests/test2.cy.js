
describe('Cypress Weekend Entry Task', () => {
    
    //Cypress._.times(10, (k) => {
    it('Kiwi.com Barcelona-El Prat (BCN) Airport to Ibiza E2E Test ${k + 1} / 10', () => {
        
        //stránka pre BCN letisko
        cy.visit('/')

        //accept cookies
        cy.get('#cookies_accept').click()

        // overenie, že všetky sekcie a mapa sa zobrazia na stránke
        cy.get('[data-test="TrendingDestinations"]').should('be.visible')
        cy.get('img[src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="]')
            .scrollIntoView()
            .should('be.visible', { timeout: 5000, }, `Map was not visible within 5s`)

        // overenie, že v search form je origin správne nastavený na Barcelona BCN
        cy.get('[data-test="PlacePickerInputPlace"]')
            .first()
            .should('contain', 'Barcelona BCN') 

        // overenie, že H1 element má správny text “Barcelona–El Prat (BCN)”
        cy.get('h1')
            .should('have.text', 'Barcelona–El Prat (BCN)')
            
        // kliknutie na náhodnú picture card
        cy.get('[data-test="PictureCard"]')
            .eq(Math.floor(Math.random() * 8))
            .click()
            
       
        // overenie, že sme presmerovaní na search/results stránku a so správne vyplneným search form
        cy.intercept('POST', '/featureName=SearchReturnItinerariesQuery/').as('search')
        cy.url().should('include', '/search/results')
        // cy.wait('@search')
		//     .its('response.statusCode')
		//     .should('eq', 200)
        cy.get('[data-test="PlacePickerInputPlace"]')
            .eq(1)
            //.should('contain', 'Ibiza') 

        // pridanie príručnej batožiny do filtrov
        cy.get('[type="primary"]')
            .eq(1)
            .click()

        // overenie, že sa načítajú nové výsledky po pridaní príručnej batožiny
        cy.get('[data-test="ResultCardBadge-CabinBags"]').first().should('be.visible');

        // // kliknutie na tlačidlo "Select" a overenie, že sme presmerovaní na stránku s rezervačným formulárom
        cy.get('[data-test="BookingButton"]').first().click()
        cy.get('[data-test="MagicLogin-GuestTextLink"]').click()
        
        cy.url().should('include', '/booking')

    })
    //})

   
   
})