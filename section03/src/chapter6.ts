// 타입 단언

type Person = {
  name: string;
  age: number;
}
// let person: Person = {} // error 발생
// 아래와 같이 할 경우 초기화 값에 따라 빈 객체로 타입이 추론되어버림
// let person = {} // error 발생

// 타입 단언 방법
let person = {} as Person; // 타입 단언 type assertion
person.name = "John";
person.age = 20;

type Dog = {
  name: string;
  color: string;
}

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도" // 추가 프로퍼티가 필요할 경우
} as Dog; // 타입 단언


// 타입 단언의 규칙
// 값 as 단언 <- 단언식
// A as B
// A가 B의 슈퍼타입
// A가 B의 서브타입이어야 함

let num1 = 10 as never;
// 10은 number 타입 , never는 number 타입의 서브 타입이기 때문에 가능
let num2 = 10 as unknown;
// 10은 number 타입, unknown은 number 타입의 전체 집합 타입이기 때문에 가능

// let num3 = 10 as string; // error 발생
// 10은 number 타입, string은 number 타입의 서브 타입이 아니기 때문에 불가능

// 단언 에러를 없애는 방법
let num3 = 10 as unknown as string; // 다중 단언을 하면 타입 추론이 가능해짐 -> 권장하지 않음

// const 단언

let num4 = 10 as const; // number literal 타입으로 추론
// 객체 타입과 사용할 때 활용도가 있음
let cat = {
  name: "나비",
  color: "white",
} as const; // readonly 프로퍼티로 추론

// cat.name = "냥냥이"; // error 발생


// Non Null 단언
// 어떤 값이 null 또는 undefined이 아니라고 단언
type Post = {
  title: string;
  author?: string; // 익명 작가일 경우를 가정
}

let post: Post = {
  title: "hello",
  author: "velopert",
}

// const len: number = post.author?.length; // null | undefined 형식은 number 형식에 할당 불가
// 옵셔널 체이닝: author가 없을 경우 전체를 undefined로 만들어주는 것

const len: number = post.author!.length; // ! 연산자를 추가 -> 값이 null 또는 undefined이 아니라고 단언

// 실제로 그 값을 바꾸는 것이 아니라 그렇게 믿도록 만드는 것
// 단언을 해두기 때문에 값이 그렇다고 믿게 되기 때문에 되도록 사용하지 않는 것을 추천 -> 위험도 높음