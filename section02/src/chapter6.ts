// Any type

let anyVar: any = 10;
anyVar = "hello"; // error 

anyVar = true;
anyVar = {};
anyVar = ()=> {};
// anyVar.toUpperCase();  // 에러 발생하지 않음
// anyVar.toFixed();  // 에러 발생하지 않음

let num: number = 10;
// 다른 타입에 any 타입의 값을 지정할 수 있다.
num = anyVar;


// unKnown
let unknownVar: unknown;
unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

// 모든 값을 저장 가능
// 다른 타입에 unknown 타입의 값을 지정할 수 없다.
// num = unknownVar; // error
// 메서드 사용 불가 
// unknownVar.toUpperCase();
// unknown 타입의 값의 타입을 지정해줄 경우 사용가능
// = 타입 정제
if (typeof unknownVar === "number") {
    num = unknownVar;
}
