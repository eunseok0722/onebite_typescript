// 함수 타입 표현식
// 타입 별칭을 통한 함수 타입 정의
type Operation = (a: number, b: number) => number;

// 여러개의 사칙연산 함수에 모두 타입을 정의해줘야하는 상황일 때
const add1: Operation = (a, b) => a + b;
// const add1: (a: number, b: number) => number = (a, b) => a + b; // 위와 같은 내용
const sub: Operation = (a, b) => a - b;
const nultiply: Operation = (a, b) => a * b;
const divide: Operation = (a, b) => a / b;
// 매개변수와 타입의 개수를 일치시켜야한다는 점 주의

// 호출 시그니처 (콜 시그니처)
type Operation2 = {
  // 함수 또한 객체이기 때문에 객체의 형태로 정의해 줌
  (a: number, b: number): number;
  // 하이브리드 타입
  name: string;
}
const add2: Operation2 = (a, b) => a + b;
const sub2: Operation2 = (a, b) => a - b;
const nultiply2: Operation2 = (a, b) => a * b;
const divide2: Operation2 = (a, b) => a / b;

// 객체로도, 함수로도 사용 가능
add2;
add2.name;