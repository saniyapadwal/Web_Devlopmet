import React, { useState } from 'react';

function MainContent(props) {
  const [count, setCount] = useState(0);  // Declare state for the click counter

  return (
    <main>
      <p>{props.description}</p>
      <p>Button clicked {count} times.</p>
      <button onClick={() => setCount(count + 1)}>
        Click Me!
      </button>
    </main>
  );
}

export default MainContent;
