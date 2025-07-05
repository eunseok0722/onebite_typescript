// 제네릭 클래스

// NubmerList 를 StringList로 바꾸려고 한다면 너무 많은 중복 코드가 발생하게 된다.
class List<T> {
    // 필드
    constructor(private list: T[]) {}

    push(data: T) {
        this.list.push(data);
    }

    pop() {
        return this.list.pop();
    }

    print() {
        console.log(this.list);
    }
}

// 제네릭 클래스에서는 매개변수에 따라서 타입을 추론하기 때문에 앞에 타입을 정의해주지 않아도 된다.
const numberList = new List([1, 2, 3]);
numberList.pop();
numberList.push(4);
numberList.print(); 

const stringList = new List(["1", "2"]);
stringList.push("hello");
stringList.print();