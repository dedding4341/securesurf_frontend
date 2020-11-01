import React from "react";
import "./Table.css";

function Table({ data }) {

  console.log(data);
  return (
    <div className="Table">
      <table className="Table-table" >
        <tr>
          <th>Watch List</th>
        </tr>
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