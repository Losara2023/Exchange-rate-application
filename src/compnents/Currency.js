import React from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import "../css/currency.css";

export default function Currency() {
  return (
    <div className="currency-div">
      <div style={{fontSize:"20px",color:"red",backgroundColor:" rgb(0, 0, 0,0.7)",width:"100%",textAlign:"center"}}>
        <h3 >Exchange rate application</h3>
      </div>

      <div style={{marginTop:"25px"}}>
        <input type="number" className="amount" />
        <select className="from-currency-option">
          <option>Euro</option>
          <option>USD</option>
          <option>GBP</option>
        </select>

        <FaRegArrowAltCircleRight
          style={{ fontSize: "30px", color: "#000", margin:" 5px 20px" }}
        />
        <select className="to-currency-option">
          <option>USD</option>
          <option>Euro</option>
          <option>GBP</option>
        </select>

        <input type="number" className="result" />
      
      </div>
      <div >
      <button className="exchange-button">Push</button>
      </div>
    </div>
  );
}
