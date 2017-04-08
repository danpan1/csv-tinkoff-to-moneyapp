import {
    category, nalichnost, nalichnostKuda, opisanie, parsedCategory, summaKuda,
    summaOperation
} from "../constants/headers";
import {TinkoffExportCSV} from "../iterfaces/interfaces";
import {Drugoe, Transport} from "../constants/categories";

const TINKOFF_nalichnost = 'ТИНЬКОФФ';
const Karina_tinkoff_nalichnost = 'Карина тиньков';
const Nalichnue_nalichnost = 'Наличные';
const Alfa_forex_nalichnonst = 'Альфа форекс';
const Alfa_bank_run_nalichnost = 'Альфа банк руб';

const notHiddenTransactions = false;
export function setTransaction(data) {
    if (data[category] === "Переводы/иб"
        || data[category] === "Переводы"
        || data[opisanie].includes('Пополнение Tinkoff')
        || data[opisanie].includes('Погорелова Карина')
        || data[opisanie].includes('Перевод на карту')
        || data[opisanie].includes('Снятие наличных')
        || data[opisanie].includes('ALFA_MOBILE')
    ) {
        data["Тип транзакции"] = "Перевод средств";
        //todo remove
        data[parsedCategory] = notHiddenTransactions;
        setAccountTo(data);
        setTypeForUnknownTransactions(data);
        // delete data[category];

    } else if (data[summaOperation] < 0) {
        data["Тип транзакции"] = "Расход";
        data[nalichnost] = TINKOFF_nalichnost;
    } else {
        data["Тип транзакции"] = "Доход";
        setDohod(data);
        // data[parsedCategory] = true;
    }
}

function setTypeForUnknownTransactions(data) {
    if (data[opisanie] === 'Денис Тиньков' && data[category] === 'Переводы/иб') {
        data["Тип транзакции"] = "Расход";
        data[nalichnost] = TINKOFF_nalichnost;
        data[category] = Transport + '(' + Drugoe + ')';
        // предположение - поэтому notparsed
        //todo remove
        data[parsedCategory] = notHiddenTransactions;
    }

}
function setAccountTo(data) {
    if (data[opisanie] === 'Карина тиньков') {
        perevodSredstv(data, TINKOFF_nalichnost, Karina_tinkoff_nalichnost);
    } else if (data[opisanie] === "Погорелова Карина") {
        perevodSredstv(data, Karina_tinkoff_nalichnost, TINKOFF_nalichnost);
    } else if (data[opisanie].includes("Снятие наличных")) {
        perevodSredstv(data, TINKOFF_nalichnost, Nalichnue_nalichnost);
    } else if (data[opisanie].includes("Альфа форекс")) {
        // todo создать перевод средств на счёт Альфа форекс
        perevodSredstv(data, TINKOFF_nalichnost, Alfa_forex_nalichnonst);
    } else if (data[opisanie].includes("CARD2CARD ALFA_MOBILE")) {
        perevodSredstv(data, TINKOFF_nalichnost, Alfa_bank_run_nalichnost);
    }

}

function perevodSredstv(data, from, to) {
    data[nalichnost] = from;
    data[nalichnostKuda] = to;
    data[summaKuda] = data[summaOperation];
    data[parsedCategory] = true;
}

function setDohod(data: TinkoffExportCSV) {
    if (data[opisanie].includes('Проценты на остаток по счету')
        || data[opisanie].includes('Вознаграждение за операции покупок')
        || data[opisanie].includes('Бонус по акции')
    ) {
        data[category] = 'Доход(Банк проценты)';
        data[nalichnost] = TINKOFF_nalichnost;
        data[parsedCategory] = true;
    }
    // todo fix 51900 Зарплата
    if (data[opisanie].includes('Перевод c карты другого банка') && data[summaOperation] > 51900 && data[summaOperation] < 62000) {
        data[nalichnost] = TINKOFF_nalichnost;
        data[category] = 'Доход(Зарплата)';
        data[parsedCategory] = true;
    } else if (data[opisanie].includes('Перевод c карты другого банка')) {
        // предположение - поэтому notparsed
        data[nalichnost] = Alfa_bank_run_nalichnost;
        data[nalichnostKuda] = TINKOFF_nalichnost;
        data[summaKuda] = data[summaOperation];
        //todo remove
        data[parsedCategory] = notHiddenTransactions;
    }
    // todo создать перевод средств на счёт вклада
    if (data[opisanie].includes('Капитализация')) {
        data[nalichnost] = TINKOFF_nalichnost;
        data[category] = 'Доход(Банк проценты)';
        data[parsedCategory] = true;
    }
}