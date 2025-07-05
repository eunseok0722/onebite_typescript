// 인터페이스와 클래스를 함께 사용하기


// 라이브러리의 설계도를 구현할 때 만큼 큰 프로젝트에서 사용
// 인터페이스는 무조건 public field만 가능
interface CharacterInterface {
    name: string;
    moveSpeed: number;
    move(): void;
}


// implements : 구현하다. 
class Character implements CharacterInterface {
    // name: string;
    // moveSpeed: number;

    constructor(
        public name: string, 
        public moveSpeed: number,
        private extra: string,
    ) {}

    move(): void {
        console.log(`${this.moveSpeed} 속도로 이동`)
    }
}