// 변수에 대입 될 수 있는 값을 미리 정해놓는다
// Literal Types
var TS07;
(function (TS07) {
    var 변수; // (홍길동 | 김유신 | 이순신) 중에서만 들어올 수 있음
    //변수 = 'str';
    변수 = '홍길동';
    function 가위바위보(str) {
    }
})(TS07 || (TS07 = {}));
가위바위보('가위');
//가위바위보('모름")
//console.log(TS07.변수)
