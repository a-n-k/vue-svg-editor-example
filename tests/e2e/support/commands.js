Cypress.Commands.add('app', function () {
	return cy.window().its('vueApp');
});

Cypress.Commands.add('clearDB', function () {
	return cy.app().then(function (app) {
		app.clearDB();
	});
});

Cypress.Commands.add('goTo', function (path) {
	return cy.app().then(function (app) {
		app.root.$router.push(path);
	});
});

Cypress.Commands.add('createProject', function () {
	const newProjectName = 'This is new project for test';
	cy.visit('/');
	cy.clearDB();
	cy.visit('/projects');
	cy.get('div.new-project input').type(newProjectName);
	cy.get('div.new-project button').click();
	cy.get('div.rr-link').click();
});
