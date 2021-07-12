import axios from "../axios";
import React, { useEffect } from "react";
import MaterialTable from "material-table"
import {useData} from "../contexts/globalState"
import {Link} from "react-router-dom"
function DefiTable() {
  
  const {setTotal,setMax,category,tableData, setTableData} = useData();
  const columns = [
    {
        title:"S.No",field:"#"
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
      title:"1Day(%)",field:""
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
         let unit;
         
          if(item.tvl!==0)
          {

          
   amount = item.tvl.substring(0,item.tvl.length-1);
     unit = item.tvl.charAt(item.tvl.length-1)
          }
        
            if(unit==="B")
            {
            
              sum = sum+Number(amount)
            }
            else if(unit ==="M")
            {
              amount = amount/1000;
              sum=sum +amount;

            }
            else{
              amount = amount/1000000;
            }
            if (max < Number(amount))
            {
              max = Number(amount);
              dominance = item.name;
              

            }

        })
        const percentage =( (max/sum)*100).toPrecision(4);
     
     setMax({name:dominance,percentage})
     setTotal(sum);
    }
  },[tableData])
  useEffect(() => {
    axios
      .get("protocols/")
      .then((data) =>{
        
        const setData = data.data.map((item,index)=>({...item,"#":index+1}))
        setTableData(setData)})
      .catch((err) => console.log(err));
  }, []);

 
console.log(tableData)
const filteredData = filterDataDataByCategory(tableData,category)
  return (
    <div style={{ overflow: "auto", paddingTop: "10px" }}>
      <MaterialTable title="Crypto Nums"  options={{paging:false}} data={filteredData} columns={columns} />
    </div>
  );
}

export default DefiTable;
