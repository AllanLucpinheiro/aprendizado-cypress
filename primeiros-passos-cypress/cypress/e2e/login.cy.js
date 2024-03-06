describe('Orange HRM tests', () => {
    it('Login-sucess', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.get("[name='username']").type('Admin')
      cy.get("[name='password']").type('admin123')
      cy.get("[type='submit']").click()
      cy.location('pathname').should('equal','/web/index.php/dashboard/index')
      cy.get('.oxd-topbar-header-breadcrumb-module').contains('Dashboard')
  
    })
  
    it('Login - Fail',()=>{
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.get("[name='username']").type('admin')
      cy.get("[name='password']").type('admin')
      cy.get("[type='submit']").click()
      cy.get("[role='alert']")
  
    })
  })
  
  /*
  it.skip - pula o teste
  cy.visit - visita a pagina no qual vai ser testada
  cy.get().type - preenche o campo
  cy.get().click - clica no botao
  cy.get - verifica o campo
  cy.get().contains - verifica se o campo contem tal conteudo
  
  */