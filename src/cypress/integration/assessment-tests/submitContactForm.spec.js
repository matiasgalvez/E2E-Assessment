/// <reference types="cypress" />
const functions = require('../../../../helpers/randomEmailGenerator')

context('Tudip web test cases', () => {

	beforeEach(() => {
		cy.viewport(1920, 1080);
	});

	it('Visit Tudip website and submit a contact form', () => {
		cy.visit('https://tudip.com/')
		cy.xpath('//*[@href="/contact"]').click().then(() => {
			cy.url().should('eq', 'https://tudip.com/contact/')
		});
		cy.xpath('//*[@name="first-name"]').type('Test');
		cy.xpath('//*[@name="last-name"]').type('Test');
		cy.xpath('//*[@name="your-email"]').type(functions.email());
		cy.xpath('//*[@name="phone"]').type('1234567890');
		cy.xpath('//*[@name="your-subject"]').type('Contact form automated test');
		cy.xpath('//*[@name="your-message"]').type('Test message for automated test');
		cy.clickRecaptcha();
		//Here the web page gives an image captcha to solve, which can't be automated 
		//without creating a test environment only captcha or disabling it in test environments,
		//so I include a 20 sec window to solve the captcha, after doing so the test will continue.
		cy.wait(20000);
		cy.xpath('//*[@id="form-submit"]').click();
		cy.url().should('eq', 'https://tudip.com/contact/#wpcf7-f5679-p5675-o2');
	});
});
