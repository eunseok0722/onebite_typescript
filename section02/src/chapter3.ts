// object type 
// 객체 리터럴 타입 사용해야한다
// 구조를 기준으로 객체 내 프로퍼티의 타입을 모두 설정
// = 구조적 타입 시스템
// = property based type system
// 대부분의 언어 명목적 타입 시스템 = 이름을 기준으로 결정 

// 선택적 프로퍼티 : optional property
// 프로퍼티 값 뒤에 ?를 추가한다.
let user: {
    id?: number;
    name: string;
} = {
    id: 1,
    name: "이정환",
}

user.id; // property 'id' does not exist on type 'object'


// 읽기 전용 프로퍼티 만들기
let config: {
    readonly apiKey: string;
} = {
    apiKey: "MY API KEY"
}

// config.apiKey = "hacked"; // cannot assigned ~ 