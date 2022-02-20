describe('홈 화면 테스트',()=> {
    beforeEach(() => {
        cy.visit('http://localhost:63342/sister_web/index.html?_ijt=mroedfeou5g12d3dje0pb3ei64&_ij_reload=RELOAD_ON_SAVE')
    });


    it('슬라이더 테스트',()=>{
        let counter=1;

        for(let i=0; i<3; i++){
            cy.get('.manual-button')
                .eq(i)
                .click()
                .then(($el)=>{

                    cy.wrap($el).should('have.class','line');
                });

        }


    });
});