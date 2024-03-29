describe('Orange HRM tests', () => {
    const selectorList = {
      usernameField: "[name='username']",
      passwordField: "[name='password']",
      loginButton: "[type='submit']",
      sectionTitleTopBar:'.oxd-topbar-header-breadcrumb-module',
      wrongCredentialAlert:"[role='alert']"


    }
    it('Login-sucess', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.get(selectorList.usernameField).type('Admin')
      cy.get(selectorList.passwordField).type('admin123')
      cy.get(selectorList.loginButton).click()
      cy.location('pathname').should('equal','/web/index.php/dashboard/index')
      cy.get(selectorList.sectionTitleTopBar).contains('Dashboard')
  
    })
  
    it('Login - Fail',()=>{
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.get(selectorList.usernameField).type('admin')
      cy.get(selectorList.passwordField).type('admin')
      cy.get(selectorList.loginButton).click()
      cy.get(selectorList.wrongCredentialAlert)
  
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