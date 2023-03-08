import { readFileSync } from 'fs';

const lines: string[] = readFileSync('/dev/stdin', 'utf-8').split('\n');
const s: number[] = Array.from(lines[0].split(''), Number);

let answer: number = 0;
s.forEach(e => {
  if (e === 1) {
    answer++;
  }
})
console.log(answer);
