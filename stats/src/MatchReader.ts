import { CsvFileReader } from './CsvFileReader';
import { MatchData, MatchResult } from './types';
import { dateStringToDate } from './utils';

interface DataReader {
  data: string[][];
  read(): void;
}

export class MatchReader {
  static fromCsv(fileName: string): MatchReader {
    return new MatchReader(new CsvFileReader(fileName));
  }

  matches: MatchData[] = [];

  constructor(public reader: DataReader) {}

  load(): void {
    this.reader.read();
    this.matches = this.reader.data.map(
      (row: string[]): MatchData => [
        dateStringToDate(row[0]),
        row[1],
        row[2],
        parseInt(row[3]),
        parseInt(row[4]),
        row[5] as MatchResult,
        row[6],
      ]
    );
  }
}
