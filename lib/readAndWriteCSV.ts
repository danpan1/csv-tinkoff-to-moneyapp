/**
 * Created by Danpan on 08.04.17.
 */
import {parse, stringify} from 'csv';
import * as fs from 'fs';
import {Iconv} from 'iconv';
import {dataParse} from './transformData';
import * as parseType from '@types/csv-parse';
import { parsedCategory} from "../constants/headers";
import {IdataAllLength} from "../iterfaces/interfaces";

const csvData = [];
const dataAllLength:IdataAllLength = {count : 0};
const options: parseType.Options = {
    delimiter: ';',
    auto_parse_date: true,
    columns: true,
};

export function writeToFile(filePath: string, data: string, err?: any): void {
    fs.writeFile(filePath, data, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("The file fwas saved!");
    });
}

export const writeCSVtoFile = (outputPath: string, data: any, dataAllLength: IdataAllLength) => (): void => {
    const jsonOutput = outputPath.replace('test', 'testJSON');
    const notParsedCSVpath = outputPath.replace('test', 'testNotParsed');
    const notParsedData = data.filter(item => !item[parsedCategory]);
    const parsedData = data.filter(item => item[parsedCategory]);
    console.log('Transactions', {
        total : dataAllLength.count,
        parsed : notParsedData.length,
        notParsed : parsedData.length,
        removed : dataAllLength.count - data.length,
    });
    writeToFile(jsonOutput, JSON.stringify(notParsedData, null, 2));

    stringify(parsedData, {
        delimiter: ';',
        header: true
    }, function (err, newCsv) {
        writeToFile(outputPath, newCsv, err)
    });

    stringify(notParsedData, {
        delimiter: ';',
        header: true
    }, function (err, newCsv) {
        writeToFile(notParsedCSVpath, newCsv, err)
    });
};

export function tinkoffToMoneyCSV(inputPath: string, outputPath: string): void {
    fs.createReadStream(inputPath)
    //change encoding from cyrilic to utf
        .pipe(new Iconv('cp1251', 'UTF-8'))
        //parse csv
        .pipe(parse(options))
        //perform transform with 1 data object
        .on('data', dataParse(csvData, dataAllLength))
        // writeToFile
        .on('end', writeCSVtoFile(outputPath, csvData, dataAllLength));
}
