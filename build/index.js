"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchUtils_1 = require("./football/MatchUtils");
const CsvUtils_1 = require("./Csv/CsvUtils");
const matchesPath = './src/resources/football.csv';
const matches = (0, CsvUtils_1.readMatchesFromCsv)(matchesPath);
const matchesList = (0, MatchUtils_1.parseMatches)(matches);
console.log((0, MatchUtils_1.findAllWonMatches)('Man United', matchesList).length);
