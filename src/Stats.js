import React, { useState, useEffect } from 'react'
import './Stats.css'
import axios from "axios";
import StatsRow from './StatsRow'
import { db } from "./firebase"

const TOKEN = "c1rpdjaad3ifb04k9cbg"
const BASE_URL = "'https://finnhub.io/api/v1/quote"

function Stats() {

    const [stockData, setStockData] = useState([])
    const [ myStocks, setmyStocks ] = useState([])
    const getMyStocks = (stock) => {
     return axios
      .get(`${BASE_URL}?symbol${stock}&token=${TOKEN}`)
      .catch((error) => {
        console.error("Error", error.message);
      });
  };
    

  useEffect(() => {
    const stocksList = ["AAPL", "MSFT", "TSLA", "FB", "BABA", "UBER", "DIS", "SBUX"];

    getMyStocks();
    let promises = [];
    stocksList.map((stock) => {
      promises.push(
        getStocksData(stock)
        .then((res) => {
          testData.push({
            name: stock,
            ...res.data
          });
        })
      )
    });

    Promise.all(promises).then(()=>{
      console.log(testData);
      setStocksData(testData);
    })
  }, []);

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
