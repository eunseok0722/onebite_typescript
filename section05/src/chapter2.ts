/* 
인터페이스 선언 합침
*/

// 동일 이름 오류 발생
// type Person = {
//   name: string;
// }

// type Person = {
//   age: number;
// }

// 인터페이스 선언 합침
interface Person {
  name: string;
}

interface Person {
  // name: number; // 같은 프로퍼티의 타입이 다르면 오류 발생 -> 동일한 타입만 가능
  age: number;
}

const person: Person = {
  name: "",
  age: 27,
};

// 라이브러리의 모듈 보강을 위해 사용

/* 
모듈 보강
*/

interface Lib {
  a: number;
  b: number;
}

// 모듈 보강
interface Lib {
  c: string;
}

const lib: Lib = {
  a: 1,
  b: 2,
  c: "hello"
}