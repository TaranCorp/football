import { CsvFileReader } from "./CsvFileReader";

const matchesPath = './src/resources/football.csv';

const reader = new CsvFileReader(matchesPath);
reader.read();


