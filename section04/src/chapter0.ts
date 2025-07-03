// 함수 타입 정의

// 함수를 설명하는 가장 좋은 방법
// 어떤 매개변수를 받고, 어떤 결과값을 반환하는지
// 어떤 타입의 매개변수를 받고 어떤 타입의 결과값을 반환하는지?
function func(a: number, b: number) {
  return a + b;
}

func(1, 2);

// 화살표 함수
// 매개변수의 타입 그리고 반환값의 타입 작성 방법
const add = (a: number, b: number): number => a + b;

add(1, 2);

// 함수의 매개변수
// ?를 추가하면 선택적 매개변수로 만들 수 있음
// 필수 매개변수보다 앞에 있으면 오류가 발생
function introduce(name = "이정환", age: number, tall?: number) {
  console.log(`name: ${name}`);
  // 선택적 매개변수는 undefined | number 유니온 타입이기 때문에 숫자 연산을 하려고 하면 오류가 발생할 수 있다.
  if (typeof tall === "number") {
    console.log(`tall: ${tall}`);
  }
  console.log(`age: ${age}`);
}

introduce("이정환", 20, 170);

// 레스트 파라미터
// 나머지 매개변수
// 가변적인 길이의 변수를 받을 때 사용
function getSum(...rest: number[]) {
  let sum = 0;
  rest.forEach((it) => (sum += it));
  return sum;
}

getSum(1, 2, 3); // 6
getSum(1, 2, 3, 4, 5); // 15
