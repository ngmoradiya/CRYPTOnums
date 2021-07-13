import axios from "../axios";
import React, { useEffect } from "react";
import MaterialTable from "material-table"

import {useData} from "../contexts/globalState"
import {Link} from "react-router-dom"
function DefiTable() {
  
  const {setTotal,setMax,category,tableData, setTableData} = useData();
 
  const columns = [
    {
        title:"S.No",field:"sNo"
    },
    {
        title:"Name",field:"name",render:rowData=> <Link style={{textDecoration:"none",cursor:"pointer",color:"black"}} to={`/${rowData.name}`}>{rowData.name}</Link> 
    },
    {
        title:"Chain",field:"chain"
    },
    {
        title:"Category",field:"category"
    },
    {
        title:"Locked(USD)",field:"tvl"
    },
    {
      title:"1Day(%)",field:"1day"
    }
    
]


 

  const filterDataDataByCategory=(tableData,category)=>
  {
    if(category)
    {
      const filteredData = tableData.filter(item=>item.category===category);
      return filteredData;
    }
    else
  {
    return tableData
  }
   

  }
  useEffect(()=>
  {
    if(tableData.length>0)
    {

      let sum = 0;
      let max = 0;
      let dominance = "";
     
      tableData.forEach(item=>
        
        {
          let amount ;
        //  let unit;
         
          if(item.tvl!==0)
          {

          
   amount = item.tvl.substring(0,item.tvl.length-1);
    //  unit = item.tvl.charAt(item.tvl.length-1)
          }
        
            // if(unit==="B")
            // {
            
            //   sum = sum+Number(amount)
            // }
            // else if(unit ==="M")
            // {
            //   amount = amount/1000;
            //   sum=sum +amount;

            // }
            // else{
            //   amount = amount/1000000;
            // }
            sum = sum + Number(amount);
            if (max < Number(amount))
            {
              max = Number(amount);
              dominance = item.name;
              

            }

        })
        const percentage =( (max/sum)*100).toFixed(2);
     
     setMax({name:dominance,percentage})
     setTotal(sum);
    }
  },[tableData,setMax,setTotal])
  useEffect(() => {
    axios
      .get("protocols/")
      .then((data) =>{
        
        
       
        const setData = data.data.map((item,index)=>{
          console.log(typeof item.tvl.toString())
          if(item.tvl!==0)
          {
          let amount = item.tvl.substring(0,item.tvl.length-1)
          console.log(typeof amount)
          let tvl = item.tvl.includes("M")? (Number(amount)*0.001).toFixed(6)+"B" : item.tvl.includes("K") ?(Number(amount)*0.000001).toFixed(6)+"B": item.tvl
        console.log(tvl)
          return {...item,"sNo":index+1,"1day":"null",tvl:tvl}
          }
          return {...item,"sNo":index+1,"1day":"null"}
        
        })
        console.log(setData,"hhh")
        const sortedData = setData.sort(function(a,b){
           if(a.tvl!==0 && b.tvl!==0)
           return b.tvl.substring(0,b.tvl.length-1) - a.tvl.substring(0,a.tvl.length-1);
           else return b-a
        })
        
        const finalSet = sortedData.map((item,index)=>({...item,"sNo":index+1,"1day":"null"}))
        
       
        setTableData(finalSet)})
      .catch((err) => console.log(err));
  }, [setTableData]);

 

const filteredData = filterDataDataByCategory(tableData,category)
console.log(tableData)
  return (
    <div style={{ overflow: "auto", paddingTop: "10px" }}>
     <MaterialTable  
        data={filteredData} columns={columns}/> 
    
    </div>
  )
}

export default DefiTable;
