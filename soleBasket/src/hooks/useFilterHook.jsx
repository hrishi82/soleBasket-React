import {useData} from "../context/dataContext"

import {
    sortByFilter, 
    categoryFilter, 
    genderFilter,
    priceRangeFilter,
    ratingFilter,
    collectionFilter  } from "../utils/utils"

export const useFilterHook = () =>{
    const {state}  = useData()
    let data = [...state.products]
    data = sortByFilter(data, state)
    data = categoryFilter(data, state)
    data = collectionFilter(data, state)
    data = genderFilter(data, state)
    data = priceRangeFilter(data, state)
    data = ratingFilter(data, state)
    return { filteredData : data}
}


