import { readFileSync } from 'fs';

const lines: string[] = readFileSync('/dev/stdin', 'utf-8').split('\n');
const [N, A, B]: number[] = Array.from(lines[0].split(' '), Number);

const calcNumberSum = (number: number): number => {
  const splitedNumber: number[] = Array.from(number.toString().split(''), Number);
  return splitedNumber.reduce((sum, current) => sum + current);
}

const n: number[] = new Array(N).fill(1).map((n, i) => n + i);
const ansArray: (number | undefined)[] = n.map(number => {
  const numberSum: number = calcNumberSum(number);
  if (A <= numberSum && numberSum <= B) return number;
})

const ans: number | undefined = ansArray.filter(item => item !== undefined)
    .reduce((sum, current) => {
      if (sum && current) return sum + current;
    });
console.log(ans);
