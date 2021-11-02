import React, { useState } from 'react';
import './App.css';
import ShowData from './component/ShowData';

function App() {
  const [value, setValue] = useState('');
  const [name, setName] = useState([]);
  const [show, setShow] = useState(false);
  const [dataFound, setDataFound] = useState(true);

  const valueHandler = (e) => {
    setValue(e.target.value);
    if (value) {
      setDataFound(true);
    }
  };

  // const keyHandler = (e) => {
  //   console.log(e.target.value);
  //   setDataFound(true);
  // };

  const changeHandler = async (e) => {
    e.preventDefault();

    try {
      const repo = await fetch(`https://api.github.com/users/${value}/repos`);
      const data = await repo.json();
      if (repo.status === 200 && data.length !== 0) {
        setName(data);
        setShow(true);
        setDataFound(true);
      } else {
        setShow(false);
        setDataFound(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <h2>Github Search</h2>
      <div className="search">
        <label htmlFor="github_user">Enter github username:</label>
        <input
          className="input"
          type="text"
          name="github_user"
          id="github"
          placeholder="Enter Github Username..."
          value={value}
          onChange={valueHandler}
          // onKeyUp={keyHandler}
        />
        <br />
        <br />
        <button type="submit" onClick={changeHandler}>
          <b>Submit</b>
        </button>
      </div>
      {show ? <ShowData name={name} /> : null}
      {dataFound ? null : <h2>There is no such Github username {value}</h2>}
    </div>
  );
}

export default App;
