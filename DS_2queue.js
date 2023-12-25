// 차이점 공부가 목표이기 때문에, GPT를 바탕으로 코드 입력하고 일부만 수정함.

// Array List
class QueueA {
    constructor() {
        this.items = [];
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
class QueueL {
    constructor() {
        this.front = null;
        this.rear = null;
        this.size = 0;
    }
}