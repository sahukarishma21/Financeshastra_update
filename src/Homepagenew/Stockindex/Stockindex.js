import React, { useState } from "react";

import { PiCaretUpDownFill } from "react-icons/pi";
import icon1 from '../../assest/it.svg';
import icon2 from '../../assest/e.svg';
import icon3 from '../../assest/h.svg';
import icon4 from '../../assest/power.svg';
import icon5 from '../../assest/finance.svg';
import icon6 from '../../assest/l.svg';
import icon7 from '../../assest/message.svg';
import { useNavigate } from "react-router-dom";
// Data for the cards and table
const DashboardPagetable = [
  { id: 1, sector: "IT", stocks: 60, value: "₹1,02,580.30", change: "6.8%", changeType: "up" },
  { id: 2, sector: "Energy", stocks: 43, value: "₹70,564.20", change: "4.2%", changeType: "up" },
  { id: 3, sector: "Health", stocks: 74, value: "₹1,11,580.30", change: "8.6%", changeType: "up" },
  { id: 4, sector: "Power", stocks: 10, value: "₹30,524.32", change: "5.8%", changeType: "down" },
  { id: 5, sector: "Textiles", stocks: 32, value: "₹84,586.72", change: "6.6%", changeType: "down" },
  { id: 6, sector: "Finance", stocks: 58, value: "₹1,33,580.69", change: "9.4%", changeType: "up" },
  { id: 7, sector: "Telecommunication", stocks: 24, value: "₹72,586.42", change: "4.2%", changeType: "down" },
];

const DashboardtableData = [
    {
        id: 1,
        company: "Bajaj Auto Ltd",
        ltp: 8878.5,
        change: "1.14%",
        marketCap: "₹2,45,134.70 Cr",
        index: "Nifty 50",
        high: 12740.0,
        low: 6370.05,
        sector: "Automobile",
        pe: 19.8,
      },
      {
        id: 2,
        company: "Cipla Ltd",
        ltp: 1490.55,
        change: "1.00%",
        marketCap: "₹1,19,176.30 Cr",
        high: 1702.05,
        low: 1231.85,
        index: "Nifty 50",
        sector: "Pharmaceuticals",
        pe: 27.28,
      },
      {
        id: 3,
        company: "Trent Ltd",
        ltp: 7063.7,
        change: "0.81%",
        marketCap: "₹2,49,095.40 Cr",
        high: 8345.0,
        index: "Nifty Next 50",
        low: 2940.75,
        sector: "Retail",
        pe: 16.16,
      },
      {
        id: 4,
        company: "ITC",
        ltp: 476.95,
        change: "-0.31%",
        marketCap: "₹5,98,426.10 Cr",
        index: "Nifty 200",
        high: 528.5,
        low: 399.35,
        sector: "FMCG",
        pe: 0.0,
      },
      {
        id: 5,
        company: "Hindustan Unilever Ltd",
        ltp: 2332.75,
        change: "-0.12%",
        marketCap: "₹5,48,759.80 Cr",
        high: 3035.0,
        low: 2172.05,
        index: "Nifty 200",
        sector: "FMCG",
        pe: 194.57,
      },
      {
        id: 6,
        company: "Infosys Ltd",
        ltp: 1907.4,
        change: "0.90%",
        marketCap: "₹7,92,663.30 Cr",
        high: 2006.45,
        low: 1358.35,
        index: "Nifty 200",
        sector: "IT",
        pe: 107.83,
      },
];

