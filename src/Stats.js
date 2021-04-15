import React, { useState, useEffect } from 'react'
import './Stats.css'
import axios from "axios";

const TOKEN = "c1rpdjaad3ifb04k9cbg"
const BASE_URL = "'https://finnhub.io/api/v1/quote"

function Stats() {

    const [stockData, setStockData] = useState([])
    const [ myStocks, setmyStocks ] = useState([])
    const getStocksData = (stock) => {
     return axios
      .get(`${BASE_URL}${stock}${KEY_URL}`)
      .catch((error) => {
        console.error("Error", error.message);
      });
  };
    

    useEffect(()=>{

    }, [])


    return (
        <div className="stats">
            <div className="stats_container">
                <div className="stats_header">
                    <p>Coins</p>
                </div>
                <div className="stats_content">
                    <div className="stats_rows">
{/* for current coins  */}
                    </div>
                </div>
                <div className="stats_header">
                    <p>Lists</p>
                </div>
                <div className="stats_header">
                    <div className="stats_rows">
{/* coins we can buy  */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stats
