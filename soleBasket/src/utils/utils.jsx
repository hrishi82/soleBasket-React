import {useData} from "../context/dataContext"

export const sortByFilter = (data, state) => {
    let prodData  = [...data]
    if (prodData.length !== 0){
        if (state.filters.sortBy === "LOW_TO_HIGH"){
            return [...prodData].sort((a,b)=> a.price - b.price)
        }else if (state.filters.sortBy === "HIGH_TO_LOW"){
            return [...prodData].sort((a,b)=> b.price - a.price)
        }
    }
    return prodData
}

export const categoryFilter = (data, state) => {
    let prodData  = [...data]
    if (state.filters.categories.length !== 0){
        return prodData.filter(el=>state.filters.categories.includes(el.category))
    }
    return prodData
}

export const genderFilter = (data, state) => {
    let prodData  = [...data]
    if (state.filters.genders.length !== 0){
        return prodData.filter(el=>state.filters.genders.includes(el.gender))
    }
    return prodData
}

export const priceRangeFilter = (data, state) => {
    return data.filter((el) => Number(el.price) <= state.filters.priceRange);
  };

export const ratingFilter = (data, state) => {
    if (state.filters.rating === '') return data;
    const rate = Number(state.filters.rating);
    return data.filter((el) => Number(el.rating) >= rate);
  };
