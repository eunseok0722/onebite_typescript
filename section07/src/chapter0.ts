// 제네릭 : 포괄적인
// 함수의 인수의 타입에 따라서 타입을 변화시켜줌


// 제네릭 함수 : 모든 탐수에 두루 활용할 수 있는 함수
// T : 타입 변수, 함수를 호출할 때 매개변수의 타입에 따라서 변화하게 됨
function func<T>(value: T): T {
    return value;
}

let num = func(10);
// num.toUpperCase();
// 원래는 타입 좁히기를 해야지만 숫자 메서드를 사용할 수 있음
if (typeof num == "number") num.toFixed();

let bool = func(true);

let str = func("string");

// 명시적으로 타입을 정할 수도 있다.

// number 배열 타입으로 추론 될 것
// 튜플 타입으로 취급 되도록 하는 법
// 타입 단언으로 설정하기
// let arr = func([1, 2, 3] as [number, number, number]) 

// 제네릭 함수를 호출할 때 타입을 선언해주기
let arr = func<[number, number, number]>([1, 2, 3]) 