import React from "react";
import "./Table.css";

function Table({ data }) {

  console.log(data);
  return (
    <div className="Table">
      <table className="Table-table" >
        <thead>
          <tr>
            <th>Site Data Breach Watch List</th>
          </tr>
        </thead>
        <tbody className="Table-table-body">
          {data.length !== 0
            ? data.map(d => {
              return (
                <tr>
                  <td>{d}</td>
                </tr>
              );
            })
            : <tr><td>Watch List is currently empty.</td></tr>
          }
        </tbody>
      </table >
    </div >
  );
}

export default Table;