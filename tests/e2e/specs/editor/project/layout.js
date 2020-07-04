describe('editor partition - project page - layout', function () {
	before(function () {
		cy.createProject();
	});

	it('should has main elements', function () {
		cy.get('div.project');
		cy.get('div.header').get('span.icon.trash');
		cy.get('div.header a').should('have.length', 2);
		cy.get('div.header').get('span.name').should('contain', 'new project');
		cy.get('div.toolbar').get('select');
		cy.get('div.list');
	});
});