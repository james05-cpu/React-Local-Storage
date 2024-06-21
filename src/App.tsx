import { useState } from 'react';

import { useLocalStorage } from './useLocalStorage';

const App = () => {
  const [value, setValue] = useState('');

  const { getItem, setItem, removeItem } = useLocalStorage('name');

  return (
    <div className='container'>
      <h1 className='mb-2 text-3xl font-bold'>useLocalStorage</h1>
      <input
        className='mb-4'
        type='text'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div className="flexer">
        <button className="btn btn-primary" onClick={() => setItem(value)}>Set</button>
        <button className="btn btn-primary" onClick={() => console.log(getItem())}>Get</button>
        <button className="btn btn-primary" onClick={removeItem}>Remove</button>
      </div>
    </div>
  );
};

export default App;
