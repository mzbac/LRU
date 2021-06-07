
import { INode, Node } from './Node'
export class DoubleList<T, U extends INode<T, unknown>> {
    size: number
    head: INode<T, unknown>;
    tail: INode<T, unknown>;
    constructor() {
        this.head = new Node<T, unknown>(null, null)
        this.tail = new Node<T, unknown>(null, null)
        this.head.next = this.tail
        this.tail.prev = this.head
        this.size = 0;
    }
    removeLast(): INode<T, unknown> {
        const x = this.tail.prev
        this.remove(x)
        return x;
    }

    addFirst(x: INode<T, unknown>) {
        x.prev = this.head
        x.next = this.head.next
        this.head.next.prev = x;
        this.head.next = x;
        this.size = this.size + 1;
    }

    remove(x: INode<T, unknown>) {
        const pre = x.prev;
        const next = x.next;
        pre.next = next;
        next.prev = pre;
        this.size = this.size - 1;
    }
}
