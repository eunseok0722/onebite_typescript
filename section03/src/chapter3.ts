// 기본 타입간의 호환성



// 객체 타입간의 호환성
//  어떤 객체타입을 다른 객체타입으로 취급해도 괜찮은가?


type Animal = {
    name: string;
    color: string;
}

type Dog = {
    name : string;
    color: string;
    breed: string;
}

// 슈퍼 타입
let animal: Animal = {
    name: "기린",
    color: "yellow"
}

// 서브 타입
let dog: Dog = {
    name: "돌돌이",
    color: "Brown",
    breed: "진도"
}

animal = dog; // 문제 없음 : 업 캐스팅
// dog = animal; // 오류 : 다운 캐스팅

// 객체 타입은 프로퍼티를 기준으로 슈퍼 타입과 서브 타입이 나뉜다.
// 구조적 타입 시스템을 따르기 때문에
// Dog 타입에 추가적인 프로퍼티가 필요하다.


type Book = {
    name: string;
    price: number;
}

type ProgramingBook = {
    name: string;
    price: number;
    skill: string;
}

let book: Book;
let programingBook : ProgramingBook ={
    name: "한 입 크기로 잘라먹는 리액트",
    price: 33000,
    skill: "reactjs"
}

book = programingBook;
// programingBook = book; // 오류


// 업 캐스팅이니까 가능할 것으로 보이는데 오류가 발생
// 초과 프로퍼티 검사 발동
// 객체를 초기화 할 때 객체 리터럴 사용 시 type에 정의되지 않은 프로퍼티가 있을 경우 안되도록 막는 기능
let book2: Book = {
    name: "한 입 크기로 잘라먹는 리액트",
    price: 33000,
    // skill: "reactjs" // error 발생
}

// 이렇게 값을 별도로 할당해주면 문제가 발생하지 않음
let book3: Book = programingBook

// 매개 변수에 타입을 정해서 인수로 보낼 때도 초과 프로퍼티가 발생
function func(book: Book) {}
func({
    name: "한 입 크기로 잘라먹는 리액트",
    price: 33000,
    // skill: "reactjs"  // error
})