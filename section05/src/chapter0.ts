/* 
인터페이스 

타입에 이름을 지어주는 또 다른 문법
+ 객체의 구조를 정의하는데 특화된 문법
(상속, 합침 등 특수한 기능 제공)

*/

interface Person {
  readonly name: string; // 읽기 전용
  age?: number; // 선택적 프로퍼티
  // sayHi: () => void; // 함수 표현식
  sayHi(): void; // 호출 시그니처
  sayHi(a: number, b: number): void; // 오버로드 시그니처
  // 오버로드 시그니처를 쓰려면 호출 시그니처를 써야한다.

  // 인터페이스에서는 유니온이나 인터섹션 타입을 사용할 수 없다.
}

// type Func = {
//   (): void; // 함수의 호출 시그니처
// }

// 유니온타입, 인터섹션 타입
type Type1 = number | string;
type Type2 = number & string;

const person: Person = {
  name: "이정환",
  age: 27,
  sayHi: () => {
    console.log("hi");
  },
};

// person.name = "홍길동"; // 읽기 전용 프로퍼티이므로 수정 불가

person.sayHi();
person.sayHi(1, 2);