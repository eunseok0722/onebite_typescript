// 클래스

// 객체를 만드는 틀

let studentA = {
    name: "이정환",
    grade: "A+",
    age: 27,
    study() {
        console.log("열심히 공부합니다.");
    },
    intruduce() {
        console.log("안녕하세요, 저는 이정환입니다.");
    }
}

// 클래스는 기본적으로 파스칼 표기법을 사용
class Student {
    // 필드 : 객체의 프로퍼티를 의미
    name;
    grade;
    age;

    // 생성자 : 실제로 객체를 생성하는 역할을 하는 메서드
    constructor(name, grade, age) {
        this.name = name;
        this.grade = grade;
        this.age = age;
    }

    // 매서드
    study() {
        console.log("열심히 공부합니다.");
    }

    intruduce() {
        // this를 이용해서 현재 객체의 프로퍼티를 이용할 수 있다. 
        console.log(`안녕하세요, 저는 ${this.name}입니다.`);
    }
}

// 상속 : 중복 프로퍼티를 제거하기 위해 사용
class StudentDeveloper extends Student {
    // 필드 
    favoriteSkill;

    // 생성자 
    constructor(name, grade, age, favoriteSkill) {
        // 부모 클래스의 생성자에서 필요한 프로퍼티를 초기화해줌
        super(name, grade, age);
        this.favoriteSkill = favoriteSkill;
    }

    // 매서드 
    programing() {
        console.log(`저는 ${this.name}이고, ${this.favoriteSkill}을 잘합니다.`);
    }
}

// 인스턴스 : 클래스를 이용해서 만든 객체
let studentB = new Student("홍길동", "B", 20);
console.log(studentB);
studentB.study();
studentB.intruduce();

const studentDeveloper = new StudentDeveloper("이정환", "B+", 27, "TypeScript");
studentDeveloper.programing();