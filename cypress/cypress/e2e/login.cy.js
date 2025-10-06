describe('Login', () => {
    it('Realizar login com sucesso', () => {
        // Arrange
        cy.visit('https://www.saucedemo.com');

        // Act
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.contains('Login').click();


        // Assert
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');

    })

    it('Realizar login com senha incorreta', () => {
        // Arrange
        cy.visit('https://www.saucedemo.com');
        
        // Act
        cy.get('[data-test="username"]').type('USUARIO INVALIDO');
        cy.get('[data-test="password"]').type('SENHA INVALIDA');
        cy.contains('Login').click();

        // Assert
       cy.get('[data-test="error"]').should('contain.text','Epic sadface: Username and password do not match any user in this service')
       cy.url().should('eq', 'https://www.saucedemo.com/');
    })

})

describe('Incluindo produtos no carrinho', () => {
    it('Adicionar qualquer produto ao carrinho', () => {
    // Arrange
    cy.visit('https://www.saucedemo.com');

    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.contains('Login').click();

    // Act
    cy.contains('button', 'Add to cart').click();

    // Assert
    cy.get('.shopping_cart_badge').should('have.text', '1');

    })

    it('Removendo um produto do carrinho', () => {
    // Arrange
    cy.visit('https://www.saucedemo.com');
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.contains('Login').click();
    cy.contains('button', 'Add to cart').click();
    

    // Act
    cy.contains('button', 'Remove').click();

    // Assert
    cy.get('.shopping_cart_badge').should('not.exist');
    })

    it('Adicionar mochila e camiseta ao carrinho', () => {
    // Arrange
    cy.visit('https://www.saucedemo.com');
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.contains('Login').click();

    // Act
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
    cy.get('.shopping_cart_badge').click();

    // Assert
    cy.get('[data-test="shopping-cart-link"]').click();
    cy.url().should('eq', 'https://www.saucedemo.com/cart.html');
    cy.get('.cart_item').should('have.length', 2);
    cy.get('.shopping_cart_badge')
    .invoke('text')
    .then((t) => {
        const n = Number(t.trim());
        expect(n).to.equal(2);
  });

})
})