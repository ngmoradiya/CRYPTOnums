import { createContext,useState,useContext } from "react";

export const GlobalState = createContext();


export const DataProvider =({children})=>
{
    const [totalValue,setTotal] = useState(0);
    const [tableData, setTableData] = useState([]);
    const [maxDetails,setMax] = useState({name:"",percentage:0})
    const [category,setCategory] = useState("")
return (
<GlobalState.Provider value={{totalValue,setTotal,maxDetails,setMax,category,setCategory,tableData, setTableData}}>
    {children}
</GlobalState.Provider>

)

}

export const useData=()=>
{
    return useContext(GlobalState)
}