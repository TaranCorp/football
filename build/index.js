"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFileReader_1 = require("./CsvFileReader");
const matchesPath = './src/resources/football.csv';
const reader = new CsvFileReader_1.CsvFileReader(matchesPath);
reader.read();
