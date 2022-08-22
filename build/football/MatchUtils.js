"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAllWonMatches = exports.splitRowToMatch = exports.splitMatchesToRows = exports.parseMatches = void 0;
const Match_1 = require("./domain/Match");
const HOST_WINNER = 'H';
const GUEST_WINNER = 'A';
const parseMatches = (matches) => {
    const matchesList = (0, exports.splitMatchesToRows)(matches);
    return matchesList.map(exports.splitRowToMatch);
};
exports.parseMatches = parseMatches;
const splitMatchesToRows = (matches) => {
    return matches.split('\n');
};
exports.splitMatchesToRows = splitMatchesToRows;
const splitRowToMatch = (match) => {
    return new Match_1.Match(match.split(','));
};
exports.splitRowToMatch = splitRowToMatch;
const findAllWonMatches = (teamName, matches) => {
    return matches.filter(match => {
        return checkIfTeamWon(teamName, match);
    });
};
exports.findAllWonMatches = findAllWonMatches;
const checkIfTeamWon = (teamName, match) => {
    return (match.host === teamName && checkIfHostWon(match)) ||
        (match.guest === teamName && checkIfGuestWon(match));
};
// const checkIfHostWonByGoals = (match: Match): boolean => {
//     return match.hostGoals > match.guestGoals;
// }
// const checkIfGuestWonByGoals = (match: Match): boolean => {
//     return match.guestGoals > match.hostGoals;
// }
const checkIfHostWon = (match) => {
    return match.result === HOST_WINNER;
};
const checkIfGuestWon = (match) => {
    return match.result === GUEST_WINNER;
};
