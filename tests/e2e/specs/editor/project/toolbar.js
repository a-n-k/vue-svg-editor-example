describe('editor partition - project page - toolbar', function () {
	beforeEach(function () {
		cy.createProject();
	});

	it('should be able to delete project', function () {
		cy.get('div.header span.icon.trash').click();
		cy.url().should('include', '/projects');
		cy.get('div.empty-msg')
				.children('p').should('have.length', 1)
				.eq(0).should('contain', 'not exists');
	});

	it('should be able to create new shape', function () {
		cy.createShape();
		cy.get('div.list div.item').should('have.length', 1);
	});
});