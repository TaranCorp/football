import { MatchesResult } from "./MatchResult";
import { dateStringToDate } from "./Utils";

interface DataReader {
    data: string[][],
    read(): void;
}

type MatchData = [
    Date, string, string, number, number, MatchesResult, string
];

export class MatchReader {
    matches: MatchData[] = [];
    constructor(public reader: DataReader) {}

    load(): void {
        this.reader.read();

        this.matches = this.reader.data
            .map((row: string[]): MatchData => {
                return [
                    dateStringToDate(row[0]),
                    row[1],
                    row[2],
                    parseInt(row[3]),
                    parseInt(row[3]),
                    row[5] as MatchesResult,
                    row[6]
                ]
            });
    }

}