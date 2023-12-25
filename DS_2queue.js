// 차이점 공부가 목표이기 때문에, GPT를 바탕으로 코드 입력하고 일부만 수정함.

// Array List
class QueueA {
    constructor() {
        this.items = [];
    }
    // 뒤에 큐 추가
    enqueue(v) {
        this.items.push(v);
    }
    // 첫 큐 제거, 반환
    dequeue() {
        // .shift() : 배열 첫 요소 제거 및 반환
        return this.isEmpty() ? "Queue is empty" : this.items.shift();
    }
    // 첫큐 확인
    peek() {
        return this.isEmpty() ? "Queue is empty" : this.items[0];
    }
    // 비었는지
    isEmpty() {
        return this.items.length === 0;
    }
    // 갯수
    getSize() {
        return this.items.length;
    }
    // 큐 전체 확인
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
class QueueL {
    constructor() {
        this.front = null;
        this.rear = null;
        this.size = 0;
    }
}