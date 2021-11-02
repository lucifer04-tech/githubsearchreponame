import React from 'react';

import './ShowData.css';

function ShowData(props) {
  return (
    <div>
      <h1>Show Data</h1>
      <table className="main_table">
        <thead>
          <tr>
            <th>Repo Name</th>
            <th>Language</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {props.name.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.language}</td>
                <td>{item.description}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ShowData;
