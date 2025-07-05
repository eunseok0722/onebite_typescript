/* 
keyof 연산자
*/

// 객체 타입에 사용하는 연산자

interface Person {
  name: string;
  age: number;
}

// 기존 방식 : 매번 매서드의 타입을 유니온 연산자로 넣어줘야 함
// function getPropertyKey(person: Person, key: "name" | "age") {
//   return person[key];
// }

// keyof 연산자 사용 : 새로운 프로퍼티 연산자를 유니온 타입으로 처리해준다.
// 타입에만 사용 가능
// function getPropertyKey(person: Person, key: keyof Person) {
//   return person[key];
// }

const person: Person = {
  name: "이정환",
  age: 27,
};

getPropertyKey(person, "name"); // 이정환


// person 객체의 타입에서 프로퍼티 타입을 추론해서 Person1 type에 유니온타입을 만들어준다. 
type Person1 = typeof person;
// person 객체에서 타입을 추출해서 (typeof) 유니온 타입을 만들어준다 (keyof)
function getPropertyKey(person: Person, key: keyof typeof person) {
  return person[key];
}