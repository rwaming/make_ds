// 차이점 공부가 목표이기 때문에, GPT를 바탕으로 코드 입력하고 일부만 수정함.

// Array List (값을 표현할 수는 없음. 엣지(+가중치)만 표현)
const graphA_3 = [
    // A B
    //  C
    // 삼각형이라면
    [0, 1, 1], // A
    [1, 0, 1], // B
    [0, 0, 1], // C
];
const graphA_4 = [
    // A B
    // C D
    // 사각형이라면 (대각형 대칭)
    [0, 1, 1, 0], // A
    [1, 0, 0, 1], // B
    [1, 0, 0, 1], // C
    [0, 1, 1, 0], // D
];
const graphA_4_plus = [
    // A - - B
    // ⎮     ⋮
    // C  -  D
    // 사각형에 가중치를 넣어보면 (대각형 대칭)
    [0, 2, 1, 0], // A
    [2, 0, 0, 3], // B
    [1, 0, 0, 1], // C
    [0, 3, 1, 0], // D
];
const graphA_4_plus_dir = [
    // A - - >B
    // ⎮↑    ⋮↓
    // C < ㅡ D
    // 사각형에 가중치, 방향성을 넣어보면
    [0, 2, 0, 0], // A
    [0, 0, 0, 3], // B
    [1, 0, 0, 0], // C
    [0, 0, 1, 0], // D
];
const graphA_5 = [
    //  A B
    // C   D
    //   E
    // 오각형이라면 (대각형 대칭)
    [0, 1, 1, 0, 0], // A
    [1, 0, 0, 1, 0], // B
    [1, 0, 0, 0, 1], // C
    [0, 1, 0, 0, 1], // D
    [0, 0, 1, 1, 0], // E
];

// Linked List (GPT가 이상한 대답만 해서, 따로 공부해서 만듦)
class GraphL { // 가중치x
    constructor() {
        this.graph = new Map(); // (key-value)를 관리하는 객체 Map 이용
        // key는 vertex의 이름과 값으로 사용,
        // value는 edge(다음 vertex)로 사용
    }

    // vertex
    // 추가 (값, 다음(여러개면 배열형으로))
    addVertex(v, e) {
        this.graph.set(v, new Set(e ?? [])); // value들을 관리하는 객체 Set 이용
    }
    // 삭제
    removeVertex(v) {
        this.graph.delete(v);
    }
    // 갯수 반환
    getSize() {
        return this.graph.size; // ()가 필요x
    }

    // edge
    // 한방향 추가 (중복 edge는 무시됨)
    addEdge(v, e) {
        // .get(키v)로 반환된 값(객체 Set)
        // Set.add(값)으로 값e 추가
        this.graph.get(v).add(e);
    }
    // 양방향 추가 (중복 edge는 무시됨)
    connectEdges(v1, v2) {
        this.graph.get(v1).add(v2);
        this.graph.get(v2).add(v1);
    }
    // 특정 edge 삭제
    removeEdge(v, e) {
        this.graph.get(v).delete(e);
    }
    // 모두 삭제
    clearEdges(v) {
        this.graph.get(v).clear();
    }
    // 모든 edge 반환
    getEdges(v) {
        return this.graph.get(v); // 키(v)의 값(e)을 반환
    }
    // edge여부 확인(boolean)
    hasEdge(v, e) {
        return this.graph.get(v).has(e);
    }
    // 갯수 반환
    getEdgeSize(v) {
        return this.graph.get(v).size;
    }
}