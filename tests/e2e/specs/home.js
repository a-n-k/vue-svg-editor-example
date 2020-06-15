describe('home partition pages', function () {
	it('welcome', function () {
		cy.visit('/');
		cy.get('title').should('contain', 'SVG Editor');
		cy.get('div.page').get('div.welcome h2')
				.should('contain', 'Welcome');
		cy.get('div.info a')
				.should('contain', 'Projects')
				.click();
		cy.url().should('include', '/projects')
	});

	it('not-found', function () {
		cy.visit('/any');
		cy.get('div.not-found h3').should('contain', 'not found');
	});
});