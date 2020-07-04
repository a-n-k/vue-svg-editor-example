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
		cy.get('div.list')
				.get('div.empty-msg')
				.get('p').eq(0)
				.should('contain', 'Shapes are not exists');
		cy.get('div.toolbar select').select('0');
		cy.get('div.list div.item').should('have.length', 1);
	});
});