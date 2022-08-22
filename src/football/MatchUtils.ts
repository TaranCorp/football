import { Match } from "./domain/Match";

const HOST_WINNER = 'H';
const GUEST_WINNER = 'A';

export const parseMatches = (matches: string): Match[] => {
    const matchesList = splitMatchesToRows(matches);
    return matchesList.map(splitRowToMatch);
}

export const splitMatchesToRows = (matches: string): string[] => {
    return matches.split('\n');
}

export const splitRowToMatch = (match: string): Match => {
    return new Match(
        match.split(',')
    );
}

export const findAllWonMatches = (teamName: string, matches: Match[]): Match[] => {
    return matches.filter(match => {
        return checkIfTeamWon(teamName, match);
    });
}

        
const checkIfTeamWon = (teamName: string, match: Match): boolean => {
    return (match.host === teamName && checkIfHostWon(match)) || 
            (match.guest === teamName && checkIfGuestWon(match))
}

// const checkIfHostWonByGoals = (match: Match): boolean => {
//     return match.hostGoals > match.guestGoals;
// }

// const checkIfGuestWonByGoals = (match: Match): boolean => {
//     return match.guestGoals > match.hostGoals;
// }

const checkIfHostWon = (match: Match): boolean => {
    return match.result === HOST_WINNER;
}

const checkIfGuestWon = (match: Match): boolean => {
    return match.result === GUEST_WINNER;
}