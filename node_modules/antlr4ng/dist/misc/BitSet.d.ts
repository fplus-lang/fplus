export declare class BitSet implements Iterable<number> {
    private data;
    /**
     * Creates a new bit set. All bits are initially `false`.
     *
     * @param data Optional initial data.
     */
    constructor(data?: number[]);
    /**
     * @returns an iterator over all set bits.
     */
    [Symbol.iterator](): IterableIterator<number>;
    /**
     * Sets a single bit or all of the bits in this `BitSet` to `false`.
     *
     * @param index the index of the bit to be cleared, or undefined to clear all bits.
     */
    clear(index?: number): void;
    /**
     * Performs a logical **OR** of this bit set with the bit set argument. This bit set is modified so that a bit in it
     * has the value `true` if and only if it either already had the value `true` or the corresponding bit in the bit
     * set argument has the value `true`.
     *
     * @param set the bit set to be ORed with.
     */
    or(set: BitSet): void;
    /**
     * Returns the value of the bit with the specified index. The value is `true` if the bit with the index `bitIndex`
     * is currently set in this `BitSet`; otherwise, the result is `false`.
     *
     * @param index the bit index
     *
     * @returns the value of the bit with the specified index.
     */
    get(index: number): boolean;
    /**
     * @returns the number of set bits.
     */
    get length(): number;
    /**
     * @returns an array with indices of set bits.
     */
    values(): number[];
    /**
     * @returns the index of the first bit that is set to `true` that occurs on or after the specified starting index.
     * If no such bit exists then undefined is returned.
     *
     * @param fromIndex the index to start checking from (inclusive)
     */
    nextSetBit(fromIndex: number): number | undefined;
    /**
     * Sets the bit at the specified index to `true`.
     *
     * @param index a bit index
     */
    set(index: number): void;
    /**
     * @returns a string representation of this bit set.
     */
    toString(): string;
    private resize;
    private bitCount;
}
