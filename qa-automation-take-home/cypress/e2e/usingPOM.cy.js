import HomePage from '../pageElements/HomePage';

describe('Test cases for the challenge', () => {
  beforeEach(() => {
        HomePage.visit();
  });

   it('Validate render the app without errors', () => {
     HomePage.getBody().should('be.visible');
  });

    it('Validate that  have  empty notes state initially', () => {
        HomePage.getListContainer().should('have.text', ''); //validate the value es empty 
        HomePage.getNoteContainer().should('not.exist'); // the class Note container should not exits
    });

  it('Should add a note to the "notes" state and render it', () => {
        HomePage.getInput().type('Nueva nota');
     HomePage.getSubmitButton().click();
     HomePage.getListContainer().contains('Nueva nota').should('exist'); // validate the note is created in the container
    HomePage.getNoteContainer().should('exist'); //Validate class note container exits
  });

     it('Should delete a note from the "notes" state and remove it from the UI', () => {
     HomePage.getInput().type('Borrar esta nota'); // create note to delete
     HomePage.getSubmitButton().click();
    HomePage.getInput().type('Nueva nota'); //create another note
     HomePage.getSubmitButton().click();

    HomePage.getNoteContainer().contains('Borrar esta nota').should('exist');

    HomePage.getNoteContainer()
    .contains('Borrar esta nota')
     .parent()
     .find('button:contains("Delete")')
    .click();

     HomePage.getListContainer().contains('Note to Delete').should('not.exist');
  });
});
