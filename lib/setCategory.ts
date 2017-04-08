/**
 * Created by Danpan on 08.04.17.
 */
import {category, opisanie, parsedCategory} from "../constants/headers";
import {findCategoryItem} from "../lib/utils";


export function setCategory(data) {
    const categoryName = findCategoryItem(data[category], data[opisanie]);
    if(categoryName){
        data[category] = categoryName;
        data[parsedCategory] = true;
    }
}

