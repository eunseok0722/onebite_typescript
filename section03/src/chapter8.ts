// 서로소 유니온 타입
// = tagged union type
// 서로 교집합이 없는 집합을 유니온 타입으로 만들어 주는 것


// tag 타입이 string 리터럴 타입이기 때문에 교집합이 없는 서로소 타입으로 만들어 줌
type Admin = {
  tag: "ADMIN"; // 스트링 리터럴 타입
  name: string;
  kickCount: number;
};

type Member = {
  tag: "MEMBER";
  name: string;
  point: number;
};

type Guest = {
  tag: "GUEST";
  name: string;
  visiCount: number;
};


type User = Admin | Member | Guest;

// Admin -> {name}님 현재까지 {kickCount}명 강퇴했습니다.
// Member -> {name}님 현재까지 {point}점을 획득했습니다.
// Guest -> {name}님 현재까지 {visiCount}번 방문했습니다.
// 조건문에 프로퍼티를 넣었기 때문에 직관적이지 않다.
function login(user: User) {
  // if ("kickCount" in user) {
  //   // Admin 타입
  //   console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
  // } else if ("point" in user) {
  //   // Member 타입
  //   console.log(`${user.name}님 현재까지 ${user.point}점을 획득했습니다.`);
  // } else if ("visiCount" in user) {
  //   // Guest 타입
  //   console.log(`${user.name}님 현재까지 ${user.visiCount}번 방문했습니다.`);
  // }

  // 서로소 유니온 타입
  // if (user.tag === "ADMIN") {
  //   // Admin 타입
  //   console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
  // } else if (user.tag === "MEMBER") {
  //   // Member 타입
  //   console.log(`${user.name}님 현재까지 ${user.point}점을 획득했습니다.`);
  // } else if (user.tag === "GUEST") {
  //   // Guest 타입
  //   console.log(`${user.name}님 현재까지 ${user.visiCount}번 방문했습니다.`);
  // }

  // 서로소 유니온 타입을 사용해 직관적으로 타입을 추론할 수 있음
  switch (user.tag) {
    case "ADMIN":
      console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
      break;
    case "MEMBER":
      console.log(`${user.name}님 현재까지 ${user.point}점을 획득했습니다.`);
      break;
    case "GUEST":
      console.log(`${user.name}님 현재까지 ${user.visiCount}번 방문했습니다.`);
      break;
    default:
      return;
  }
}

// 복습 겸 사례
// 비동기 작업의 결과를 처리하는 객체


// type AsynceTask = {
//   state: "LOADING" | "SUCCESS" | "FAILED";
//   error?: {
//     // 선택적 프로퍼티이기 때문에 undefined가 가능하여 에러 발생 가능성이 있음
//     message: string;
//   };
//   response?: {
//     // 선택적 프로퍼티이기 때문에 undefined가 가능하여 에러 발생 가능성이 있음
//     data: string;
//   };
// };

// 선택적 프로퍼티보다는 서로소 유니언 타입을 사용하는 것이 코드를 안정적으로 만들 수 있다.
type LoadingTask = {
  state: "LOADING";
}
type FailedTask = {
  state: "FAILED";
  error: {
    message: string;
  };
}
type SuccessTask = {
  state: "SUCCESS";
  response: {
    data: string;
  };
};

type AsynceTask = LoadingTask | SuccessTask | FailedTask;

// 로딩중 -> 콘솔에 로딩중 출력
// 실패 -> 실패 : 에러메시지 출력
// 성공 -> 성공 : 데이터를 출력
function processResult(task: AsynceTask) {
  switch (task.state) {
    case "LOADING":
      console.log("로딩중");
      break;
    case "FAILED":
      console.log(`실패 : ${task.error.message}`);
      break;
    case "SUCCESS":
      console.log(`성공 : ${task.response.data}`);
      break;
    default:
      return;
  }
}

const loading = {
  state: "LOADING"
}

const failed = {
  state: "FAILED",
  error: {
    message: "오류 발생"
  }
}

const success = {
  state: "SUCCESS",
  response: {
    data: "데이터",
  }
}