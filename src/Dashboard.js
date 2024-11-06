import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const Dashboard = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [prices, setPrices] = useState([]);

  const fetchData = () => {
    axios.get(`http://127.0.0.1:5000/api/prices?start=${startDate}&end=${endDate}`)
      .then(response => setPrices(response.data))
      .catch(error => console.error(error));
  };

  useEffect(() => {
    fetchData();
  }, [startDate, endDate]);

  return (
    <div>
      <h1>Brent Oil Price Dashboard</h1>
      <div>
        <h3>Filter by Date Range</h3>
        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
        <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
        <button onClick={fetchData}>Apply Filter</button>
      </div>

      {/* Display the filtered chart */}
      {/* The chart rendering part remains the same */}
    </div>
  );
};

export default Dashboard;
