/* 
함수 오버로딩
- 함수를 매개변수의 개수나 타입에 따라 여러가지 버전으로 정의하는 방법
- 자바스크립트에서는 지원되지 않음, c언어, java 등의 프로그래밍 언어에서 가능
- 타입스크립트에서 지원 가능
*/

/* 
함수 오버로딩 예제
-> ver1. 매개변수 1개 -> 이 매개변수에 20을 곱한 값 출력
-> ver2. 매개변수 3개 -> 이 매개변수를 모두 더한 값 출력
*/

// 오버로드 시그니처 : 함수 오버로드를 위해 함수 시그니처를 여러개 정의하는 것
function func(a: number): void;
function func(a: number, b: number, c: number): void;

// 구현 시그니처: 실제 구현부
// 옵셔널 타입은 오버로드 시그니처에 정의된 매개변수의 개수와 타입에 맞는 함수만 호출 가능
function func(a: number, b?: number, c?: number) {
  if(typeof b === 'number' && typeof c === 'number') {
    console.log(a + b + c);
  } else {
    console.log(a * 20);
  }
}

// 실제 구현된 구현부의 매개변수와 상관 없이 오버로드 시그니처에 정의된 매개변수의 개수와 타입에 맞는 함수만 호출 가능
// func(); // 에러
func(1);
// func(1, 2); // 에러
func(1, 2, 3);


