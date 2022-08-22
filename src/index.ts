import { CsvFileReader } from "./CsvFileReader";

const matchesPath = './src/resources/football.csv';

const reader = new CsvFileReader(matchesPath);
reader.read();

enum MatchesResult {
    HOST_WIN = 'H',
    GUEST_WIN = 'A',
    DRAW = 'D'
}

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


