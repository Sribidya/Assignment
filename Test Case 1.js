describe('login to Application', function(){
	it('successfully loads the Application',function(){
		cy.visit('/')
		cy.get('a.login').click()
		cy.wait(5)
		})
	// Enter details and click submit
	it('enter Credentials',function(){
		cy.get('input#email').type('test@test.com')
		cy.wait(5)
		cy.get('input#passwd').type('ThisIs@T3st')
		cy.get('#SubmitLogin').click()
		cy.wait(5)

	})
	//Print in log if authentication failed
	it('check error',function(){
		//Assertions
		cy.get('#center_column > :nth-child(2) > :nth-child(1)').should('contain','There is 1 error') 
		cy.get('ol > li').should('contain','Authentication failed.') 
		cy.get('.alert-link').should('contain','« Back') 
		cy.wait(15)
	// checks if an error block appears with content
        cy.get('#center_column > :nth-child(2) > :nth-child(1)').then(($alert) =>{
		if(( $alert.get(0).textContent) == 'There is 1 error')
			{
				cy.get('#center_column > :nth-child(2) > :nth-child(1)').should('contain','There is 1 error')  
		   		cy.get('ol > li').should('contain','Authentication failed.') 
		        cy.get('.alert-link').should('contain','« Back')
        		cy.log('Authentication Failed')
        	}
        	else
        		{
        			cy.log('User is able to login')
        		}
		})
    })
})

