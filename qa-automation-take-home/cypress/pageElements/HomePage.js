class HomePage {
  visit() {
    cy.visit('http://localhost:3000');
  }

  getBody() {
    return cy.get('body');
  }

  getListContainer() {
    return cy.get('.list-container');
  }

  getInput() {
    return cy.get('#text-input')
  }

  getSubmitButton() {
    return cy.get('button[type="submit"]');
  }

  getNoteContainer() {
    return cy.get('.list-container .note-container');
  }


}

export default new HomePage();
