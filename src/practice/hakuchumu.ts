import { readFileSync } from 'fs';

const lines: string[] = readFileSync('/dev/stdin', 'utf-8').split('\n');
const S: string = lines[0];
let T: string = '';

const searchStrs: string[] = ['dream', 'dreamer', 'erase', 'eraser'];
let ans: string = 'YES';
while (true) {
  let target: string = S.slice(0, S.length);
  let i: number = 0;
  if (target === searchStrs[i]) break;
  if (target.endsWith(searchStrs[i])) {
    target = target.substr(0, target.length - searchStrs[i].length);
    i = 0;
  } else {
    i++;
    if (i >= 4) ans = 'NO';
    break;
  }
}

console.log(ans);
console.log(ans);
