import fs from 'fs';
import {findAllWonMatches, parseMatches } from './football/MatchUtils';

const matches = fs.readFileSync('./src/resources/football.csv', {
    encoding: 'utf-8'
});

const matchesList = parseMatches(matches);

console.log(
    findAllWonMatches('Man United', matchesList).length
)

