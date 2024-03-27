/** An immutable inclusive interval a..b */
export declare class Interval {
    #private;
    static INVALID_INTERVAL: Interval;
    static INTERVAL_POOL_MAX_VALUE: number;
    readonly start: number;
    readonly stop: number;
    constructor(start: number, stop: number);
    /**
     * Creates a new interval from the given values.
     *
     * Interval objects are used readonly so share all with the
     * same single value a==b up to some max size. Use an array as a perfect hash.
     * Return shared object for 0..INTERVAL_POOL_MAX_VALUE or a new
     * Interval object with a..a in it.  On Java.g4, 218623 IntervalSets
     * have a..a (set with 1 element).
     *
     * @param a The start of the interval.
     * @param b The end of the interval (inclusive).
     *
     * @returns A cached or new interval.
     */
    static of(a: number, b: number): Interval;
    equals(o: Interval): boolean;
    hashCode(): number;
    /** Does this start completely before other? Disjoint */
    startsBeforeDisjoint(other: Interval): boolean;
    /** Does this start at or before other? Nondisjoint */
    startsBeforeNonDisjoint(other: Interval): boolean;
    /** Does this.start start after other.stop? May or may not be disjoint */
    startsAfter(other: Interval): boolean;
    /** Does this start completely after other? Disjoint */
    startsAfterDisjoint(other: Interval): boolean;
    /** Does this start after other? NonDisjoint */
    startsAfterNonDisjoint(other: Interval): boolean;
    /** Are both ranges disjoint? I.e., no overlap? */
    disjoint(other: Interval): boolean;
    /** Are two intervals adjacent such as 0..41 and 42..42? */
    adjacent(other: Interval): boolean;
    properlyContains(other: Interval): boolean;
    /** Return the interval computed from combining this and other */
    union(other: Interval): Interval;
    /** Return the interval in common between this and o */
    intersection(other: Interval): Interval;
    /**
     * Return the interval with elements from this not in other;
     *  other must not be totally enclosed (properly contained)
     *  within this, which would result in two disjoint intervals
     *  instead of the single one returned by this method.
     */
    differenceNotProperlyContained(other: Interval): Interval | null;
    toString(): string;
    get length(): number;
}
