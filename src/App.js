import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [data, setdata] = useState([]);
  const [datainput, setdatainput] = useState('');

  const add = () => {
    if (datainput.trim() !== '') {
      setdata([...data, datainput]);
      setdatainput('');
    } else {
      alert("Enter some task");
    }
  };

  const test = (indexToRemove) => {
    const newList = data.filter((_, index) => index !== indexToRemove);
    setdata(newList);
  };

  const ch = (e) => {
    setdatainput(e.target.value);
  };

  return (
    <div className="container mt-5 w-50">
      <h3 className="text-center">📝 Todo App using React</h3>
      <div className="d-flex mb-3">
        <input
          className="form-control me-2"
          type="text"
          value={datainput}
          onChange={ch}
          placeholder="Enter a task"
        />
        <button onClick={add} className="btn btn-primary">Add</button>
      </div>

      <ul className="list-group mt-4">
        {data.map((item, index) => (
          <li className="list-group-item" key={index}>
            <p>{item}</p>
            <button onClick={() => test(index)} className="btn btn-danger btn-sm">❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
