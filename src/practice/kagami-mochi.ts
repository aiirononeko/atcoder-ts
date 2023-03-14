import { readFileSync } from 'fs';

const lines: string[] = readFileSync('/dev/stdin', 'utf-8').split('\n');
const N: number = +lines[0];

let d: number[] = [];
for (let i: number = 0; i < N; i++) {
  d.push(+lines[i + 1]);
}

const ansArray: number[] = [...new Set(d)];
console.log(ansArray.length);
