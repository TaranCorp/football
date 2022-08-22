"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Match = void 0;
class Match {
    constructor(data) {
        this.date = new Date(data[0]);
        this.host = data[1];
        this.guest = data[2];
        this.hostGoals = parseFloat(data[3]);
        this.guestGoals = parseFloat(data[4]);
        this.result = data[5];
        this.arbiter = data[6];
    }
}
exports.Match = Match;
