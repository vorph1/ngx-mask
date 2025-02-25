import { CypressTestMaskComponent } from './utils/cypress-test-component.component';
import { signal } from '@angular/core';

describe('Test Date Hh:m0', () => {
    it('Test value Hh:m0', () => {
        cy.mount(CypressTestMaskComponent, {
            componentProperties: {
                mask: signal('Hh:m0'),
            },
        });

        cy.get('#masked').type('2020').should('have.value', '20:20');
        cy.get('#masked').clear();
        cy.get('#masked').type('77').should('have.value', '7:7');
        cy.get('#masked').clear();
        cy.get('#masked').type('777').should('have.value', '7:7');
        cy.get('#masked').clear();
        cy.get('#masked').type('1212').should('have.value', '12:12');
        cy.get('#masked').clear();
    });
    it('Mask Hh:m0 check cursor', () => {
        cy.mount(CypressTestMaskComponent, {
            componentProperties: {
                mask: signal('Hh:m0'),
            },
        });
        cy.get('#masked').type('77').should('have.prop', 'selectionStart', 3);
        cy.get('#masked').clear();
        cy.get('#masked').type('117').should('have.prop', 'selectionStart', 4);
    });

    it('Mask Hh:m0:s0 check cursor', () => {
        cy.mount(CypressTestMaskComponent, {
            componentProperties: {
                mask: signal('Hh:m0:s0'),
            },
        });
        cy.get('#masked').type('77').should('have.prop', 'selectionStart', 3);
        cy.get('#masked').clear();
        cy.get('#masked').type('1177').should('have.prop', 'selectionStart', 6);
    });

    it('Mask d0/m0/0000 check cursor', () => {
        cy.mount(CypressTestMaskComponent, {
            componentProperties: {
                mask: signal('d0/m0/0000'),
            },
        });
        cy.get('#masked')
            .type('77')
            .should('have.prop', 'selectionStart', 3)
            .should('have.value', '7/7');
        cy.get('#masked').clear();
        cy.get('#masked')
            .type('777')
            .should('have.prop', 'selectionStart', 5)
            .should('have.value', '7/7/7');
        cy.get('#masked').clear();
        cy.get('#masked')
            .type('1177')
            .should('have.prop', 'selectionStart', 6)
            .should('have.value', '11/7/7');
    });

    it('Mask M0/d0/0000 check cursor', () => {
        cy.mount(CypressTestMaskComponent, {
            componentProperties: {
                mask: signal('M0/d0/0000'),
            },
        });
        cy.get('#masked')
            .type('88')
            .should('have.prop', 'selectionStart', 3)
            .should('have.value', '8/8');
        cy.get('#masked').clear();
        cy.get('#masked')
            .type('777')
            .should('have.prop', 'selectionStart', 5)
            .should('have.value', '7/7/7');
        cy.get('#masked').clear();
        cy.get('#masked')
            .type('1177')
            .should('have.prop', 'selectionStart', 6)
            .should('have.value', '11/7/7');
    });

    it('Mask 0000/M0/d0 check cursor', () => {
        cy.mount(CypressTestMaskComponent, {
            componentProperties: {
                mask: signal('0000/M0/d0'),
            },
        });
        cy.get('#masked').type('999999').should('have.prop', 'selectionStart', 8);
        cy.get('#masked').clear();
        cy.get('#masked').type('3377118').should('have.prop', 'selectionStart', 9);
    });

    it('Mask Hh:m0:s0 check cursor', () => {
        cy.mount(CypressTestMaskComponent, {
            componentProperties: {
                mask: signal('Hh:m0:s0'),
            },
        });
        cy.get('#masked')
            .type('910')
            .should('have.prop', 'selectionStart', 4)
            .should('have.value', '9:10');
        cy.get('#masked').clear();
        cy.get('#masked')
            .type('91031')
            .should('have.prop', 'selectionStart', 7)
            .should('have.value', '9:10:31');
    });

    it('Mask (00) 90000-0000 check cursor and value', () => {
        cy.mount(CypressTestMaskComponent, {
            componentProperties: {
                mask: signal('(00) 00009-0000'),
            },
        });
        cy.get('#masked')
            .type('910')
            .should('have.prop', 'selectionStart', 6)
            .should('have.value', '(91) 0')
            .type('2')
            .should('have.prop', 'selectionStart', 7)
            .should('have.value', '(91) 02')
            .type('2')
            .should('have.prop', 'selectionStart', 8)
            .should('have.value', '(91) 022')
            .type('3')
            .should('have.prop', 'selectionStart', 9)
            .should('have.value', '(91) 0223')
            .type('2')
            .should('have.prop', 'selectionStart', 10)
            .should('have.value', '(91) 02232')
            .type('5')
            .should('have.prop', 'selectionStart', 12)
            .should('have.value', '(91) 02232-5')
            .type('5')
            .should('have.prop', 'selectionStart', 13)
            .should('have.value', '(91) 02232-55')
            .type('5')
            .should('have.prop', 'selectionStart', 14)
            .should('have.value', '(91) 02232-555')
            .type('2')
            .should('have.prop', 'selectionStart', 15)
            .should('have.value', '(91) 02232-5552');
    });

    it('Mask 099.09 check cursor and value', () => {
        cy.mount(CypressTestMaskComponent, {
            componentProperties: {
                mask: signal('099.09'),
            },
        });
        cy.get('#masked')
            .type('910')
            .should('have.prop', 'selectionStart', 3)
            .should('have.value', '910')
            .type('2')
            .should('have.value', '910.2')
            .should('have.prop', 'selectionStart', 5)
            .type('3')
            .should('have.value', '910.23')
            .should('have.prop', 'selectionStart', 6)
            .clear();
    });

    it('Mask d0/M0/0000 should set cursor on right position', () => {
        cy.mount(CypressTestMaskComponent, {
            componentProperties: {
                mask: signal('d0/M0/0000'),
                leadZeroDateTime: signal(true),
            },
        });
        cy.get('#masked')
            .type('33')
            .should('have.value', '03/03')
            .should('have.prop', 'selectionStart', 5);
    });

    it('Mask d0/M0/0000 should set cursor on right position', () => {
        cy.mount(CypressTestMaskComponent, {
            componentProperties: {
                mask: signal('d0/M0/0000'),
                leadZeroDateTime: signal(true),
            },
        });

        cy.get('#masked')
            .type('913')
            .should('have.value', '09/01/3')
            .should('have.prop', 'selectionStart', 7);
    });

    it('Mask should work with showMaskTyped 000/00000 with prefix', () => {
        cy.mount(CypressTestMaskComponent, {
            componentProperties: {
                mask: signal('000/00000'),
                prefix: signal('+38 '),
                showMaskTyped: signal(true),
            },
        });

        cy.get('#masked')
            .type('123')
            .should('have.value', '+38 123/_____')
            .should('have.prop', 'selectionStart', 7);
    });

    it('Mask should work with showMaskTyped 000/00000', () => {
        cy.mount(CypressTestMaskComponent, {
            componentProperties: {
                mask: signal('000/00000'),
                showMaskTyped: signal(false),
            },
        });

        cy.get('#masked')
            .type('123')
            .should('have.value', '123')
            .should('have.prop', 'selectionStart', 3);
    });

    it('dynamic mask after backspace should have right cursor position (000) 000-0000||+000000000000000', () => {
        cy.mount(CypressTestMaskComponent, {
            componentProperties: {
                mask: signal('(000) 000-0000||+000000000000000'),
            },
        });

        cy.get('#masked').type('11111111111').should('have.value', '+11111111111');
        cy.get('#masked')
            .type('{backspace}')
            .should('have.value', '(111) 111-1111')
            .should('have.prop', 'selectionStart', 14);
    });

    it('dynamic mask after backspace should have right cursor position', () => {
        cy.mount(CypressTestMaskComponent, {
            componentProperties: {
                mask: signal('(000) 000-0000||+000000000000000'),
            },
        });

        cy.get('#masked')
            .type('1234567890')

            .should('have.value', '(123) 456-7890')
            .type('{leftArrow}'.repeat(7))
            .type('{backspace}')
            .should('have.prop', 'selectionStart', 5);
    });

    it('dynamic mask after backspace should have right cursor position (00) 00000000||+00 (00) 00000000', () => {
        cy.mount(CypressTestMaskComponent, {
            componentProperties: {
                mask: signal('(00) 00000000||+00 (00) 00000000'),
            },
        });

        cy.get('#masked').type('111').should('have.value', '(11) 1');
        cy.get('#masked').type('{backspace}').should('have.prop', 'selectionStart', 4);
    });
});
