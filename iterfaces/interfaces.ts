/**
 * Created by Danpan on 08.04.17.
 */

export interface MoneyAppImport {
    "Дата операции": string,
    "Сумма операции": number,
    "Категория": string,
    "Описание": string,
    "Сумма (куда)": string,
    "Наличность (куда)": string,
    "Наличность": string,
    "Тип транзакции": string
}
export interface IdataAllLength {
    count: number
}

export interface IdValue {
    id: string;
    value: string;
}

export interface TinkoffExportCSV {
    "Дата операции": string,  // "08.04.2017 00:07:46"
    "Дата платежа": string,   // "08.04.2017 00:00:00"
    "Номер карты": string,    // "*3283"
    "Статус": string,         // "OK"
    "Сумма операции": any, // "-15000,00"
    "Валюта операции": string, // "RUB"
    "Сумма платежа": string,  // "-15000,00"
    "Валюта платежа": string, // "RUB"
    "Кэшбэк": string,         // ""
    "Категория": string,      // "Переводы/иб"
    "MCC": string,            // ""
    "Описание": string,       // "Карина тиньков"
    "Бонусы (включая кэшбэк)": number, // "0,00
}