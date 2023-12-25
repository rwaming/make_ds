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
        return this.items.join(' -> ');
    }
}

// Linked List
// node 생성기
class Node {
    constructor(v) {
        this.value = v;
        this.next = null;
    }
}
// Stack식 메서드 만들기
class QueueL {
    constructor() {
        this.front = null;
        this.rear = null;
        this.size = 0;
    }
    enqueue(v) {
        const newNode = new Node(v);
        // 처음이면 front = new, 추가면 rear -> newNode 연결
        this.isEmpty() ? this.front = newNode : this.rear.next = newNode;
        this.rear = newNode; // 항상 rear = newNode
        this.size++; // 증가
    }
    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }// A && B : A===true일 때만, B실행. !A면 false를 반환 + B를 실행하지 않는다.
         //          때문에, return과 함께 사용하면 A를 통해 false를 반환하게 될 수 있다.
        const deq = this.front; // 반환용
        this.front = this.front.next; // front 변경
        if (this.front === null) { // deq가 처음이자 마지막이라면,
            this.rear = null; // rear도 비운다.
        }
        this.size--; // 감소
        return deq.value; // 삭제한 노드의 값 반환
    }
    peek() {
        return this.front?.value ?? "Queue is empty";
    }
    isEmpty() {
        return this.size === 0;
    }
    getSize() {
        return this.size;
    }
    print() {
        const queue = []; // 반환할 배열
        let node = this.front; // 노드를 담을 변수
        while (node !== null) { // null일 때 중지
            queue.push(node.value); // 노드의 값 넣기
            node = node.next; // 다음 노드
        }
        return queue.join(' -> ');
    }
}
