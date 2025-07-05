// 타입스크립트의 클래스


const employee = {
    name: "이정환",
    age: 27,
    position: "개발자",
    work() {
        console.log("열심히 일합니다.");
    }
}


// 객체를 위한 클래스 선언
class Employee {
    name: string; // 에러 발생 암시적으로 any 타입이 포함됩니다. 
    age: number;
    position: string;
    // 초기 값을 넣거나, 생성자를 만들거나, 옵셔널 프로퍼티로 만들면 오류를 해결할 수 있다.

    // 생성자 : 여기서는 생성자를 만들어서 오류를 없앴음
    constructor(name: string, age: number, position: string) {
        this.name = name;
        this.age = age;
        this.position = position;
    }

    // 매서드 
    work() {
        console.log("열심히 일합니다.");
    }
}


const employeeB = new Employee("홍길동", 20, "개발자");
console.log(employeeB);

// 클래스는 타입으로도 활용된다. 
const emplyeeC: Employee = {
    name: "",
    age: 0,
    position: "",
    work() {}
}

class ExecutiveOfficer extends Employee {
    // 필드
    officeNumber: number;

    // 생성자
    // typescript에서는 super사용해서 생성자를 호출하지 않으면 오류를 발생시킨다.
    constructor(name: string, age: number, position: string, officeNumber: number) {
        super(name, age, position);
        this.officeNumber = officeNumber;
    }
}

