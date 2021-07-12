import React,{useState} from "react";
import "./style.css";
import { Card } from "react-bootstrap";
import Table from "./DefiTable";
import {useData} from "../contexts/globalState"

function Category() {
  const {category,setCategory} = useData();
  const [isSelected,setSelected] = useState({boolean:false,cate:""});
const selectHandler = (category)=>
{
  
  if(isSelected.boolean && category===isSelected.cate)
  { 
  setCategory("")
  setSelected({boolean:false,cate:""})
  }
 else
 {
  setCategory(category)
  setSelected({boolean:true,cate:category})
 }
 


}


  return (
    <>
    <div className="row g-2">
      <div className="col-sm-6">
        <div className="row g-2">
          <div className="col-sm-3">
            <Card style={{backgroundColor:category ==="Lending"?"#fdfff5":"white",cursor:"pointer"}} className="card-item-center">
              <Card.Body style={{ padding: "7px 5px 3px 5px" }}>
                <h6   onClick={()=>selectHandler("Lending")}>Lending</h6>
              </Card.Body>
            </Card>
          </div>
          <div className="col-sm-3">
            <Card style={{backgroundColor:category ==="Dexes"?"#fdfff5":"white",cursor:"pointer"}} className="card-item-center">
              <Card.Body style={{ padding: "7px 5px 3px 5px" }}>
                <Card.Text>
                  <h6  onClick={()=>selectHandler("Dexes")}>Dexes</h6>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-sm-3">
            <Card style={{backgroundColor:category ==="Derivatives"?"#fdfff5":"white",cursor:"pointer"}} className="card-item-center">
              <Card.Body style={{ padding: "7px 5px 3px 5px" }}>
                <Card.Text>
                  <h6  onClick={()=>selectHandler("Derivatives")}>Derivatives</h6>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-sm-3">
            <Card style={{backgroundColor:category ==="Payments"?"#fdfff5":"white",cursor:"pointer"}} className="card-item-center">
              <Card.Body style={{ padding: "7px 5px 3px 5px" }}>
                <Card.Text>
                  <h6  onClick={()=>selectHandler("Payments")}>Payments</h6>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <div className="col-sm-6">
        <div className="row">
          <div  className="col-sm-3 mb-2">
            <Card style={{backgroundColor:category ==="Assets"?"#fdfff5":"white",cursor:"pointer"}} className="card-item-center">
              <Card.Body style={{ padding: "7px 5px 3px 5px" }}>
                <Card.Text>
                  <h6  onClick={()=>selectHandler("Assets")}>Assets</h6>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          {/* <div className="col-sm-9">
            <input
              type="text"
              placeholder="  Search"
              className="inputTag"
            ></input>
          </div> */}
        </div>
      </div>
      <Table />
    </div>
    </>
  );
}

export default Category;
