// 차이점 공부가 목표이기 때문에, GPT를 바탕으로 코드 입력하고 일부만 수정함.

// Array List
class StackA {
    constructor() {
        // Array 자료형 만들기
        this.items = [];
    }
    // top 추가
    push(v) {
        // Array 자료형에 .push(), .pop()이 이미 내장되어 있다.
        this.items.push(element);
    }
    // top 삭제
    pop() {
        // .pop()만으로 요소 제거 + 반환. 단, 함수실행 후 반환하려면 return이 필요
        return this.isEmpty() ? "Stack is empty" : this.items.pop();
    }
    // top 확인
    peek() {
        return this.isEmpty() ? "Stack is empty" : this.items[this.items.length - 1];
    }
    // 비어있는지
    isEmpty() {
        return this.items.length === 0; // 배열의 length는 linked list의 size와 같은 역할을 한다.
    }
    // 스택 크기
    getSize() {
        return this.items.length;
    }
    // 모든 스택 확인
    print() {
        return this.items;
    }
}

// Linked List
// node 생성기
class Node {
    constructor(v, n) {
        this.value = v;
        this.next = n ?? null;
    }
}
// Stack식 메서드 만들기
class StackL {
    constructor() {
        this.top = null; // 처음엔 null
        this.size = 0; // 처음엔 0
    }
    // top 추가
    push(v) {
        const newNode = new Node(v, this.top); // 현재 top이 new의 다음이 된다.
        this.top = newNode; // top은 이제 new가 차지했다!
        this.size++; // stack 증가
    }
    // top 삭제
    pop() {
        if (!this.top) {
            return "Stack is empty";
        }
        const popped = this.top; // 반환용 저장
        this.top = this.top.next; // top = top밑 (기존top삭제)
        this.size--; // stack 감소
        return popped.value; // 보통 노드보단 value를 반환하는 게 보통이라고 함
    }
    // top 확인
    peek() {
        return this.top;
    }
    // 비어있는지
    isEmpty() {
        return this.size === 0;
    }
    // 스택 크기
    getSize() {
        return this.size;
    }
    // 모든 스택 반환
    print() {
        const stack = []; // 반환할 배열 만들기
        let node = this.top; // 노드를 담을 변수
        while (node) { // null일 때 중지
            stack.push(node);
            node = node.next;
        }
        return stack;
    }
}