// number
let num1: number = 123;

let num2: number = -123;
let num3: number = 0.123;
let num4: number = -0.123;
let num5: number = Infinity;
let num6: number = -Infinity;
let num7: number = NaN;

// string

let str1: string = "Hello";
let str2: string = 'Hello';
let str3: string = `Hello`;
let str4: string = `Hello ${str1}`;


// boolean
let bool1: boolean = true;
let bool2: boolean = false;

// null
let null1: null = null;

// undefined
let unde1: undefined = undefined;


// null type이 아닌데 임시로 비워두는 경우
// "strictNullChecks": false
// let numA: number = null;


// literal type  : 리터럴 = 값
// 값 자체가 타입이 되는 경우, 다른 값이 들어올 경우 오류 체크
let numA: 10 = 10;
let boolA: true = true;