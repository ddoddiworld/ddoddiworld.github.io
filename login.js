window.onload = function(){
    // login 
    // var userID = document.getElementById('id');
    // var userPW = document.getElementById('pw');
    // var logIn = document.getElementById('logIn');

    // // join
    // var checkID = document.getElementById('checkId');
    // var checkPW = document.getElementById('checkPw');
    // var joIn = document.getElementById('join');


    // var ID = userID.value;
    // var PW = userPW.value;

    // logIn.addEventListener('click', letsGo);
    
    // function letsGo(){
    //     if(localStorage.getItem(ID) == PW){
    //         alert('SUCCESS');
    //     }else{
    //         alert('WRONG');
    //     }
    // }

    // var closeBtn = document.getElementById('close_btn');
    // closeBtn.addEventListener('click', close);

    // function close(e){
    //     var modal = document.getElementsByClassName('joinBox');

    //     console.log('sad')
    //     modal.classList.add('active');
    // }

    // login
    var enter = document.getElementById('enter');
    enter.addEventListener('click', letsGo);

    function letsGo() {
        var name = document.getElementById('name');
        var userName = document.getElementById('userName').value; //사용자 이름 값
        var mainPage = "./main.html"; //메인 페이지로 이동

        if(!userName){
            alert('Please let me know your name :)');
        } else{
            localStorage.setItem("userName",userName);
            location.href= mainPage;
        } 
        
        
    }
}