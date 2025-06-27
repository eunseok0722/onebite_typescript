// void type

function func1(): string {
    return "hello";
}


// 반환하는 값이 아무것도 없을 경우
function func2(): void {
    console.log("hello");
}

// null, undefined가 타입으로 쓰이지 않는 이유
// function func2(): undefined {
// console.log("hello");

// 아래와 같이 return이 무조건 들어가야하기 때문에
// return undefined;
// return ;
// return null;
// }

let a: void;
// a = 1; // error
// a = "hello"; // error 
a = undefined;


// never 
// never -> 존재하지 않는
// 불가능한 타입

// 종료되지 않는 반복문
function func3(): never {
    while (true) {}
}

// 실행되면 함수가 중지되기 때문에 반환값이 없는 경우
function func4(): never {
    throw new Error();
}

// never 타입은 null, undefined도 담을 수 없다. 
// 아무런 값도 저장할 수 없는 변수로 만들 수 있다.
let a: never;
let anyVar: any;

a = 1;
a = {};
a = "";
a = anyVar; // any 형식 또한 담을 수 없음