/* 템플릿 리터럴 타입 */

type Color = "red" | "orange" | "yellow";

type Animal = "dog" | "cat" | "chicken";

type ColorAnimal = `${Color}-${Animal}`;

// 문자열로 타입을 정의해아할 때 사용