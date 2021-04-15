import React from 'react'
import './Stats.css'

function Stats() {
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
