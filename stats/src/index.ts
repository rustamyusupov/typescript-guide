import fs from 'fs';

const matches = fs
  .readFileSync('football.csv', { encoding: 'utf-8' })
  .split('\n')
  .map((row: string): string[] => row.split(','));

const manUnitedWins = matches.reduce(
  (acc: number, cur: string[]): number =>
    (cur[1] === 'Man United' && cur[5] === 'H') ||
    (cur[2] === 'Man United' && cur[5] === 'A')
      ? (acc += 1)
      : acc,
  0
);

console.log(`Man United won ${manUnitedWins} games`);
