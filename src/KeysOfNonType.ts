export type KeysOfNonType<TTarget, TValue> = {
    [K in keyof TTarget]: TTarget[K] extends TValue ? never : K
}[keyof TTarget];
