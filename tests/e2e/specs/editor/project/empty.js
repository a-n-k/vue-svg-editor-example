describe('editor partition - project page - empty', function () {
	it('should has not project', function () {
		cy.visit('/project/any');
		cy.get('div.empty')
				.children('p').should('have.length', 2)
				.eq(0).should('contain', 'not exists');
		cy.get('div.empty a').click();
		cy.url().should('include', '/projects');
	});
});
