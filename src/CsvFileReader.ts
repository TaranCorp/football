import fs from 'fs';

export class CsvFileReader {
    data: string[][] = [];

    constructor(public filename: string) {}

    abstract mapRow(row: string[]): T

    read(): void {
        this.data = fs.readFileSync(this.filename, {
            encoding: 'utf-8'
        })
        .split('\n')
        .map((row: string): string[] => {
            return row.split(',')
        });
    }
}