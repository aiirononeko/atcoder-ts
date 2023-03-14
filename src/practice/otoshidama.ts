import { readFileSync } from 'fs';

const lines: string[] = readFileSync('/dev/stdin', 'utf-8').split('\n');
const [N, Y]: number[] = Array.from(lines[0].split(' '), Number);

let ans: string = '';
for (let x10: number = 0; x10 <= N; x10++) {
  for (let x5: number = 0; x5 <= N - x10; x5++) {
    const x1: number = N - x10 - x5;
    const sum: number = 10000 * x10 + 5000 * x5 + 1000 * x1;
    if (sum > Y) break;
    if (sum === Y) ans = `${x10} ${x5} ${x1}`;
  }
}

if (ans === '') ans = '-1 -1 -1'

console.log(ans);
