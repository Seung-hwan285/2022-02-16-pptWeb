describe('홈 화면 테스트',()=> {
    beforeEach(() => {
        cy.visit('http://localhost:63342/sister_web/public/index.html')
    });

    //
    // it('슬라이더 테스트',()=>{
    //     let counter=1;
    //
    //     for(let i=0; i<3; i++){
    //         cy.get('.manual-button')
    //             .eq(i)
    //             .click()
    //             .then(($el)=>{
    //
    //                 cy.wrap($el).should('have.class','line');
    //             });
    //
    //     }
    // });
    //
    //
    // it('nav 로고 이동되는지 테스트',()=>{
    //
    //
    //     const $navBtnLog = cy.get('.nav-log').contains('a');
    //
    //     // 로고
    //     $navBtnLog.click();
    //
    //     cy.get('.nav-log').contains('a')
    //         // a태그에 href 속성을 가져온다.
    //         .invoke('attr','href')
    //         .should('equal','index.html');
    //     //
    // });

    it('nav 메뉴바 버튼 페이지 이동 테스트',()=>{


        const a=cy.get('.nav-menu').contains('.list');
        console.log(a);
    });
});