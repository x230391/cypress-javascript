describe('Login', () => {
    it('Realizar login com sucesso', () => {
        // Arrange
        cy.visit('https://www.saucedemo.com/v1/');

        // Act
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.contains('LOGIN').click();


        // Assert
        cy.url().should('eq', 'https://www.saucedemo.com/v1/inventory.html');

    })

    it('Realizar login com senha incorreta', () => {
        // Arrange
        cy.visit('https://www.saucedemo.com/v1/');
        
        // Act
        cy.get('[data-test="username"]').type('USUARIO INVALIDO');
        cy.get('[data-test="password"]').type('SENHA INVALIDA');
        cy.contains('LOGIN').click();

        // Assert
       cy.get('[data-test="error"]').should('contain.text','Username and password do not match any user in this service')
       cy.url().should('eq', 'https://www.saucedemo.com/v1/');
    })

})

describe('Incluindo produtos no carrinho', () => {
    it('Adicionar um produto ao carrinho', () => {
    // Arrange
    cy.visit('https://www.saucedemo.com/v1/');

    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.contains('LOGIN').click();

    // Act
    cy.contains('button', 'ADD TO CART').click();

    // Assert
    cy.get('.shopping_cart_badge').should('have.text', '1');

    })

    it('Removendo um produto do carrinho', () => {
    // Arrange
    cy.visit('https://www.saucedemo.com/v1/');
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.contains('LOGIN').click();
    cy.contains('button', 'ADD TO CART').click();
    

    // Act
    cy.contains('button', 'REMOVE').click();

    // Assert
    cy.get('.shopping_cart_badge').should('not.exist');


    })
})
