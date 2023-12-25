//Szoba paraméterek változói:
const roomName = "Balatoni álom"
const roomType = "lakosztály"
const numberOfBeds = 2
const roomarea = 50
const pricePerNight = 1500
const description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
const imgURL = 'https://www.keparuhaz.hu/images/tmp/700/products/87/5387.jpg'




beforeEach(() => {
  cy.visit('http://hotel-v3.progmasters.hu');
  cy.get('a.nav-link').eq(1).click();
  cy.get('#email').type('ribonot606@anawalls.com');
  cy.get('#password').type('1234');
  cy.get('.btn-success').click();
});


describe('AddNewHotelRoom', () => {
    it('passes', () => {
      //Új szoba gomb kiválasztása
      cy.get('.btn.btn-primary.btn-lg.btn-block')
      .click()
      cy.get('h2')
      .should('have.text', 'Szoba adatlap');
      //Szoba adatai
      cy.get('#roomName')
      .type(roomName)
      cy.get('#roomType')
      .select(roomType)
      cy.get('#numberOfBeds')
      .type(numberOfBeds)
      cy.get('#roomArea')
      .type(roomarea)
      cy.get('#pricePerNight')
      .type(pricePerNight)
      cy.get('#description')
      .type(description)
      cy.get('#roomImageUrl')
      .type(imgURL)
      cy.get('.form-group [type="checkbox"]').then((checkboxes) => {
        // Az elemek számának meghatározása
        const numCheckboxes = checkboxes.length;
    
        // Két véletlenszerű index kiválasztása
        const randomIndex1 = Math.floor(Math.random() * numCheckboxes);
        let randomIndex2;
        do {
            randomIndex2 = Math.floor(Math.random() * numCheckboxes);
        } while (randomIndex2 === randomIndex1);
    
        // Két checkbox kiválasztása
        cy.get('.form-group [type="checkbox"]').eq(randomIndex1).check();
        cy.get('.form-group [type="checkbox"]').eq(randomIndex2).check();
    })
    //Szoba hozzáadás elküldése
      cy.get('.btn.btn-primary.my-buttons')
      .should('not.be.disabled')
      .click();
    //Szoba létrejöttének ellenőrzése
    cy.get('img').should('have.attr', 'src', imgURL)
    .should('have.css', 'opacity', '0')
    .should('have.css', 'position', 'absolute')
  
    /*
      //Szoba törlése
      cy.get('.btn.btn-danger.btn-sm')
      .click()
      cy.get('.btn.btn-primary').eq(2).click()

  */
    })
})
