const roomNameList = ["Balatoni Álom", "Ébredő Hajnal", "Reneszánsz Csoda", "Keleti Lankák"];
const roomTypeList = ["EGYAGYASSZOBA", "KETAGYASSZOBA", "KETAGYASTWINSZOBA", "HAROMAGYASSZOBA", "NEGYAGYASSZOBA", "TOBBAGYASSZOBA", "STUDIO", "APARTMAN", "LAKOSZTALY"];
//Min and max value for the booking (number of beds, nights, roomarea)
const min = 0; 
const max = 99; 

const randomIndexRoomName = Math.floor(Math.random() * roomNameList.length);
const randomIndexRoomType = Math.floor(Math.random() * roomTypeList.length);
const numberOfBeds = Math.floor(Math.random() * (max - min + 1)) + min;
const roomarea = Math.floor(Math.random() * (max - min + 1)) + min;
const pricePerNight = (Math.floor(Math.random() * (max - min + 1)) + min) * 10;

const roomName = roomNameList[randomIndexRoomName];
const roomType = roomTypeList[randomIndexRoomType];
const description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s";
const imgURL = 'https://www.keparuhaz.hu/images/tmp/700/products/87/5387.jpg';

// Log in
beforeEach(() => {
  cy.visit('http://hotel-v3.progmasters.hu');
  cy.get('a.nav-link').eq(1).click();
  cy.get('#email').type('ribonot606@anawalls.com');
  cy.get('#password').type('1234');
  cy.get('.btn-success').click();
});

describe('AddNewHotelRoom', () => {
  it('passes', () => {
    // New room button 
    cy.get('.btn.btn-primary.btn-lg.btn-block')
      .click();
    cy.get('h2')
      .should('have.text', 'Szoba adatlap');
    
    // Data of the room
    cy.get('#roomName')
      .type(roomName);
    
    cy.get('#roomType')
      .select(roomType)
      .should('have.value', roomType)
      .should('not.be.disabled');
    
    cy.get('#numberOfBeds')
      .type(numberOfBeds);
    
    cy.get('#roomArea')
      .type(roomarea);
    
    cy.get('#pricePerNight')
      .type(pricePerNight);
    
    cy.get('#description')
      .type(description);
    
    cy.get('#roomImageUrl')
      .type(imgURL);
    
    cy.get('.form-group [type="checkbox"]').then((checkboxes) => {
      // List of the features Checkbox
      const numCheckboxes = checkboxes.length;
  
      // Select 2 random index
      const randomIndex1 = Math.floor(Math.random() * numCheckboxes);
      let randomIndex2;
      do {
        randomIndex2 = Math.floor(Math.random() * numCheckboxes);
      } while (randomIndex2 === randomIndex1);
  
      // Selection of the 2 random checkbox
      cy.get('.form-group [type="checkbox"]').eq(randomIndex1).check();
      cy.get('.form-group [type="checkbox"]').eq(randomIndex2).check();
    });
    
    // Add room submit
    cy.get('.btn.btn-primary.my-buttons')
      .should('not.be.disabled')
      .click();
    
    // Checking of the new room
    cy.get('.card-title')
      .should('contain', roomName);

      cy.get('h6.card-subtitle.mb-2').invoke('text').then((text) => {
        // Checking of the text
        expect(text).to.include(`Ágyak (férőhelyek) száma: ${numberOfBeds}`);
        expect(text).to.include(`Szobaterület: ${roomarea} m2`);
        expect(text).to.include(`Ár/éj : ${pricePerNight} Ft`);
      });

    // Delete room
    cy.get('.btn.btn-danger.btn-sm').each((button) => {
    cy.wrap(button).click({ force: true });
      
    // Click on the "OK" button in the pop-up window
    cy.contains('button.btn.btn-primary', 'Oké').click({ force: true });
      });
      
    
  });
   //Todo:
/*
    // Errorhandling
  it("iMG URL error", () => {
    cy.on("fail", (err, runnable) => {
      cy.log(err.message);
      return false;
    });

    cy.get('img').eq(2)
      .should('have.attr', 'src', imgURL);
  });
  */
});







































