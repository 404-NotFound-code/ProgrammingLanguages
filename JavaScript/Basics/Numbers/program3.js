// Javascript numeric separator
// The numeric separator allows you to create a visual separation between groups of digits by using _ as separators

const budget = 1_000_000_000; // 1000000000
let amount1 = 120_201_123.05; // 120201123.05
let amount2 = 0.000_001; // 1 millionth
let expense = 123_450; // 123450
let fee = 12345_00; // 1234500

console.log(budget, amount1, amount2, expense, fee); // 1000000000 120201123.05 0.000001 123450 1234500

// BigInt
const max = 9_223_372_036_854_775_807n;

// binary
let binary = 0b1011_0101_0101;

// octal
let octal = 0o1234_5670;

// hex
let hexaDecimal = 0xD0_E0_F0;

console.log(max, binary, octal, hexaDecimal); // 9223372036854775807n 2901 2739128 13689072


