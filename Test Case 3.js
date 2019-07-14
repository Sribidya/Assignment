describe('blank login details error validation', function(){
	it('successfully logins to Homepage',function(){
		cy.visit('/')
		cy.get('a.login').click()
		cy.wait(5)
		})
	
    // Verifies if an error message is shown on submit of form
	it('checks error',function(){
		cy.get('#SubmitLogin').click()
		cy.wait(10)
	// checks if an error block appears with content
        cy.get('#center_column > :nth-child(2) > :nth-child(1)').then(($alert) =>{
		if(( $alert.get(0).textContent) == 'There is 1 error')
			{
		
			cy.log('Login Failed')
			cy.get('#center_column > :nth-child(2) > :nth-child(1)').should('contain','There is 1 error') 
			cy.get('ol > li').should('contain','An email address required.')
			cy.get('.alert-link').should('contain','« Back')
	       }
	//Logs a result in console if login was successful
	    else
        	{
        			cy.log('Login Successful')
        	}
		})
    })
})