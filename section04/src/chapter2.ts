/* 
함수 타입 호환성
특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단하는
1. 반환값의 타입이 호환되는가?
2. 매개 변수의 타입이 호환되는가?
*/

// 기준1. 반환값이 호환되는가?
type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

a = b; // 업 케스팅이기 때문에 호환됨
// b = a; // 다운 케스팅이기 때문에 호환되지 않음


// 기준2. 매개 변수가 호환되는가?
// 2.1. 매개 변수의 개수가 같을 때
// 매개변수일 경우 업케스팅은 불가능
// 다운케스팅일 경우 가능 -> why? 서브 타입이 더 많은 매개변수를 가지고 있기 때문에

type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {}
let d: D = (value) => {}

// c = d; // 넘버 리터럴 타입을 넘버 타입으로 업케스팅 -> 불가능 Why?
d = c; // 넘버 타입을 넘버 리터럴 타입에 다운 케스팅 하겠다는 뜻 -> 가능


// 객체 타입을 매개변수로 하는 경우

type Animal = {
  name: string;
}

type Dog = {
  name: string;
  color: string;
}

let animalFunc = (animal: Animal) => {
  console.log(animal.name);
}

let dogFunc = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
}

// animalFunc = dogFunc; // animal 타입에는 color 속성이 없기 때문에 업 케스팅일 경우 에러가 발생

let testFunc = (animal: Animal) => {
  console.log(animal.name);
  //console.log(animal.color); // animal 타입에는 color 속성이 없기 때문에 에러
}

let testFunc2 = (dog: Dog) => {
  console.log(dog.name); // dog 타입에는 animal 타입에 모든 매개변수가 있기 때문에 
}


// 2.2. 매개 변수의 개수가 다를 때
// 매개변수의 개수가 더 적은 쪽에만 할당 가능
type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {}
let func2: Func2 = (a) => {}

func1 = func2; // 매개변수가 많은 쪽에 할당하기 때문에 가능
// func2 = func1; // 에러 발생 -> 매개변수가 1개인 곳에 2개를 할당하려고 하기 때문에 불가능