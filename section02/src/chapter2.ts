// 배열
// annotation 후 들어갈 값의 타입을 명시
let numArr: number[] = [1, 2, 3];

let strArr: string[] = ["hello", "im", "winterlood"];

// 제네릭 문법
let boolArr: Array<boolean> = [true, false, true];


// 배열에 들어가는 요소가 다양할 경우
// 유니온 타입 
let multiArr: (number | string)[] = [1, "hello"];

// 다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
    [1, 2, 3],
    [4, 5],
];

// 튜플 
// 길이와 타입이 고정된 배열
let tup1: [number, number] = [1, 2];
// tup1 = [1, 2, 3]; // 오류
// tup1 = ["1", "2"]; // 오류

let tup2: [number, string, boolean] = [1, "2", true];
// tup2 = [1, "2", true, 4]; // 오류