"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./domain/MatchReader");
const MatchResult_1 = require("./domain/MatchResult");
const matchesPath = './src/resources/football.csv';
const reader = new MatchReader_1.MatchReader(matchesPath);
reader.read();
let manUnitedWins = 0;
for (let match of reader.data) {
    if (match[1] === 'Man United' && match[5] === MatchResult_1.MatchesResult.HOST_WIN) {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === MatchResult_1.MatchesResult.GUEST_WIN) {
        manUnitedWins++;
    }
}
console.log(`
    Manchester United won ${manUnitedWins} matches!
`);
