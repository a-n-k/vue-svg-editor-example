describe('editor partition - project page - list component', function () {
	before(function () {
		cy.createProject();
	});

	it('should has not shapes', function () {
		cy.get('div.list div.empty-msg')
				.children('p').should('have.length', 2)
				.eq(0).should('contain', 'not exists');
	});

	function item() {
		return cy.get('div.list div.item');
	}

	it('should has ability to select shape', function () {
		cy.createShape();
		item()
				.should('have.class', 'selected')
				.get('div.icon, div.label')
				.should('have.length', 2);
		item().click();
		item().should('not.have.class', 'selected');
		item().click();
		item().should('have.class', 'selected');
	});
});
