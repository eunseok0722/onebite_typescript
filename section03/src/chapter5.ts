// 타입 추론

// 점진적 타입 시스템 채택
// 추론할 값이 있을 경우 해당 값에 따라서 타입을 추론
// 타입 넓히기 : 범용적으로 사용할 수 있도록 타입 추론해줌
let a = 10; // 초기값 기준으로 타입 추론
let b = "hello";
let c = {
  id: 1, 
  name: "John",
  profile: {
    nickname: "velopert",
  },
  urls: ["https://velopert.com"],
};

let {id, name, profile} = c;

let [one, two, three] = [1, "hello", true];

// 함수 반환값 추론
function func() {
  return "hello";
}

// 매개 변수 기본값이 있을 경우 기본값 기준으로 매개변수 타입 추론
function func2(a = 10) {
  return a;
}


// 모든 상황에 타입을 선언해주지 않는다. 
// function func(param) {} // 이런 상황에는 매개변수에 타입을 직접 선언해줘야한다. 


// 타입 추론 불가능
let d; // 암묵적 any 타입 추론
d = 10; // any 타입의 진화 -> number 타입
d.toFixed();
// d.toUpperCase(); // error 발생

d = "hello"; // any 타입의 진화 -> string 타입
// d.toFixed(); // error 발생
d.toUpperCase(); 

// 암묵적 any 타입은 버그를 일으킬 수 있으므로 되도록 사용하지 않는다. 


// const 사용 시 타입 추론
const num = 10; // nubmer literal 타입으로 추론
const str = "hello"; // string literal 타입으로 추론

// 여러 타입이 혼재 시 타입 추론
let arr = [1, "string"]; // (number | string)[] 타입으로 추론


