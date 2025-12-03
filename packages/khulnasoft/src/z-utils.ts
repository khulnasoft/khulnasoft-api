import { z } from "zod";

export { z };

export type ZodTypeAny = z.ZodType<any, any, any>;

export type toZod<T> =
  // Handle primitives
  T extends string
    ? z.ZodString
    : T extends number
    ? z.ZodNumber
    : T extends boolean
    ? z.ZodBoolean
    : T extends Date
    ? z.ZodDate
    : T extends bigint
    ? z.ZodBigInt
    : T extends symbol
    ? z.ZodSymbol
    : T extends undefined
    ? z.ZodUndefined
    : T extends null
    ? z.ZodNull
    : // Handle arrays and tuples
    T extends Array<infer U>
    ? z.ZodArray<toZod<U>>
    : T extends ReadonlyArray<infer U>
    ? z.ZodArray<toZod<U>>
    : T extends [infer U, ...infer Rest]
    ? z.ZodTuple<[toZod<U>, ...{ [K in keyof Rest]: toZod<Rest[K]> }]>
    : // Handle records and objects
    T extends Record<string, any>
    ? z.ZodObject<{ [K in keyof T]-?: toZod<T[K]> }>
    : // Handle promises
    T extends Promise<infer U>
    ? z.ZodPromise<toZod<U>>
    : // Handle maps and sets
    T extends Map<infer K, infer V>
    ? z.ZodMap<toZod<K>, toZod<V>>
    : T extends Set<infer U>
    ? z.ZodSet<toZod<U>>
    : // Handle functions
    T extends (...args: any[]) => any
    ? z.ZodFunction<z.ZodTuple<any, any>, toZod<ReturnType<T>>>
    : // Fallback to any
      z.ZodType<T>;

// Re-export commonly used Zod types for convenience
export type {
  ZodType,
  ZodTypeDef,
  ZodString,
  ZodNumber,
  ZodBoolean,
  ZodDate,
  ZodBigInt,
  ZodSymbol,
  ZodUndefined,
  ZodNull,
  ZodArray,
  ZodTuple,
  ZodObject,
  ZodPromise,
  ZodMap,
  ZodSet,
  ZodFunction,
  ZodEffects,
  ZodOptional,
  ZodNullable,
  ZodDefault,
  ZodLazy,
  ZodCatch,
  ZodBranded,
  ZodPipeline,
  RawCreateParams,
  SafeParseReturnType,
  ParseContext,
  ZodFirstPartyTypeKind,
} from "zod";
