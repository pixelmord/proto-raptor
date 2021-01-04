import { createYield } from 'typescript';

// eslint-disable @typescript-eslint/no-var-requires
describe('HomePage', () => {
  before(() => {
    cy.visit('/');
  });
  it('has a h1 containing Blog', () => {
    cy.get('h1').contains('Blog');
  });
});
