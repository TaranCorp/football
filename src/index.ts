import { CsvFileReader } from "./CsvFileReader";
import { MatchesResult } from "./domain/MatchResult";

const matchesPath = './src/resources/football.csv';

const reader = new CsvFileReader(matchesPath);
reader.read();

let manUnitedWins = 0;

for (let match of reader.data) {
    if (match[1] === 'Man United' && match[5] === MatchesResult.HOST_WIN) {
        manUnitedWins++;
    } else if (match[2] === 'Man United' && match[5] === MatchesResult.GUEST_WIN) {
        manUnitedWins++;
    }
}

console.log(`
    Manchester United won ${manUnitedWins} matches 
`)


