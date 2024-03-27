/** Expresses the Java concept of object equality (equality based on the content of two objects). */
export interface IComparable {
    equals(obj: unknown): boolean;
    hashCode(): number;
}
export declare const isComparable: (candidate: unknown) => candidate is IComparable;
/**
 * @param value The array to stringify.
 *
 * @returns a human readable string of an array (usually for debugging and testing).
 */
export declare const arrayToString: (value: unknown[] | null) => string;
/**
 * Compares two arrays for equality, using object equality for elements.
 *
 * @param a The first array to compare.
 * @param b The second array to compare.
 *
 * @returns `true` if `a` and `b` are equal.
 */
export declare const equalArrays: <T extends IComparable | null>(a: T[], b: T[]) => boolean;
/**
 * Compares two number arrays for equality.
 *
 * @param a The first array to compare.
 * @param b The second array to compare.
 *
 * @returns `true` if `a` and `b` are equal.
 */
export declare const equalNumberArrays: (a: number[], b: number[]) => boolean;
/**
 * Converts all non-visible whitespaces to escaped equivalents.
 *
 * @param s The string to convert.
 * @param escapeSpaces A flag indicating whether to escape spaces too.
 *
 * @returns The converted string.
 */
export declare const escapeWhitespace: (s: string, escapeSpaces?: boolean) => string;
