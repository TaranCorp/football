"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const MatchUtils_1 = require("./football/MatchUtils");
const matches = fs_1.default.readFileSync('./src/resources/football.csv', {
    encoding: 'utf-8'
});
const matchesList = (0, MatchUtils_1.parseMatches)(matches);
console.log((0, MatchUtils_1.findAllWonMatches)('Man United', matchesList).length);
