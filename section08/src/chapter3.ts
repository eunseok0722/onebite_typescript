/* 
맵드 타입
*/


interface User {
  id: number;
  name: string;
  age: number;
}

// 맵드 타입 : 기존 타입의 모든 프로퍼티를 순회하면서 타입을 변경해준다.
type PartialUser = {
  [key in keyof User]?: User[key];
}

// 유저의 정보가 서버에 있다고 가정

function fatchUser(): User {
  // ...기능
  return {
    id: 1, 
    name: "이정환",
    age: 27,
  }
}

// 한명의 유저 정보를 수정하는 기능
function updateUser(user: PartialUser) {
    // ... 수정하는 기능
}

// 변경되는 값만 보내고 싶은데 모든 값을 다 보내야하는 문제가 발생
// updateUser({
//   id: 1, 
//   name: "이정환",
//   age: 25,
// })

// 변경되는 값만 보내는 경우
updateUser({
  age: 25,
})

// 모든 프로퍼티를 boolean으로 변경
type BooleanUser = {
  [key in keyof User]: boolean;
}

// 모든 프로퍼티를 readonly로 변경
type ReadonlyUser = {
  readonly [key in keyof User]: User[key];
}

/* 주의할 점
맵드 타입은 interface에서 사용 불가 : 타입 별칭으로 사용해야 한다.

*/