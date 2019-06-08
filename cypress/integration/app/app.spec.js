/// <reference types="Cypress" />

describe('Processes App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    });

    const clickOnMenu = () => {
        cy.get('[data-cy=actions-menu-button]')
            .first()
            .click();
    };

    const clickOnAutoAssign = () => {
        clickOnMenu();
        cy.contains('Auto Assign').click();
    };

    it('increments and decrements workers when the relevant button is clicked', () => {
        cy.get('[data-cy=active-workers]')
            .first()
            .invoke('text')
            .then(text => {
                const count = parseInt(text.split('/')[0], 10);
                cy.get('[data-cy=plus-worker-button]')
                    .first()
                    .click();
                cy.contains(`${count + 1}/25`);
                cy.get('[data-cy=minus-worker-button]')
                    .first()
                    .click();
                cy.contains(`${count}/25`);
            });
    });

    it('marks the task as Assigned when there are people assigned to it, and Unassigned when not', () => {
        cy.get('[data-cy=plus-worker-button]')
            .eq(2)
            .click();

        cy.get('[data-cy=status-bar]')
            .eq(1)
            .contains('Assigned');

        cy.get('[data-cy=minus-worker-button]')
            .eq(2)
            .click();

        cy.get('[data-cy=status-bar]')
            .eq(1)
            .contains('Unassigned');
    });

    it('shows a drop down menu when the overflow menu is clicked', () => {
        clickOnMenu();

        cy.get('[data-cy=actions-menu]')
            .should('contain', 'Auto Assign')
            .should('contain', 'Select Workers');
    });

    it('should show a priority selector when Auto Assign is clicked, and there are 3 stars visible', () => {
        clickOnAutoAssign();
        cy.contains('Set Priority')
            .parent()
            .find('[data-cy=star]')
            .should('have.length', 3);
    });

    it('sets the workers to 5, 10 and 15 for each star', () => {
        clickOnAutoAssign();
        cy.get('[data-cy=star-1]').click();

        cy.contains('5/25');

        cy.get('[data-cy=star-2]').click();

        cy.contains('10/25');

        cy.get('[data-cy=star-3]').click();

        cy.contains('15/25');
    });
});
