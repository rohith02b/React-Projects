import React, { useState } from 'react';

const App = () => {
  const [data, setData] = useState([]);
  const [message, setMessage] = useState('');

  const removeItem = (each) => {
    console.log(each);
    let newData = data.filter((str) => str !== each);
    setData(newData);
  };

  const task = data.map((each) => {
    return (
      <div key={each}>
        {each}
        <button
          className='btn btn-secondary m-4'
          onClick={() => removeItem(each)}
        >
          Remove
        </button>
      </div>
    );
  });

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleClick = () => {
    setMessage(message);
    data.push(message);
    setData(data);
    setMessage('');
  };
  return (
    <>
      <div className='text-center m-5 display-5 text-primary'>To-do</div>
      <div className='d-flex justify-content-evenly'>
        <button className='btn btn-primary' onClick={handleClick}>
          Add
        </button>
        <input type='text' value={message} onChange={handleChange} />
      </div>
      <div className='text-center m-5'>
        <button
          className='btn btn-primary text-center'
          onClick={() => setData([])}
        >
          Clear All
        </button>
      </div>
      <div className='m-3 text-center'>{task}</div>
    </>
  );
};

export default App;
