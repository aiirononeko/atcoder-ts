import fs from 'fs';

const lines: string[] = fs.readFileSync('/dev/stdin', 'utf-8').split(/\s/);
const sum: number = +lines[0] + +lines[1] + +lines[2];
console.log(`${sum} ${lines[3]}`);
console.log('%d %s', sum, lines[3]);

