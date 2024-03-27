export declare class MultiMap<K extends string, V> extends Map<K, V[]> {
    map(key: K, value: V): void;
    getPairs(): Array<[K, V]>;
}
