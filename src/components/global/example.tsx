// src/components/Example.tsx

import { useState } from 'react';
import React from 'react'; // Isto está fora de ordem!
import './Example.css';

const Example = () => {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
    </div>
  );
};

export default Example;
