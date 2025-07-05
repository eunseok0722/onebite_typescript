// Map, forEach 를 이용해서 제네릭 응용하기


// map메서드 직접 구현해보기
const arr = [1, 2, 3];
const newArr = arr.map((it) => it * 2);
// [2, 4, 6]
// 두개의 타입 변수를 이용해서
function map<T, U>(arr: T[], callback: (item: T) => U) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i]));
    }

    return result;
}

map(arr, (it) => it * 2);
map(['hi', 'hello'], (it) => parseInt(it)); // string 타입으로 추론되었는데 number타입 메서드를 사용해서 문제가 발생, 타입 변수를 2개 사용해서 해결


// forEach 구현해보기

const arr2 = [1, 2, 3];
arr2.forEach((it) => console.log(it));

function forEach<T>(arr: T[], callback: (item: T) => void) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}
forEach(arr2, (it) => {
    console.log(it.toFixed());
})

forEach(['123', '456'], (it) => { it; })