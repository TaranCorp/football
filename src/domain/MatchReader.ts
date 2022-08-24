import { CsvFileReader } from "../CsvFileReader";
import { MatchesResult } from "./MatchResult";
import { dateStringToDate } from "./Utils";

export type MatchData = [
    Date, string, string, number, number, MatchesResult, string
];

export class MatchReader extends CsvFileReader<MatchData> {
    constructor(filename: string) {
        super(filename);
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