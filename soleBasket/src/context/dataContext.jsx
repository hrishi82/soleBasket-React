import axios from 'axios';
import { useReducer, useContext, createContext, useEffect, useState } from "react";
import {dataReducerFunc, initialState } from "../reducer/dataReducer";
import {GetData} from "../services/services";

const DataContext = createContext();

const DataProvider = ({ children }) => {
    const [state, dispatch] = useReducer(dataReducerFunc, initialState)
    const [loader, setLoader] = useState(false);

    function removeLoader(){
        setLoader(false)
    }

    useEffect(()=>{
        setLoader(true);
        (async()=>{
            let productResult = await GetData()
            if (productResult.status === 200 || productResult.status === 201){
                dispatch({type: 'ALL_PRODUCTS_DATA_FROM_SERVER', payload: productResult.data.products})
            }
            setLoader(false)
        })();
        
    }, [])
  return <DataContext.Provider value={{state, dispatch, loader, removeLoader}}>{children}</DataContext.Provider>;
};

const useData = () => useContext(DataContext)

export {useData,DataProvider}
