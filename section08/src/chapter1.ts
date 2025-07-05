/* 
- 인덱스드 엑세스 타입
*/

/* 객체, 배열, 튜플에 사용 */

// 객체로부터 특정 프로퍼티의 내용을 추출해서 전달해줄 수 있는 기능
interface Post {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}

const post: Post = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "이정환",
    age: 27,
  },
};

// 기존의 방법
// function printAuthorInfo(author: {id: number, name: string, age: number}) {
//   console.log(`${author.name}-(${author.id})`)
// }

// 인덱스드 엑세스 타입

/* 
주의할 점
- 인덱스에 들어가는 값은 타입만 명시할 수 있다. [] 안에 값은 절대 "문자열"이 아니다. 키의 이름일 뿐
- 존재하지 않는 프로퍼티를 넣을 경우 오류가 발생한다.
- 객체 안에서 중첩이 가능하다. author: Post["author"]["id"]
*/
function printAuthorInfo(author: Post["author"]) {
  console.log(`${author.name}-(${author.id})`);
}

printAuthorInfo(post.author);

// 배열의 경우
type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}[];

// 배열 안에 number 타입을 넣어주면 배열의 요소의 타입을 추출할 수 있다.
// const post2: PostList[number] = {
// 또는 배열의 인덱스 번호를 넣어주면 해당 인덱스 요소의 타입을 추출할 수 있다.

// 주의할 점 : 인덱스 안에 들어가는 것은 타입이다.
// const index = 0;
// const post: PostList[index] = {  //이렇게 정의할 경우 에러 발생
const post2: PostList[0] = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "이정환",
    age: 27,
  },
};

// 배열의 인덱스 요소에서 뽑아올 때
function printAuthorArrayInfo(author: PostList[number]["author"]) {
  console.log(`${author.name}-(${author.id})`);
}


// 튜플로 사용하는 방법
type Tup = [number, string, boolean];

type Tup0 = Tup[0];

type Tup1 = Tup[1];

type Tup2 = Tup[2];

//type Tup3 = Tup[3]; // 존재하지 않는 인덱스 번호를 넣을 경우 에러 발생



type TupNum = Tup[number]



