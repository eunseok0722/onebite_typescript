// 프로미스 객체의 타입 정의 방법

// 프로미스 객체
// 제네릭 클래스로 타입이 선언되어있기 때문에 제네릭을 사용하면 됨 
// 프로미스 타입 정의 확인하는 법 Promise 위에 커서 놓고 ctrl + click
// new 생성자 함수에 타입 변수가 있기 때문에 타입변수에 타입을 지정해주는 것이라고 생각하면 됨
const promise = new Promise<number>((resolve, reject) => {
    setTimeout(() => {
        resolve(20); // 결과값
        reject("~~때문에 실패");
    }, 3000);
});

promise.then((response) => {
    console.log(response * 10); // response 타입이 unknown으로 추론되기 때문에 연산을 못한다고 하고 있음
})

// err : Any 타입으로 되어있음
promise.catch((err) => {
    // 대부분 타입 좁히기로 처리
    if (typeof err === 'string') {
        console.log(err);
    }
})

// 프로미스를 반환하는 함수의 타입을 정의

interface Post {
    id: number;
    title: string;
    content: string;
}

function fetchPost(): Promise<Post> { // 반환값 타입을 직접 정의하거나 -> 선언부에서 바로 타입을 확인할 수 있기 때문에 협업 측면에서 더 좋음
    return new Promise<Post>((resolve, reject) => { // 리턴 값에 타입을 명시하거나
        setTimeout(() => {
            resolve({
                id: 1, 
                title: "게시글 제목",
                content: "게시글 컨텐츠"
            })
        }, 3000)
    });
}
const postRequest = fetchPost();

postRequest.then((post) => {
    post.id; // unknown 이기 때문에 전표기법을 사용할 수 없다고 err 처리
})