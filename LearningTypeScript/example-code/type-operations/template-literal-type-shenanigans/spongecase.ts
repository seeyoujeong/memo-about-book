export type SpOnGeCaSe<
  Text extends string,
  FirstTransform extends "upper" | "lower" = "upper"
> = FirstTransform extends "lower"
  ? Text extends `${infer Prefix}${infer Suffix}${infer Rest}`
    ? `${Lowercase<Prefix>}${Uppercase<Suffix>}${SpOnGeCaSe<
        Rest,
        FirstTransform
      >}`
    : Lowercase<Text>
  : Text extends `${infer Prefix}${infer Suffix}${infer Rest}`
  ? `${Uppercase<Prefix>}${Lowercase<Suffix>}${SpOnGeCaSe<
      Rest,
      FirstTransform
    >}`
  : Uppercase<Text>;

// solution
// export type SpOnGeCaSe<
//   Text,
//   FirstTransform extends "upper" | "lower" = "upper"
// > = Text extends `${infer First}${infer Rest}`
//   ? FirstTransform extends "upper"
//     ? `${Capitalize<First>}${SpOnGeCaSe<Rest, "lower">}`
//     : `${Lowercase<First>}${SpOnGeCaSe<Rest, "upper">}`
//   : ``;
