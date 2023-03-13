import { readFileSync } from 'fs';

const lines: string[] = readFileSync('/dev/stdin', 'utf-8').split('\n');
const N: number = +lines[0];
const a: number[] = Array.from(lines[1].split(' '), Number);

let aliceCount: number = 0;
let bobCount: number = 0;
const cards: number[] = [...a].concat().sort((a, b) => b - a);
for (let i: number = 0; i < N; i++) {
  if (i % 2 !== 0) {
    bobCount += cards[i]
  } else {
    aliceCount += cards[i]
  }
}

const ans: number = aliceCount - bobCount;
console.log(ans);
