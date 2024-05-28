import './App.css';
import logo from './images/unfluke_logo.png';
import bell from './images/bell.png';
import coin from './images/coin.jpeg';
import monkey from './images/monkey.jpg';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowTrendUp } from '@fortawesome/free-solid-svg-icons';



function App() {
 

  const initialData = [
    { rank: 1, name: 'Selling with re entr', calmarRatio: 3.96, overallProfit: 381845, avgDailyProfit: 319.54, winPercent: 0.65, price: '-', action: 'View' },
    { rank: 2, name: 'strategy_name', calmarRatio: 3.62, overallProfit: 268872.5, avgDailyProfit: 216.31, winPercent: 0.64, price: 500, action: 'Buy' },
    { rank: 3, name: 'Based on premium and', calmarRatio: 3.42, overallProfit: 255425, avgDailyProfit: 208.51, winPercent: 0.64, price: '-', action: 'View' },
    { rank: 4, name: 'strategy_name', calmarRatio: 3.22, overallProfit: 370845, avgDailyProfit: 303.47, winPercent: 0.65, price: '-', action: 'View' },
    { rank: 5, name: 'strategy_name', calmarRatio: 3.22, overallProfit: 370845, avgDailyProfit: 303.47, winPercent: 0.65, price: '-', action: 'View' },
    { rank: 6, name: 'Based on premium wit', calmarRatio: 3.01, overallProfit: 135980, avgDailyProfit: 185.77, winPercent: 0.49, price: '-', action: 'View' },
    { rank: 7, name: 'strategy_name', calmarRatio: 2.76, overallProfit: 267867.5, avgDailyProfit: 218.49, winPercent: 0.6, price: '-', action: 'View' },
    { rank: 8, name: 'Wait and trade_Save', calmarRatio: 2.62, overallProfit: 178252.5, avgDailyProfit: 161.9, winPercent: 0.63, price: '-', action: 'View' },
    { rank: 9, name: 'iron condor', calmarRatio: 2.44, overallProfit: 176420, avgDailyProfit: 137.51, winPercent: 0.65, price: '-', action: 'View' },
    { rank: 10, name: 'strategy_name', calmarRatio: 2.04, overallProfit: 244555, avgDailyProfit: 198.66, winPercent: 0.62, price: '-', action: 'View' },
  ];

  const dataByFilter = {
    '0': initialData,
    '0.5': [
      { rank: 1, name: 'Based on premium and', calmarRatio: 2.02, overallProfit: 194096.05, avgDailyProfit: 158.45, winPercent: 0.62, price: '-', action: 'View' },
      { rank: 2, name: 'strategy_name', calmarRatio: 1.98, overallProfit: 171862.74, avgDailyProfit: 138.26, winPercent: 0.6, price: 500, action: 'Buy' },
      { rank: 3, name: 'strategy_name', calmarRatio: 1.75, overallProfit: 264090.37, avgDailyProfit: 216.11, winPercent: 0.64, price: '-', action: 'View' },
      { rank: 4, name: 'strategy_name', calmarRatio: 1.75, overallProfit: 264090.37, avgDailyProfit: 216.11, winPercent: 0.64, price: '-', action: 'View' },
      { rank: 5, name: 'Wait and trade_Save', calmarRatio: 1.62, overallProfit: 124537.84, avgDailyProfit: 113.11, winPercent: 0.61, price: '-', action: 'View' },
      { rank: 6, name: 'Based on premium wit', calmarRatio: 1.55, overallProfit: 99916.32, avgDailyProfit: 136.5, winPercent: 0.48, price: '-', action: 'View' },
      { rank: 7, name: 'Selling with re entr', calmarRatio: 1.38, overallProfit: 254470.35, avgDailyProfit: 212.95, winPercent: 0.63, price: '-', action: 'View' },
      { rank: 8, name: 'iron condor', calmarRatio: 1.31, overallProfit: 132699.25, avgDailyProfit: 103.43, winPercent: 0.63, price: '-', action: 'View' },
      { rank: 9, name: 'strategy_name', calmarRatio: 1.12, overallProfit: 136226.09, avgDailyProfit: 111.11, winPercent: 0.58, price: '-', action: 'View' },
      { rank: 10, name: 'strategy_name', calmarRatio: 1.11, overallProfit: 260759.53, avgDailyProfit: 175.71, winPercent: 0.35, price: '-', action: 'View' },
    ],
    '1': [
      { rank: 1, name: 'Based on premium and', calmarRatio: 0.84, overallProfit: 132767.1, avgDailyProfit: 108.38, winPercent: 0.6, price: '-', action: 'View' },
      { rank: 2, name: 'strategy_name', calmarRatio: 0.69, overallProfit: 208500.31, avgDailyProfit: 140.5, winPercent: 0.35, price: '-', action: 'View' },
      { rank: 3, name: 'Wait and trade_Save', calmarRatio: 0.67, overallProfit: 70823.17, avgDailyProfit: 64.33, winPercent: 0.6, price: '-', action: 'View' },
      { rank: 4, name: 'iron condor', calmarRatio: 0.64, overallProfit: 88978.5, avgDailyProfit: 69.35, winPercent: 0.62, price: '-', action: 'View' },
      { rank: 5, name: 'strategy_name', calmarRatio: 0.59, overallProfit: 157335.75, avgDailyProfit: 128.75, winPercent: 0.62, price: '-', action: 'View' },
      { rank: 6, name: 'strategy_name', calmarRatio: 0.59, overallProfit: 157335.75, avgDailyProfit: 128.75, winPercent: 0.62, price: '-', action: 'View' },
      { rank: 7, name: 'Based on premium wit', calmarRatio: 0.57, overallProfit: 63852.65, avgDailyProfit: 87.23, winPercent: 0.48, price: '-', action: 'View' },
      { rank: 8, name: 'strategy_name', calmarRatio: 0.53, overallProfit: 194687.52, avgDailyProfit: 131.19, winPercent: 0.35, price: '-', action: 'View' },
      { rank: 9, name: 'strategy_name', calmarRatio: 0.44, overallProfit: 74852.97, avgDailyProfit: 60.22, winPercent: 0.57, price: 500, action: 'Buy' },
      { rank: 10, name: 'Selling with re entr', calmarRatio: 0.31, overallProfit: 127095.7, avgDailyProfit: 106.36, winPercent: 0.61, price: '-', action: 'View' },
    ],
  };

  const [selectedFilter, setSelectedFilter] = useState('0');
  const [tableData, setTableData] = useState(initialData);

  
  

  const handleFilterChange = (e) => {
    const value = e.target.value;
    setSelectedFilter(value);
    setTableData(dataByFilter[value]);
  };


  return (
    <div className="App viewport-border">
      <div className="header">
       <div >
        <img src = {logo} alt="My Image" height={"45px"} width={"120px"} />
       </div>
      <div className="notifications">
        <div>
         <img src = {bell} alt="My Image" height={"25px"} width={"25px"} />
         <i className="arrow down"></i>
        </div>
        <div>
         <img src = {coin} alt="My Image" height={"25px"} width={"26px"} />
         0
        </div>
        <div>
         <img src = {monkey} alt="My Image" height={"30px"} width={"30px"} />
         <i className="arrow down"></i>
        </div>
      </div>
      </div>
      <nav className="navbar">
      <ul className="navbar-menu">
        <li><i className="fa-brands fa-microsoft microsoft" style={{color: "#0077b6"}} ></i><a href="#leaderboard">LeaderBoard</a></li>
        <li><a href="#historical-trading">Historical Trading</a></li>
        <li><a href="#historical-chart">Historical Chart</a></li>
        <li><a href="#scanners">Scanners</a></li>
        <li><a href="#alerts">Alerts</a></li>
        <li><a href="#basic-backtest">Basic Backtest</a></li>
        <li><a href="#advanced-backtest">Advanced Backtest</a></li>
        <li><a href="#pricing">Pricing</a></li>
        <li><a href="#my-earnings">My Earnings</a></li>
      </ul>
     </nav>
     <h1 className='leaderboard'>LeaderBoard</h1>
     <div className="table-container">
      <div className="table-heading">
        <div className="header-content">
          <div className='table-text'>Basic Backtest</div>
          <div>
            <span>Slippage</span>
          <select className="form-select" value={selectedFilter} onChange={handleFilterChange}>
            <option value="0">0%</option>
            <option value="0.5">0.5%</option>
            <option value="1">1%</option>
          </select>
          </div>
        </div>
      </div>
      <table className="strategy-table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Calmar Ratio</th>
            <th>Overall Profit</th>
            <th>Avg. Daily Profit</th>
            <th>Win % (Day)</th>
            <th>Price (Rs)</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row) => (
            <tr key={row.rank} className="fade-in">
              <td>{row.rank}</td>
              <td>{row.name}</td>
              <td className='increment'>
              <FontAwesomeIcon icon={faArrowTrendUp} style={{color: "#00b4d8",}} className='icon'/>
                {row.calmarRatio}
              </td>
              <td>{row.overallProfit}</td>
              <td>{row.avgDailyProfit}</td>
              <td>{row.winPercent}</td>
              <td>{row.price}</td>
              <td><button className={row.action === 'Buy' ? 'buy-button' : 'view-button'}>{row.action}</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
      
    </div>
  );
}

export default App;
