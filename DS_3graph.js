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
class GraphL {
    // 가중치x
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
    // 삭제 및 그의 edge들 반환  * v없으면, undefined 반환
    removeVertex(v) {
        const del = this.graph.get(v);
        this.graph.delete(v);
        return del;
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
        this.graph.get(v)?.add(e);
    }
    // 양방향 추가 (edge는 Set으로 관리되므로, add(중복 edge)는 무시됨)
    connectEdges(v1, v2) {
        this.graph.get(v1)?.add(v2);
        this.graph.get(v2)?.add(v1);
    }
    // 특정 edge 삭제
    removeEdge(v, e) {
        this.graph.get(v)?.delete(e);
    }
    // 모든 edge 삭제하고 그 edge들 반환  * v없으면, undefined 반환
    clearEdges(v) {
        const delSet = this.graph.get(v);
        this.graph.get(v)?.clear();
        return delSet;
    }
    // 모든 edge 복제본 반환  * v없으면, undefined 반환
    showEdges(v) {
        // Set 복제(키(vertex)의 값(edge)) **GPT왈 데이터 무결성 목적
        return this.graph.has(v) ? new Set(this.graph.get(v)) : undefined;
    }
    // edge여부 확인(boolean)  * v없으면, undefined 반환
    hasEdge(v, e) {
        return this.graph.get(v)?.has(e); // Map의 value인, Set에 대한 .has(edge);
    }
    // 갯수 반환  * v없으면, undefined 반환
    getEdgeSize(v) {
        return this.graph.get(v)?.size;
    }
}

class GraphL_W {
    // 가중치o
    constructor() {
        this.graph = new Map();
    }

    // vertex
    // 추가 (vertex, edge(edgeV - weight))
    addVertex(v, e, w) {
        this.graph.set(v, new Map());
        // e있으면 && edge추가(e, w없거나 NaN면 1로 지정)
        e !== undefined && this.graph.get(v).set(e, isNaN(w) ? 1 : w);
    }
    // 삭제 및 그의 edge, weight 반환  * v없으면, undefined 반환
    removeVertex(v) {
        const delMap = this.graph.get(v);
        this.graph.delete(v);
        return delMap;
    }
    // 갯수 반환
    getSize() {
        return this.graph.size;
    }

    // edge
    // 한방향 추가 (중복 edge는 무시됨)
    addEdge(v, e, w) {
        this.graph.get(v)?.set(e, isNaN(w) ? 1 : w); // 가중치 미지정시 1
    }
    // 양방향 추가 (Map으로 중복된 키=edge는 무시됨)
    connectEdges(v1, v2, w1, w2) {
        this.graph.get(v1)?.set(v2, isNaN(w1) ? 1 : w1); // v1 -> v2 가중치w1 미지정시 1
        this.graph.get(v2)?.set(v1, isNaN(w2) ? 1 : w2); // v1 <- v2 가중치w2 미지정시 1
    }
    // 특정 edge 삭제
    removeEdge(v, e) {
        this.graph.get(v)?.delete(e);
    }
    // 모든 edge 삭제하고 그 edge들 반환  * v없으면, undefined 반환
    clearEdges(v) {
        const delMap = this.graph.get(v);
        this.graph.get(v)?.clear();
        return delMap;
    }
    // 모든 edge 복제본 반환  * v없으면, undefined 반환
    showEdges(v) {
        // Map(갯수) { e => w, ...} 형식으로 반환 **무결성목적 복제
        return this.graph.has(v) ? new Map(this.graph.get(v)) : undefined;
    }
    // edge여부 확인(boolean)  * v없으면, undefined 반환
    hasEdge(v, e) {
        return this.graph.get(v)?.has(e);
    }
    // edge의 가중치 확인  * v없으면, undefined 반환
    getWeight(v, e) {
        return this.graph.get(v)?.get(e);
    }
    // 갯수 반환  * v없으면 undefined
    getEdgeSize(v) {
        return this.graph.get(v)?.size;
    }
}
