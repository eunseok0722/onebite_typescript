// 대수 타입
// 여러개의 타입을 합성해서 새롭게 만들어낸 타입
// 합집합 타입 (Union 타입)
let a: string | number | boolean | undefined | null;

a = 1;
a = "hello";
a = true;

let arr: (number | string | boolean)[] = [1, "hello", true];

type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Union1 = Dog | Person;

// type dog에 포함
let union1: Union1 = {
  name: "",
  color: "",
};

// type person에 포함
let union2: Union1 = {
  name: "",
  language: "",
};

// dog & person 교집합에 속함
let union3: Union1 = {
  name: "",
  color: "",
  language: "",
};

// dog에도, person에도 속하지 않음
// let union4: Union1 = {
//     name: ""  // error 발생
// }

// 교집합 타입 - intersection type

// 교집합 타입은 두 타입의 속성을 모두 만족하는 타입
let veriable: number & string; // never 타입 : 두 타입 간 교집합이 없기 때문에 never type으로 출력

// 교집합 타입은 대부분 객체 타입에 사용
type Intersection = Dog & Person;

// 교집합 타입은 두 타입의 속성을 모두 만족하는 타입
let intersection1: Intersection = {
  name: "",
  color: "",
  language: "",
};
