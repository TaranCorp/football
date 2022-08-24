"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchReader = void 0;
const Utils_1 = require("./Utils");
class MatchReader {
    constructor(reader) {
        this.reader = reader;
        this.matches = [];
    }
    load() {
        this.reader.read();
        this.matches = this.reader.data
            .map((row) => {
            return [
                (0, Utils_1.dateStringToDate)(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[3]),
                row[5],
                row[6]
            ];
        });
    }
}
exports.MatchReader = MatchReader;
