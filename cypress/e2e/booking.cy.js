///<reference types="cypress"/>


beforeEach(() => {
    cy.visit('http://hotel-v3.progmasters.hu');
    cy.get('a.nav-link').eq(1).click();
    cy.get('#email').type('hogap65094@zamaneta.com');
    cy.get('#password').type('1234');
    cy.get('.btn-success').click();
  });


describe('Booking', () => {
    it('passes', ()=> {
    cy.get('.btn-outline-primary')
    .click()
// Random oldalon, random hotel kiválasztása
    cy.get('li.page-item')
  .its('length')
  .then((numItems) => {
    const randomIndex = Math.floor(Math.random() * numItems);
    cy.get('li.page-item').eq(randomIndex).find('a.page-link').click();
  });
  cy.get('h4:not(.text-right)')
  .should('be.visible')
  .should('have.css', 'cursor', 'pointer')
  .its('length')
  .then((numItems) => {
    const randomIndex = Math.floor(Math.random() * numItems);
  cy.get('h4:not(.text-right)').eq(randomIndex).click();
  });
//Foglalás paraméterei
  cy.get('#numberOfGuests')
  .type('2')
  cy.get('.ng2-flatpickr-input')
  .click()
  cy.get('span[aria-label="December 23, 2023"]', { timeout: 10000 }) 
  .should('exist')
  .should('be.visible')
  .click({ multiple: true, force: true });
  cy.get('span[aria-label="December 28, 2023"]', { timeout: 10000 })
  .should('exist')
  .should('be.visible')
  .click({ multiple: true, force: true});
  cy.get('label[class=ng-star-inserted]')
  .eq(0).click()

  //Foglalás véglegesítése
  cy.get('.btn-warning').click()
  cy.get('[formcontrolname="aSZF"]').click()
  cy.get('.btn-primary').click()

// Foglalás ellenőrzése
  cy.get('h5:contains("Sikeres foglalás")')
  cy.get('.btn-primary').click()
  cy.get('#user-bookings').click()
  cy.get('button.btn.btn-primary.mr-4', { timeout: 10000 }).should('exist');
  cy.window().then(win => win.close());


    })
})