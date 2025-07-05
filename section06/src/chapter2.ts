// 접근제어자 
// 객체 지향 프로그래밍에서 엄청 중요한 역할
// access modifier 
// -> public, private, protected 

// 객체를 위한 클래스 선언
class Employee {
    // 접근제어자 추가
    // private name: string; // 외부는 물론이고 파생 클래스에서도 접근할 수 없다.
    // protected age: number; // 파생클래스에서 접근 가능
    // public position: string; // 기본형, 지워도 동일한 기능을 한다.
    // 초기 값을 넣거나, 생성자를 만들거나, 옵셔널 프로퍼티로 만들면 오류를 해결할 수 있다.

    // constructor(name: string, age: number, position: string) {
        //     this.name = name;
        //     this.age = age;
        //     this.position = position;
        // }
    // 생성자 매개변수 앞에서 달 경우 매개변수 할당 및 필드 선언을 별도로 할 필요 없도록 자동으로 생성해준다.
    constructor(private name: string, protected age: number, public position: string) {}

    // 매서드 
    work() {
        console.log(`${this.name}열심히 일합니다.`);
    }
}

const employee = new Employee("이정환", 27, "디자이너");
// employee.name = "홍길동"; // 메서드 내부에서만 읽을 수 있으며 외부에서는 읽지도 못하도록 에러 발생
employee.position = "designer";
console.log(employee)