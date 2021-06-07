import { DoubleList } from './DoubleList'
import { INode, Node } from './Node'

export class LRU<T, U> {
    map: Map<T, INode<T, U>>
    cache: DoubleList<T, Node<T, U>>
    cap: number
    constructor(capacity: number) {
        this.cap = capacity
        this.map = new Map<T, INode<T, U>>();
        this.cache = new DoubleList<T, INode<T, U>>();
    }

    get(k: T): U {
        if (!this.map.has(k)) {
            return undefined;
        }
        const v = this.map.get(k);

        this.put(k, v.value)
        return v.value;
    }

    put(k: T, v: U) {
        const x = new Node(k, v);
        if (this.map.has(k)) {
            this.cache.remove(this.map.get(k));
            this.cache.addFirst(x)
            this.map.set(k,x);
        } else {
            if (this.cap ==this.cache.size) {
                const last = this.cache.removeLast();
                this.map.delete(last.key);
            }

            this.cache.addFirst(x)
            this.map.set(k,x);
        }
    }
}