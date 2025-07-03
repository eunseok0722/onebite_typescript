// 타입 좁히기
// 조건문 등을 이용해 넓은 타입에서 좁은 타입으로 타입을 상황에 따라 좁히는 방법

type Person = {
  name: string;
  age: number;
}

// value => number: toFixed
// value => string: toUpperCase
// value => Date: getTime
function func1(value: number | string | Date | null | Person) {

  value; // number | string 타입으로 추론
  // 변수가 특정 조건에서 특정 타입으로 좁혀지는 것을 타입 좁히기라고 함
  // 타입 가드: typeof, instanceof, in 등을 사용해 타입을 좁히는 것
  if (typeof value === "number") {
    console.log(value.toFixed()); // number 타입으로 추론
  } else if (typeof value === "string") {
    console.log(value.toUpperCase()); // string 타입으로 추론
  } else if (value instanceof Date) { // value가 Date의 인스턴스냐?
    console.log(value.getTime()); // Date 객체로 추론
  } else if (value && "age" in value) { // value가 null이 아니고, age 프로퍼티가 있는지 확인
    console.log(`${value.name}은 ${value.age}살 입니다.`); // Person 객체로 추론
  }
}

function func2(value: number | string | Date) {
  if (value instanceof Date) {}
}