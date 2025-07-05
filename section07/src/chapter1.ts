// 제네릭 함수 응용하기


// function swap(a: any, b: any) {
//     return [b, a];
// }

// const [a, b] = swap(1, 2);

// 제네릭 함수로 바꿔서 any 제거해보기
// 타입이 다를 경우
function swap<T, U>(a: T, b: U) {
    return [b, a];
}

const [a, b] = swap("1", 2);


// 두번째 사례
// 데이터 타입에서 나머지는 중요하지 않고 첫번째 인자의 값을 T에 저장할 것이다.
function returnFisrtValue<T>(data: [T, ...unknown[]]) {
    return data[0]; // T 타입변수에 할당 될 형태가 무엇인지 모르는데 data 인덱스에 접근하려고 하면 안된다라는 에러 메시지 발생
}

let num = returnFisrtValue([0, 1, 2]);
// 0

let str = returnFisrtValue(["hello", "mynameis"]);
// "hello"


// 세번째 사례
// T의 타입을 제한하기

// T에 extends { length: number}를 거는 것은 아래의 문법의 내용과 동일하다
// interface InterfaceA {
//     length: number
// }
// interface InterfaceB extends InterfaceA {}

function getLength<T extends { length: number }>(data: T) {
    return data.length;
}

let var1 = getLength([1, 2, 3]); // 3 var1.length로 접근 가능
let var2 = getLength("12345"); // 5 var2.length로 접근 가능
let var3 = getLength({ length: 10 }); // 10 var3.length로 접근 가능
// let var4 = getLength(10); // var4.length로 접근 불가능하기 때문에 오류 발생 