export interface INode<T, U> {
    key: T;
    value: U;
    prev: INode<T, U>;
    next: INode<T, U>;

}

export class Node<T,V> implements INode<T,V> {
    constructor(k: T, v: V) {
        this.key = k;
        this.value = v
    }
    key: T;
    value: V;
    prev: INode<T, V>;
    next: INode<T, V>;
}