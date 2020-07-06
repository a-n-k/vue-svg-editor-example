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

	function btnDelShape() {
		return cy.get('div.toolbar button:has(> span.icon.trash)');
	}

	it('should be able to delete shape', function () {
		btnDelShape().should('be.disabled');
		cy.createShape();
		btnDelShape().should('not.be.disabled');
		btnDelShape().click();
		btnDelShape().should('be.disabled');
	});

	function btnResetSize() {
		return cy.get('div.toolbar button:has(> span.icon.reset)');
	}

	function iptWidth() {
		return cy.get('div.toolbar input.ipt[name=width]');
	}

	function iptHeight() {
		return cy.get('div.toolbar input.ipt[name=height]');
	}

	const initWidth = '240', initHeight = '240',
			newWidth = '360', newHeight = '100';

	it('should be able to change canvas size', function () {
		btnResetSize().should('be.disabled');
		iptWidth().should('has.value', initWidth);
		iptHeight().should('has.value', initHeight);
		iptWidth().type(newWidth);
		iptHeight().type(newHeight);
		btnResetSize().should('not.be.disabled').click();
		btnResetSize().should('be.disabled');
	});
});