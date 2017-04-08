import {IdValue} from "../iterfaces/interfaces";
import {mappingCategory, mappingSubCategory} from "../constants/categories";
/**
 * Created by Danpan on 08.04.17.
 */
export function removeDataByKeys(object: any, keys: string[]) {
    for (let key in object) {
        if (keys.indexOf(key) === -1) delete object[key];
    }
    return object;


}
export function objectToArr(object): IdValue[] {
    let result: IdValue[] = [];
    for (let key in object) {
        object[key].forEach((item) => result.push({id: key, value: item}));
    }
    return result;
}

const mappingByCategory = objectToArr(mappingCategory);
const mappingBySubCategory = objectToArr(mappingSubCategory);
export function findCategoryItem(category, opisanie){

    const categoryX:IdValue = mappingByCategory.find((item)=> item.value === category);
    if(categoryX){
        return categoryX.id;
    }

    const opisanieX:IdValue = mappingBySubCategory.find((item)=> item.value === opisanie);
    if(opisanieX){
        return opisanieX.id;
    }
    return null;
}