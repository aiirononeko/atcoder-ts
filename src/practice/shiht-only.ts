import { readFileSync } from 'fs';

const lines: string[] = readFileSync('/dev/stdin', 'utf-8').split('\n');
const n: number = +lines[0];
const a: number[] = Array.from(lines[1].split(' '), Number);

const countEvenNums = (numArray: number[]): number => {
  const count: number = numArray.reduce((total: number, cur: number): number => {
    if (cur % 2 === 0) return total + 1;
    return total;
  }, 0);
  return count;
}

let answer: number = 0;
let numbers: number[] = a.slice(0, n);
while (countEvenNums(numbers) === n) {
  numbers = numbers.map((n: number): number => n / 2 );
  answer++;
}
console.log(answer);
