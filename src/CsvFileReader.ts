import fs from 'fs';
import { MatchesResult } from './domain/MatchResult';
import { dateStringToDate } from './domain/Utils'

type MatchData = [
    Date, string, string, number, number, MatchesResult, string
];

export class CsvFileReader {
    data: MatchData[] = [];

    constructor(public filename: string) {}

    read(): void {
        this.data = fs.readFileSync(this.filename, {
            encoding: 'utf-8'
        })
        .split('\n')
        .map((row: string): Array<string> => {
            return row.split(',')
        })
        .map(this.mapRow);
    }

    mapRow(row: string[]): MatchData {
        return [
           dateStringToDate(row[0]),
           row[1],
           row[2],
           parseInt(row[3]),
           parseInt(row[3]),
           row[5] as MatchesResult,
           row[6]
        ]
   }

}