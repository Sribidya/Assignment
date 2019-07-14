describe('Tooltip Validation', function(){
	it('Successfully logins to Homepage',function(){
		cy.visit('/')
		cy.get('a.login').click()
		cy.wait(5)
	})
	
    //Enter login credentials
	it('Enter Credentials',function(){
		cy.get('input#email').type('test')
		cy.get('input#passwd').type('ThisIs@T3st')
	    cy.get('#SubmitLogin').click()
		cy.wait(25)
	//Assertions
        cy.get('input#email').should(($inputemail) => {
        	expect($inputemail.get(0).checkValidity()).to.equal(false);
            expect($inputemail.get(0).validationMessage).to.contain('Please include an \'@\' in the email address. \'test\' is missing an \'@\'.');
        })
    //Logic to evaluate Validation tooltip
        cy.get('input#email').then(($inputemail) => {
        	if(($inputemail.get(0).checkValidity())==false &&
            ($inputemail.get(0).validationMessage) ==('Please include an \'@\' in the email address. \'test\' is missing an \'@\'.'))
            {
        		cy.log('Email format  is incorrect')
        	}
        	else
        		{
        			cy.log('Email has correct format')
        		}
        })
     })//Validate css for email field
	it('Input validation',function(){
        cy.get('input#email.is_required.validate.account_input.form-control').then(($btn) =>{
        if($btn.has('css', 'border','1px solid rgb(241, 51, 64)') &&
           $btn.has('css','background', 'rgb(255, 241, 242) url("https://marksandspicy.com/themes/default-bootstrap/img/icon/form-error.png") no-repeat scroll 98% 5px / auto padding-box border-box'))
        	
        	{
        		cy.log('Email has correct Validation')
        	}
        	else
        		{
        			cy.log('Email has incorrect validation')
        		}

        })
        
    })       
    
})
    
