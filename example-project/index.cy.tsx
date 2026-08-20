describe("cypress-ct-octane-js", () => {
  it("should mount and render octane component", () => {
    cy.mount(<div>It works!</div>);
    cy.contains("It works!").should("exist");
  });
});
