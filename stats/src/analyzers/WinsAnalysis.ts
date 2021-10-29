import { Analyzer } from '../Summary';
import { MatchData, MatchResult } from '../types';

export class WinsAnalysis implements Analyzer {
  constructor(public team: string) {}

  run(matches: MatchData[]): string {
    const wins = matches.reduce(
      (acc: number, cur: MatchData): number =>
        (cur[1] === this.team && cur[5] === MatchResult.HomeWin) ||
        (cur[2] === this.team && cur[5] === MatchResult.AwayWin)
          ? (acc += 1)
          : acc,
      0
    );

    return `${this.team} won ${wins} games`;
  }
}
