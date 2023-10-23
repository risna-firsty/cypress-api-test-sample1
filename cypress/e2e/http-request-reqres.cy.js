/// <reference types="cypress" />
  
describe("HTTP requests - REQRES", () => {

    afterEach(() => {
        cy.wait(1000)
    });
    it("[POST] - Login", () => {
      const requestBody = {
        email: "eve.holt@reqres.in",
        password : "cityslicka"
      };
  
      cy.request(
        {
          method: 'POST',
          url: 'https://reqres.in/api/login',
          body: requestBody
        })
        .then( (response) =>{
          expect(response.status).to.eq(200)
        })
    });

    it('[GET] - Get detail user', () => {
      cy.request('GET', 'https://reqres.in/api/users/3')
      .its('status')
      .should('equal', 200)
    });

    it('[DELETE] - Delete user', () => {
      cy.request('DELETE', 'https://reqres.in/api/users/2')
      .its('status')
      .should('equal', 204)
    });

    it('[PUT] - Update an employee record', () => {
      const requestBody = {
        name: Math.random().toString(5).substring(2),
        job: "QA Engineer"
      };

      cy.request({
        method: 'PUT',
        url: 'https://reqres.in/api/users/5',
        body: requestBody
      })
      .then( (response) =>{
        expect(response.status).to.eq(200)
        expect(response.body.name).to.eq(requestBody.name)
        expect(response.body.job).to.eq("QA Engineer")
      })
    });
  });
  