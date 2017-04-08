/**
 * Created by Danpan on 08.04.17.
 */
import {tinkoffToMoneyCSV} from "./lib/readAndWriteCSV";


const csvFilePath = 'april.csv';
// const csvFilePath = '3month.csv';
// const csvFilePath = 'year.csv';
const outputFilePath = "./generated/test.csv";


tinkoffToMoneyCSV(csvFilePath, outputFilePath);

