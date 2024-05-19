// . ts : 타입스크립트 파일
// . tax : jsx용 타입스크립트 파일
// npm. install - g typescript (nodejs가 먼저 설치되어있어야함)
// tsconfig.json 파일을 생성하고 아래와 같이 입력
/*
{
    "copilerOptions" : {
        "target" : "ES5" .
        "modal": "Commonjs"
    }
}

*/
// tsc -w로 실행 (.js 파일로 변환)
// index.ts -> index.js로 생성
// 자바스크립트에 type 검사를 강화한 버전
var myName = '홍길동';
myName = '유관순';
//myName = 33;      // 자료형이 달라서 에러 (타입스크립트)
// string, number, booleam, null, undefined, [], {}, bigint
var 이름 = '사과';
var 숫자 = 123.3;
var 숫자배열 = [1, 2, 3]; // 숫자로만 이루어진 배열
var 문자열배열 = ['a', 'b', 'c']; // 뮨자열로만 이루어진 배열
var 객체 = { 이름: "김유신", 나이: 33 }; //객체의 타입
var 오브젝트 = {
    _name: '이름',
    _age: 33,
    _adilt: true
};
