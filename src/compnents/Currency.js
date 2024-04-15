import React, { useState } from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import "../css/currency.css";
import axios from "axios";

let BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
let apiKey = "fca_live_qwGsraQMLsqM8QDsH1xznlrFLc5U6eduhVHA8m6C";

export default function Currency() {
  const [amount, setAmount] = useState();
  const [fromCurrency, setFromCurrency] = useState("EUR");
  const [toCurrency, setToCurrency] = useState("USD");
  const [result, setResult] = useState();



const exchange = async () => {
  const response = await axios.get(`${BASE_URL}?apikey=${apiKey}&base_currency=${fromCurrency}`)
   setResult(((response.data.data[toCurrency])*amount).toFixed(2));
}


  return (
    <div className="currency-div">
      <div
        style={{
          fontSize: "20px",
          color: "red",
          backgroundColor: " rgb(0, 0, 0,0.7)",
          width: "100%",
          textAlign: "center",
        }}
      >
        <h3>Exchange rate application</h3>
      </div>

      <div style={{ marginTop: "25px" }}>
        <input
          value={amount}
          type="number"
          className="amount"
          onChange={(e) => {
            setAmount(e.target.value);
          }}
        />
        <select className="from-currency-option" onChange={(e) => {
          setFromCurrency(e.target.value)
        }
        }>
          <option>USD</option>
          <option>EUR</option>
          <option>GBP</option>
          <option>AUD</option>
          <option>BGN</option>
          <option>BRL</option>
          <option>CAD</option>
          <option>CHF</option>
          <option>CNY</option>
          <option>CZK</option>
          <option>HKD</option>
          <option>HRK</option>
          <option>HUF</option>
          <option>IDR</option>
          <option>ILS</option>
          <option>INR</option>
          <option>ISK</option>
          <option>JPY</option>
          <option>KRW</option>
          <option>MXN</option>
          <option>MYR</option>
          <option>NOK</option>
          <option>NZD</option>
          <option>PHP</option>
          <option>PLN</option>
          <option>RON</option>
          <option>RUB</option>
          <option>HRK</option>
          <option>SEK</option>
          <option>SGD</option>
          <option>THB</option>
          <option>TRY</option>
          <option>ZAR</option>
        </select>

        <FaRegArrowAltCircleRight
          style={{ fontSize: "30px", color: "#000", margin: " 5px 20px" }}
        />
        <select className="to-currency-option" onChange={(e) => {
          setToCurrency(e.target.value)
        }
        }>
          <option>USD</option>
          <option>EUR</option>
          <option>GBP</option>
          <option>AUD</option>
          <option>BGN</option>
          <option>BRL</option>
          <option>CAD</option>
          <option>CHF</option>
          <option>CNY</option>
          <option>CZK</option>
          <option>HKD</option>
          <option>HRK</option>
          <option>HUF</option>
          <option>IDR</option>
          <option>ILS</option>
          <option>INR</option>
          <option>ISK</option>
          <option>JPY</option>
          <option>KRW</option>
          <option>MXN</option>
          <option>MYR</option>
          <option>NOK</option>
          <option>NZD</option>
          <option>PHP</option>
          <option>PLN</option>
          <option>RON</option>
          <option>RUB</option>
          <option>HRK</option>
          <option>SEK</option>
          <option>SGD</option>
          <option>THB</option>
          <option>TRY</option>
          <option>ZAR</option>
        </select>

        <input type="number" className="result" value={result} onChange={(e) => {
          setResult(e.target.value)
        }
        }/>
      </div>
      <div>
        <button className="exchange-button"onClick={exchange} >Push</button>
      </div>
    </div>
  );
}
