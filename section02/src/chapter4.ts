// 타입 별칭
// 타입을 변수처럼 처리해서 중복을 제거

type User = {
    id: number;
    name: string;
    nickname: string;
    birth: string;
    bio: string;
    location: string;
}

let user1: User = {
    id: 1,
    name: "이정환",
    nickname: "winterlood",
    birth: "1997.01.07",
    bio: "안녕하세요.",
    location: "부천시",
}

let user2: User = {
    id: 1,
    name: "이정환",
    nickname: "winterlood",
    birth: "1997.01.07",
    bio: "안녕하세요.",
    location: "부천시",
}



// 인덱스 시그니처
// 타입의 양이 너무 많을 경우
// key : value 

type CountryCodes = {
    [key: string]: string;
};

let countryCodes: CountryCodes = {
    Korea: 'ko',
    UnitedState: 'us',
    Unitedkingdom: "uk"
}

type CountryNumberCodes = {
    [key: string]: number;
    korea: number;
}

let countryNumberCodes = {
    Korea: 410,
    UnitedState: 840,
    Unitedkingdom: 826
}