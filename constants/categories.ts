/**
 * Created by Danpan on 08.04.17.
 */
export const Eda = "Еда";
    export const Stolovka = "Столовка";
    export const Supermarket = "Супермаркет";
    export const Fastfood = "Фастфуд";
    export const DlyaTysovochku = "для тусовочки";
    export const Restaurant = "Рестораны";
export const Transport = "Транспорт";
    export const Obshetvenyy = "Общественный";
    export const Benzin = "Бензин";
    export const Drugoe = "Другое";
export const Semya = "Семья";
    export const Givotnie = "Животные";
    export const Karina = "Карина";
    export const PodarkiIblago = "Подарки и благо";
export const Zdorovie = "Здоровье";
    export const Medicine = "Медицина";
    export const Sport = "Спорт";
    export const Yoga = "Йога";
export const Razvlechenuya = "Развлечения";
    export const Kino = "Кино";
export const Pokupki = "Покупки";
    export const Programmi = "Программы";
export const Puteshestviya = "Путешествия";
    export const Bileti = "Билеты";
    export const Gilie = "Жильё";
    export const TransportP = "Транспорт";
export const Dom = "Дом";
    export const Electrichestvo = "Электричество";
    export const Bankovskie = "Банковские";


export const mappingCategory = {};
mappingCategory[Zdorovie + '(' + Medicine + ')'] = ['Аптеки', 'Мед. услуги'];
mappingCategory[Eda + '(' + Supermarket + ')'] = ['Супермаркеты'];
mappingCategory[Semya + '(' + Givotnie + ')'] = ['Животные'];
mappingCategory[Razvlechenuya + '(' + Kino + ')'] = ['Кино'];
mappingCategory[Transport + '(' + Benzin + ')'] = ['Топливо'];
mappingCategory[Puteshestviya + '(' + Bileti + ')'] = ['Отели'];
mappingCategory[Puteshestviya + '(' + Gilie + ')'] = ['Авиабилеты'];
mappingCategory[Puteshestviya + '(' + TransportP + ')'] = ['Аренда авто'];

export const mappingSubCategory = {};
mappingSubCategory[Eda + '(' + Stolovka + ')'] = ['KTRV STOLOVAYA 2'];
mappingSubCategory[Eda + '(' + Restaurant + ')'] = ['Две палочки', 'BURGER FISRT', 'KAFE STUDII LEBEDEVA'];
mappingSubCategory[Eda + '(' + Supermarket + ')'] = ['Пятерочка'];
mappingSubCategory[Transport + '(' + Obshetvenyy + ')'] = ['ЦППК', 'YM*YandexTaxi'];
mappingSubCategory[Semya + '(' + Givotnie + ')'] = ['CHETYRE LAPY'];
mappingSubCategory[Pokupki + '(' + Programmi + ')'] = ['APPIGO TODO ONLINE', 'Apple', 'YM*jetbrains'];
mappingSubCategory[Dom + '(' + Electrichestvo + ')'] = ['Электроэнергия Пушкинская'];
mappingSubCategory[Dom + '(' + Bankovskie + ')'] = ['Плата за предоставление услуги SMS-банк'];

