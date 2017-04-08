/**
 * Created by Danpan on 08.04.17.
 */
import {removeDataByKeys} from "./utils";
import {setCategory} from "./setCategory";
import {TinkoffExportCSV} from "../iterfaces/interfaces";
import {finalKeys, opisanie, category, status, summaOperation} from "../constants/headers";
import {setTransaction} from "./setTransaction";


export const dataParse = (array) => (data: TinkoffExportCSV) => {
    if(data[status] !== "OK") return;
    if (data[category] === "Переводы" && data[opisanie].includes('Перевод c карты другого' +
            ' банка')){
//duplicate operation когда перевожу сам себе. создается 2 операции. + и - сумма
        return;
    } 
    data[summaOperation] = parseInt(data[summaOperation]);
    setTransaction(data);
    setCategory(data);
    array.push(removeDataByKeys(data, finalKeys));
};
