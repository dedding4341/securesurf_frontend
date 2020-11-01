import React, { useEffect, useState } from "react";
import "./Analytics.css";
import SideNav from "../SideNav";
import * as a from "../actions";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import BarChart from "react-d3-components/lib/BarChart";
import AnalyticDetailTable from "../AnalyticDetailTable";

function Analytics() {
  const DEFAULT_MONTH = "September";
  const monthlyAggDataSet = useSelector(state => state.monthly_data_set);
  const monthlyDetailDataSet = useSelector(state => state.monthly_analytics_detailed);
  const [dataSet, setDataSet] = useState([]);
  const [detailDataSet, setDetailDataSet] = useState([]);
  const [month, setMonth] = useState(DEFAULT_MONTH);
  const dispatch = useDispatch();

  useEffect(() => {
    if (dataSet.length === 0) {
      getData();
    }
  }, []);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    getData();
  }

  const getData = () => {
    dispatch(a.getMonthlyFromAPI(month));
    setDataSet(monthlyAggDataSet);
    setDetailDataSet(monthlyDetailDataSet);
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
    return x;
  };

  return (
    <div className="Analytics">
      <SideNav />
      <div className="Analytics-container">
        <div className="Analytics-bar-container">
          {dataSet.length !== 0 ? <BarChart tooltipHtml={tooltipScatter} data={dataSet} width={400} height={400} margin={{ top: 10, bottom: 50, left: 50, right: 10 }} xAxis={{ label: "Sites" }} yAxis={{ innerTickValues: 10, label: "# of Access" }} /> : <p className="Analytics-none">No activity has been recorded.</p>}
          <section className="Analytics-filter">
          <h1>Analytics</h1>
            <p className="Analytics-filter-tip">View by month:</p>
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
                <option value="November">November</option>
              </select>
              <button type="submit">Filter</button>
            </form>
          </section>
        </div>
      </div>
      <div className="Analytics-table">
        <AnalyticDetailTable data={detailDataSet} />
      </div>
    </div>
  );
}

export default Analytics;