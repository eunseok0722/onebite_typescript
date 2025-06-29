// Unknown 타입


function unknownExam() {
    let a: unknown = 1;
    let b: unknown = "hello";
    let c: unknown = true;
    let d: unknown = null;
    let e: unknown = undefined;

    let unknownVar: unknown;

    // let num: number = unknownVar;
    // let str: string = unknownVar;
    // let bool: boolean = unknownVar;

}

function neverExam() {
    function neverFunc(): never {
        while (true) {}
    }

    let num: number = neverFunc();
    let str: string = neverFunc();
    let bool: boolean = neverFunc();

    // 어떤 값도 저장되면 안되는 값에 사용
    // let never1: never = 10;
    // let never2: never = "string";
    // let never3: never = true;
}

// void 타입
// 리턴문 없는 함수의 반환값에 사용
// undefined 타입의 슈퍼타입
function voidExam() {
    function voidFunc(): void {
        console.log("hi");
        // return undefined; // undefined 반환해도 다운케스팅 가능하기 때문에 가능
    }
    let voidVar: void = undefined;
}

// any 타입
// 모든 타입에 슈퍼타입
// 모든 타입에 서브타입
// never 제외
function anyExam() {
    let unknownVar: unknown;
    let anyVar: any;
    let undefinedVar: undefined;
    let neverVar: never;

    anyVar = unknownVar; // 가능
    undefinedVar = anyVar; // 가능

    // neverVar = anyVar; // 불가능
}