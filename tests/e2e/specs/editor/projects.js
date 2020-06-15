describe('editor partition - projects page', function () {
	before(function () {
		cy.visit('/');
		cy.clearDB();
		cy.goTo('/projects');
	});

	it('should has empty list of projects', function () {
		cy.get('div.list')
				.get('div.empty p')
				.should('contain', 'not exists');
	});

	it('should has toolbar', function () {
		cy.get('div.toolbar')
				.get('form')
				.get('input[type=text]')
				.get('button[type=submit]')
				.should('contain', 'New Project');
	});

	it('should can create new project', function () {
		const newProjectName = 'This is test for creating new project'
		cy.get('div.toolbar input').type(newProjectName);
		cy.get('div.toolbar button').click();
		cy.get('div.list div.items')
				.get('div.item div.value')
				.should('contain', newProjectName);
		cy.get('input.ipt')
				.should('have.value', '');
	});

	it('should has link to project', function () {
		cy.get('div.list')
				.get('div.rr-link')
				.should(function (links) {
					expect(links).to.have.length.at.least(1);
				})
				.click({multiple: true, force: true});
		cy.url().should('include', '/project/');
	});
});
