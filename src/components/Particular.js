import React,{useEffect,useState} from 'react'
import axios from "axios"
import {useParams} from "react-router-dom"
import { Line } from "react-chartjs-2";
// import {useData} from "../contexts/globalState"
 const Particular = () => {
     const {name} = useParams()
     const [data,setData] = useState([])
     const [graphData, setGraphData] = useState([]);
  
    useEffect(()=>
    {
        (async()=>
        {
            try
            {
                const {data} = await axios.get("https://mighty-sands-89627.herokuapp.com/protocol/"+name.toLowerCase())
                setData(data)
                console.log(data.tvl.map(item=>item.date))
                const settingData = data.tvl.map((item,index)=>({...item,date:new Date(data.tvl[index].date * 1000).toLocaleString()}))
               
                setGraphData(settingData)
            }
            catch(error)
            {
                console.log(error)

            }

        })()
       
           
          
    },[])


console.log(graphData.map(d=>d))
console.log(data)
const gData = {
    labels: graphData.map((d) => (d.date ? d.date.split(",")[0] : "1/1/2020")),
    datasets: [
      {
        label: "Defi",
        borderColor: "#1dcf94",
        data: graphData.map((d) =>
          d.totalLiquidityUSD ? d.totalLiquidityUSD / 1000 : 0
        ),
      },
    ],
  };


    return (
        <div>
           <div className="box-shadow-effect" style={{ backgroundColor: "white", padding: "15px" }} >
                <Line
                    data={gData}
                    width={100}
                    height={200}
                    options={{ responsive: true, maintainAspectRatio: false }}
                />
            </div>
            <div style={{display:"flex"}}>

           
            <div className="box-shadow-effect" style={{ backgroundColor: "white", padding: "15px" }} >
                {/* <Line
                    data={data}
                    width={100}
                    height={200}
                    options={{ responsive: true, maintainAspectRatio: false }}
                /> */}
            </div>
            <div>
            <div className="box-shadow-effect" style={{ backgroundColor: "white", padding: "15px" }} >
                {/* <Line
                    data={data}
                    width={100}
                    height={200}
                    options={{ responsive: true, maintainAspectRatio: false }}
                /> */}
            </div>
            <div className="box-shadow-effect" style={{ backgroundColor: "white", padding: "15px" }} >
                {/* <Line
                    data={data}
                    width={100}
                    height={200}
                    options={{ responsive: true, maintainAspectRatio: false }}
                /> */}
            </div>
            </div>
            </div>
            <div className="box-shadow-effect" style={{ backgroundColor: "white", padding: "15px" }} >
               What is {data?.name}?
               <p>
                   {data.description}
               </p>

            </div>
            Trending in Lending
            <div style={{display:"flex"}}>

           
            <div className="box-shadow-effect" style={{ backgroundColor: "white", padding: "15px" }} >
                {/* <Line
                    data={data}
                    width={100}
                    height={200}
                    options={{ responsive: true, maintainAspectRatio: false }}
                /> */}
            </div>
            <div className="box-shadow-effect" style={{ backgroundColor: "white", padding: "15px" }} >
                {/* <Line
                    data={data}
                    width={100}
                    height={200}
                    options={{ responsive: true, maintainAspectRatio: false }}
                /> */}
            </div>
            </div>
            <div style={{display:"flex"}}>

           
<div className="box-shadow-effect" style={{ backgroundColor: "white", padding: "15px" }} >
    {/* <Line
        data={data}
        width={100}
        height={200}
        options={{ responsive: true, maintainAspectRatio: false }}
    /> */}
</div>
<div className="box-shadow-effect" style={{ backgroundColor: "white", padding: "15px" }} >
    {/* <Line
        data={data}
        width={100}
        height={200}
        options={{ responsive: true, maintainAspectRatio: false }}
    /> */}
</div>
</div>
            Aave historical stats
            <div className="box-shadow-effect" style={{ backgroundColor: "white", padding: "15px" }} >
                {/* <Line
                    data={data}
                    width={100}
                    height={200}
                    options={{ responsive: true, maintainAspectRatio: false }}
                /> */}
            </div>
            <div className="box-shadow-effect" style={{ backgroundColor: "white", padding: "15px" }} >
                {/* <Line
                    data={data}
                    width={100}
                    height={200}
                    options={{ responsive: true, maintainAspectRatio: false }}
                /> */}
            </div>
            <div className="box-shadow-effect" style={{ backgroundColor: "white", padding: "15px" }} >
                {/* <Line
                    data={data}
                    width={100}
                    height={200}
                    options={{ responsive: true, maintainAspectRatio: false }}
                /> */}
            </div>
        </div>
    )
}

export default Particular