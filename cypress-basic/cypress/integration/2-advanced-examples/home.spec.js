describe('홈 화면 테스트',()=> {
    beforeEach(() => {
        cy.visit('http://localhost:63342/sister_web/public/index.html')
    });


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
    //     const $navBtnLog = cy.get('.nav-log').contains('a');
    //     // 로고
    //     $navBtnLog.click();
    //     $navBtnLog
    //         // a태그에 href 속성을 가져온다.
    //         .invoke('attr','href')
    //         .should('equal','index.html');
    //     //
    // });
    //
    //
    //
    // it('nav 메뉴바 버튼 페이지 이동 테스트',()=>{
    //
    //     // <a href ="index.html" 요소 가져옴>
    //     const $aboutBtn=cy.get('[data-js="about"]');
    //     $aboutBtn.click();
    //     // pahtname으로 활성된 현재 페이지 객체를 가져옴
    //     cy.location('pathname').should('eq','/sister_web/public/about.html');
    //
    //     cy.go('back');
    //
    //
    //     // <a href ="contact.html" 요소 가져옴>
    //     const $contactBtn=cy.get('[data-js="contact"]');
    //     $contactBtn.click();
    //     // pahtname으로 활성된 현재 페이지 객체를 가져옴
    //     cy.location('pathname').should('eq','/sister_web/public/contact.html');
    //     cy.go('back');
    //
    // });

    it('nav 메뉴바 스크롤 내리면 같이 내려오는지 테스트',()=>{

        cy.scrollTo('bottom');


        cy.get('header').should('have.class','sticky');


    });
});