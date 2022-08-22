"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.readMatchesFromCsv = void 0;
const fs_1 = __importDefault(require("fs"));
const readMatchesFromCsv = (matchesPath) => fs_1.default.readFileSync(matchesPath, {
    encoding: 'utf-8'
});
exports.readMatchesFromCsv = readMatchesFromCsv;