const Dashboardstockindex = () => {
  const [sortConfig, setSortConfig] = useState({ key: "", direction: "asc" });
  const navigate = useNavigate();

  // Sort function
  const handleSort = (column) => {
    let direction = "asc";
    if (sortConfig.key === column && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key: column, direction });
  };

  const sortedData = [...DashboardtableData].sort((a, b) => {
    if (sortConfig.key) {
      const aValue = a[sortConfig.key];
      const bValue = b[sortConfig.key];

      if (typeof aValue === "string") {
        return sortConfig.direction === "asc"
          ? aValue.localeCompare(bValue)  // String comparison
          : bValue.localeCompare(aValue);
      }

      if (typeof aValue === "number") {
        return sortConfig.direction === "asc" ? aValue - bValue : bValue - aValue;
      }
    }
    return 0;
  });

  const renderSortIcon = (column) => {
    if (sortConfig.key === column) {
      return sortConfig.direction === "asc" ? (
        <PiCaretUpDownFill style={{ transform: "rotate(0deg)" }} />
      ) : (
        <PiCaretUpDownFill style={{ transform: "rotate(180deg)" }} />
      );
    }
    return <PiCaretUpDownFill style={{ color: "black" }} />;
  };

  return (
    <div className="DashboardMainPagetable-container">
      <div className="DashboardMainPagetable-header">
        <button className="DashboardMainPagetable-tab"  onClick={() => navigate("/dashboardchartmain")}>Stock Sector</button>
        <button className="DashboardMainPagetable-tab active">Stock Index</button>
        <button className="DashboardMainPagetable-tab" onClick={() => navigate("/calenderchartmain")}>Stock Calendar</button>
        <button className="DashboardMainPagetable-tab"  onClick={() => navigate("/stockanalystall")}>Stock Analyst</button>
      </div>
      <div className="DashboardMainPagetable-cards">
  {DashboardPagetable.map((card) => (
    <div  key={card.id}
    className={`DashboardMainPagetable-card ${card.id === 7 ? "custom-card-size" : ""}`}>
      <div className="DashboardMainPagetable-card-header">
        <div className="DashboardMainPagetable-header-left">
          {/* Replace the blank color circle with actual icons */}
          {card.sector === "IT" && (
           <img
           src={icon1} // Path to your imported SVG
           alt="IT Icon"
           width="28"
           height="28"
           
           className="sector-icon"
         />
          )}
          {card.sector === "Energy" && (
             <img
             src={icon2} // Path to your imported SVG
             alt="energy Icon"
             width="20"
             height="20"
             className="sectorenergy-icon"
           />
          )}
          {card.sector === "Health" && (
            <img
            src={icon3} // Path to your imported SVG
            alt="health Icon"
            width="20"
            height="20"
            className="sectorhealth-icon"
          />
          )}
            {card.sector === "Power" && (
            <img
            src={icon4} // Path to your imported SVG
            alt="Power Icon"
            width="20"
            height="20"
            className="sectorpower-icon"
          />
          )}
          
            {card.sector === "Textiles" && (
            <img
            src={icon6} // Path to your imported SVG
            alt="textile Icon"
            width="20"
            height="20"
            className="sectortextile-icon"
          />
          )}
          {card.sector === "Finance" && (
            <img
            src={icon5} // Path to your imported SVG
            alt="finance Icon"
            width="20"
            height="20"
            className="sectorfinance-icon"
          />
          )}
            {card.sector === "Telecommunication" && (
            <img
            src={icon7} // Path to your imported SVG
            alt="telecommunication Icon"
            width="20"
            height="20"
            className="sectortele-icon"
          />
          )}
          
          <p className="DashboardMainPagetable-sector">{card.sector}</p>
        </div>
      </div>
      <span className="DashboardMainPagetable-stocks">{card.stocks} Stock</span>
      <div className="upgraph">
        <div className="value">
          <p className="DashboardMainPagetable-value">{card.value}</p>
        </div>
        <div className="valuee">
          <p
            className={`DashboardMainPagetable-change ${
              card.changeType === "up" ? "change-up" : "change-down"
            }`}
          >
            {card.changeType === "up" ? "▲" : "▼"} {card.change}
          </p>
        </div>
      </div>
    </div>
  ))}
</div>


<div className="DashboardMainPagetable-table-container">
      <table className="DashboardMainPagetable-table">
        <thead>
          <tr>
            <th>Company</th>
            <th onClick={() => handleSort("ltp")}>
              LTP (₹) {renderSortIcon("ltp")}
            </th>
            <th onClick={() => handleSort("change")}>
              Change % {renderSortIcon("change")}
            </th>
            <th onClick={() => handleSort("marketCap")}>
              Market Cap (Cr) {renderSortIcon("marketCap")}
            </th>
            <th onClick={() => handleSort("high")}>
              52W High (₹) {renderSortIcon("high")}
            </th>
            <th onClick={() => handleSort("low")}>
              52W Low (₹) {renderSortIcon("low")}
            </th>
            <th onClick={() => handleSort("index")}>
              Index {renderSortIcon("index")}
            </th>
            <th onClick={() => handleSort("pe")}>
              Current P/E {renderSortIcon("pe")}
            </th>
            <th>Clarification</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((row) => (
            <tr key={row.id}>
              <td>{row.company}</td>
              <td>{row.ltp}</td>
              <td
                 style={{
                  color: row.change.includes("-") ? "red" : "#24b676", // Red for negative, green for positive
                  // Optional: Make it bold
              }}
              >
                {row.change}
              </td>
              <td>{row.marketCap}</td>
              <td>{row.high}</td>
              <td>{row.low}</td>
              <td>{row.index}</td>
              <td>{row.pe}</td>
              <td>
                <a href="#" className="clarification-link">
                  Know more
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default Dashboardstockindex;