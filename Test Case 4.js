describe('registration', function(){
	it('successfully loads',function(){
		cy.visit('https://marksandspicy.com/')
		cy.get('a.login').click()
		cy.wait(10)
})
	// User details are filled
	it('create account',function(){
		cy.get('button#SubmitCreate').should('be.visible')
		cy.get('button#SubmitCreate',{ timeout: 10000 }).click({ force: true })
		cy.get('input#email').type('test@test.com')
		cy.get('input#password').type('ThisIs@T3st')
		cy.get('input#password2').type('ThisIs@T3st')
		cy.get('[type="radio"]').first().check({ force: true })
		cy.get('input#nom').type('Lastname')
		cy.get('input#prenom').type('Firstname')
		cy.get('input#dateJour').type('11')
		cy.get('input#dateMois').type('6')
		cy.get('input#dateAnnee').type('1989')
		cy.get('input#adresse').type('Jonas Reins Gate')
		cy.get('input#adresseDetail').type('Leil 39')
		cy.get('input#adresseDetail2').type('Hordaland')
		cy.get('input#codePostal').type('75000')
		cy.get('input#lieuDit').type('France')
		cy.get('input#telephonePortable').type('1234567890')
		cy.get('input#telephoneFixe').type('0987654321')
		cy.get('a#BtnCreationSubmit').click()

        // Verify if the zipcode populates city name
		cy.get('input#ville').then(($inputville) => {
		if (($inputville.get(0).value)=='Paris')
		   {
		   cy.log('City Populated')
		   }
		else

		  {
		   cy.log('City did not Populate')
		   cy.log('City Populated was : ' +$inputville.get(0).value)
		  }

		})
	})
})