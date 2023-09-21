describe ('Test cases for the challenge', ()=>{

    it('Should render the app without errors', () => {
        cy.visit('http://localhost:3000'); 
         cy.get('body').should('be.visible');
      });

        it('Should have an empty "notes" state initially', () => {
        cy.visit('http://localhost:3000'); 
         cy.get('.list-container')
        .should('have.text', ''); // Valida que el texto sea vacio
    
        cy.get('.list-container .note-container').should('not.exist');

        });

        it('Should add a note to the "notes" state and render it', () => {
            cy.visit('http://localhost:3000'); 
        
            cy.get('#text-input').type('Nueva nota');
             cy.get('button[type="submit"]').click();
        
            cy.get('.list-container').contains('Nueva nota'); // Creates a new note 
             cy.get('.list-container .note-container').should('exist'); // validate the class note container


            });
    
            it('Should delete a note from the "notes" state and remove it from the UI', () => {
                cy.visit('http://localhost:3000'); 
            
                 cy.get('input').type('Note to Delete'); // create the note that will be deleted 
                  cy.get('button[type="submit"]').click();
                
                 cy.get('input').type('Nueva nota');
                  cy.get('button[type="submit"]').click();
     
                 cy.get('.list-container').contains('Note to Delete');

                 cy.get('.list-container .note-container')
                  .contains('Note to Delete') 
                 .parent() 
                 .find('button:contains("Delete")') 
                 .click(); 
                           
            
               });

            


  })