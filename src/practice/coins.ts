import { readFileSync } from 'fs';

const lines: string[] = readFileSync('/dev/stdin', 'utf-8').split('\n');
const A: number = +lines[0];
const B: number = +lines[1];
const C: number = +lines[2];
const X: number = +lines[3];

let ans = 0;
for (let a = 0; a <= A; a++) {
  for (let b = 0; b <= B; b++) {
    for (let c = 0; c <= C; c++) {
      const sum = (500 * a) + (100 * b) + (50 * c);
      if (sum === X) ans++;
    }
  }
}
console.log(ans);

