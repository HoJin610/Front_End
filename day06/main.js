// 입력받을 내용 변수
let txt = "";

// 결과를 출력할 영역
let result = document.getElementById("result");

function btn(x){
    txt += x;
    result.innerHTML = txt;
}

function clean(){
    result.innerHTML = '0';
    txt = "";
}

function oper(){
    // eval() : 매개변수 안에 있는 문자열을 계산하여 출력
    result.innerHTML = eval(txt);
    txt = eval(txt);
}