import React, { useEffect, useState } from "react";
import "./Analytics.css";
import SideNav from "../SideNav";
import * as a from "../actions";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import BarChart from "react-d3-components/lib/BarChart";


function Analytics() {
  const DEFAULT_MONTH = "September";
  const monthlyAggDataSet = useSelector(state => state.monthly_data_set);
  const [dataSet, setDataSet] = useState([])
  const [month, setMonth] = useState(DEFAULT_MONTH);
  const dispatch = useDispatch();

console.log(monthlyAggDataSet);

  useEffect(() => {
    if (dataSet.length === 0) {
      dispatch(a.getMonthlyAggFromAPI(month));
      setDataSet(monthlyAggDataSet);
    } 
  }, [dataSet.length, dispatch, month, monthlyAggDataSet]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(a.getMonthlyAggFromAPI(month));
    
  }

  const handleChange = (evt) => {
    const { value } = evt.target;
    setMonth(value);
  }

  if (!localStorage.getItem("token")) {
    console.log("no token..");
    return <Redirect to="/" />
  }

  const tooltipScatter = (x, y) => {
    return  x + " accessed " + y + " times.";
  };


  return (
    <div className="Analytics">
      <SideNav />
      <div className="Analytics-bar-container">
        <section className="Analytics-filter">
          <form onSubmit={handleSubmit}>
            <select id="month" name="month" onChange={handleChange}>
              <option value="January">January</option>
              <option value="February">February</option>
              <option value="February">March</option>
              <option value="April">April</option>
              <option value="May">May</option>
              <option value="June">June</option>
              <option value="July">July</option>
              <option value="August">August</option>
              <option value="September">September</option>
              <option value="October">October</option>
            </select>
            <button type="submit">Filter</button>
          </form>
        </section>
        {dataSet.length !== 0 ? <BarChart tooltipHtml={tooltipScatter} data={dataSet} width={400} height={400} margin={{top: 10, bottom: 50, left: 50, right: 10}} xAxis={{label: "Sites"}} yAxis={{innerTickValues: 10 ,label: "# of Access"}}/> : <p>No activity has been recorded.</p>}
      </div>
    </div>
  );
}

export default Analytics;