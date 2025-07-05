// 제네릭 인턴페이스와 제네릭 타입 별칭


// 제네릭 인터페이스
// 타입 변수 = 타입 파라미터 = 제네릭 타입 변수 = 제네릭 타입 파라미터 모두 같은 말
interface KeyPair<K, V> {
    key: K;
    value: V;
}

// 타입변수에 직접 타입을 할당해줘야한다.
let keyPair: KeyPair<string, number> = { 
    key: "key", 
    value: 0,
}

let keyPair2: KeyPair<boolean, string[]> = {
    key: true, 
    value: ["i"],
}


// 인덱스 시그니처 

interface NumberMap {
    [key: string] : number;
}

let numberMap1 : NumberMap = {
    key: -1231,
    key2: 123123,
}

interface Map<V> {
    [key: string]: V;
}

let stringMap: Map<string> = {
    key: "value",
}

let bookeanMap : Map<boolean> = {
    key: true,
}

// 제네릭 타입 별칭
type Map2<V> = {
    [key: string]: V;
}

// 들어갈 타입을 직접 지정해줘야한다 
let stringMap2: Map2<string> = {
    key: "true"
}

// 제네릭 인터페이스를 언제 사용하면 좋은가?
// 제네릭 인터페이스 활용 예시
// -> user 관리프로그램
// 유저구분 : 학생 / 개발자

interface Student {
    type: "student";
    school: string;
}

interface Developer {
    type: "developer";
    skill: string
}

// 서로소 유니언 타입인 상황

interface User<T> {
    name: string;
    profile: T;
}

// 제네릭 인터페이스를 이용해서 타입을 구분해 줄 수 있다. 
function goToSchool(user: User<Student>){
    // 타입이 많아지면 모두 타입 좁히기를 해야하기 때문에 복잡해 질 수 있다.
    // if (user.profile.type !== 'student') {
    //     console.log('잘 못 오셨습니다.');
    //     return;
    // }

    const school = user.profile.school;
    console.log(`${school}로 등교 완료`)
}

const studentUser: User<Student> = {
    name: "이정환",
    profile: {
        type: "student",
        school: "가톨릭대학교",
    }
}

const developerUser: User<Developer> = {
    name: "홍길동",
    profile: {
        type: "developer",
        skill: "typescript",
    }
}