/// <reference types="Cypress" />

describe("Central de Atendimento ao Cliente TAT", function () {
  this.beforeEach(function () {
    cy.visit("./src/index.html");
  });

  it("verifica o título da aplicação", function () {
    cy.title().should("be.equal", "Central de Atendimento ao Cliente TAT");
  });

  it.only("preenche os campos obrigatórios e envia o formulário", function () {
    const longText =
      "Do mesmo modo, o surgimento do comércio virtual desafia a capacidade de equalização dos relacionamentos verticais entre as hierarquias.";
    cy.get("#firstName").type("Beto");
    cy.get("#lastName").type("Silva");
    cy.get("#email").type("williambeto@hotmail.com");
    cy.get("#open-text-area").type(longText, {
      delay: 0,
    });
    cy.get("button[type='submit']").click();
    cy.get(".success").should("be.visible");
  });
});
