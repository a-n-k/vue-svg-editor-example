describe('editor partition - project page - layout', function () {
	it('should has not project', function () {
		cy.visit('/project/any');
		cy.get('div.empty-msg')
				.children('p').should('have.length', 2)
				.eq(0).should('contain', 'not exists');
		cy.get('div.empty-msg a').click();
		cy.url().should('include', '/projects');
	});

	it('should has main elements', function () {
		cy.createProject();
		cy.get('div.project');
		cy.get('div.header').get('span.icon.trash');
		cy.get('div.header a').should('have.length', 2);
		cy.get('div.header').get('span.name').should('contain', 'new project');
		cy.get('div.toolbar').get('select');
		cy.get('div.list');
		cy.get('div.preview').get('div.svg-holder');
	});
});