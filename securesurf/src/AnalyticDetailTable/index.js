import React from "react";
import "./AnalyticDetailTable.css";

function AnalyticDetailTable({ data }) {
  console.log("data", data);


  return (
    <div className="AnalyticDetailTable">
      <table className="AnalyticDetailTable-table" >
        <thead>
          <tr>
            <th>URL</th>
            <th>TIME ACCESSED</th>
            <th>ACCESS IP</th>
          </tr>

        </thead>
        <tbody className="AnalyticDetailTable-table-body">
          {data.map(d => {
            return (
              <tr>
                <td className="url">{d[0]}</td>
                <td>{d[1]}</td>
                <td>{d[2]}</td>
              </tr>
            );
          })}
        </tbody>
      </table >
    </div >
  );
}

export default AnalyticDetailTable;