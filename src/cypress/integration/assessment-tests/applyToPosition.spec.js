/// <reference types="cypress" />
const functions = require('../../../../helpers/randomEmailGenerator')

context('Tudip web test cases', () => {

	beforeEach(() => {
		cy.viewport(1920, 1080);
	});

	it('Visit Tudip website and apply to frontend developer position', () => {
		cy.visit('https://tudip.com/');
		cy.xpath('//*[@title="Apply Online"]').click({ force: true });
		cy.contains('Front End Developer').click();
		cy.xpath('(//input[@value="Apply for job"])[2]').click();
		cy.clearCookies();
		cy.clearLocalStorage();
		cy.visit('https://recruitment.tudip.com/#/careers');
		registerNewAccount();
	});
});

function registerNewAccount() {
	cy.xpath('//*[@placeholder="First Name"]').type('Test');
	cy.xpath('//*[@placeholder="Last Name"]').type('Test');
	cy.xpath('(//*[@placeholder="Email"])[2]').type(functions.email());
	cy.xpath('(//*[@placeholder="Date of Birth"])[2]').type('10101993');
	cy.get('select').select('Commerce');
	cy.xpath('//*[@placeholder="Contact Number"]').type('1234567890');
	cy.xpath('(//*[@type="password"])[2]').type('1234');
	cy.xpath('(//*[@type="submit"])[2]').click().then(() => {
		cy.url().should('eq', 'https://recruitment.tudip.com/#/getCandidate');
	});
};
