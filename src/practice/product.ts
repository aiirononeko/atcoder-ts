import { readFileSync } from 'fs';

const lines: string[] = readFileSync('/dev/stdin', 'utf-8').split('\n');
const [a, b]: number[] = Array.from(lines[0].split(' '), Number);

const mul: number = a * b;
let ans: "Even" | "Odd" = "Even";
if (mul % 2 !== 0) {
  ans = "Odd";
}
console.log(ans);
