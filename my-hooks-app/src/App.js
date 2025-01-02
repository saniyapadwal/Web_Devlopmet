import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0); // Declare a state variable `count`

  return (
    <div className="App">
      <h1>React Hooks Example</h1>
      <p>Current count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Counter</button>
    </div>
  );
}

export default App;
