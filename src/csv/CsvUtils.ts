import fs from 'fs';

export const readMatchesFromCsv = (matchesPath: string): string => fs.readFileSync(matchesPath, {
    encoding: 'utf-8'
});