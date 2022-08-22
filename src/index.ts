import {findAllWonMatches, parseMatches } from './football/MatchUtils';
import {readMatchesFromCsv} from './csv/CsvUtils'

const matchesPath = './src/resources/football.csv';

const matches = readMatchesFromCsv(matchesPath);

const matchesList = parseMatches(matches);

console.log(
    findAllWonMatches('Man United', matchesList).length
)

