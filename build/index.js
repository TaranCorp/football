"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFileReader_1 = require("./CsvFileReader");
const matchesPath = './src/resources/football.csv';
const reader = new CsvFileReader_1.CsvFileReader(matchesPath);
reader.read();
var MatchesResult;
(function (MatchesResult) {
    MatchesResult["HOST_WIN"] = "H";
    MatchesResult["GUEST_WIN"] = "A";
    MatchesResult["DRAW"] = "D";
})(MatchesResult || (MatchesResult = {}));
let manUnitedWins = 0;
for (let match of reader.data) {
    if (match[1] === 'Man United' && match[5] === MatchesResult.HOST_WIN) {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === MatchesResult.GUEST_WIN) {
        manUnitedWins++;
    }
}
console.log(`
    Manchester United won ${manUnitedWins} matches
`);
