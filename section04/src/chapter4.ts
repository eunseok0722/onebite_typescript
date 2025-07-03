/* 
사용자 정의 타입 가드
*/

type Dog1 = {
  name: string;
  isBark: boolean;
}

type Cat = {
  name: string;
  isScratch: boolean;
}

type Animal1 = Dog1 | Cat;


// 사용자 정의 타입 가드
// 반환값을 통해 타입을 좁히는 방법
function isDog(animal: Animal1): animal is Dog1 {
  return (animal as Dog1).isBark !== undefined;
}

function isCat(animal: Animal1): animal is Cat {
  return (animal as Cat).isScratch !== undefined;
}

// 타입 좁히기에서 문제
function warning(animal: Animal1) {
  if(isDog(animal)) {
    console.log('멍멍');
  } else {
    console.log('야옹');
  }
}