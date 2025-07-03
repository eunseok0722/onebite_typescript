/* 
인터페이스 확장
*/

interface Animal {
  name: string;
  color: string;
}

// 타입 별칭도 인터페이스 확장과 동일하게 사용 가능
// type Animal = { 
//   name: string;
//   color: string;
// }

// Animal의 서브타입들
// 중복된 프로퍼티를 제거하고 인터페이스 확장 사용
// 상속
interface Dog extends Animal {
  // name: "hello"; // 스트링 리터럴 타입: 원본타입의 서브타입만 재정의 가능
  isBark: boolean;
}

interface Cat extends Animal {
  isScratch: boolean;
}

interface Chicken extends Animal {
  isFly: boolean;
}

// 인터페이스 확장 사용
const dog: Dog = {
  name: "멍멍이", // 
  color: "갈색",
  isBark: true,
};

// 여러개의 인터페이스를 함께 사용하여 확장 가능
interface DogCat extends Dog, Cat {

}
