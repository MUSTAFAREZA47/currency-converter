Sure! These are some of the most commonly used React hooks. Let’s break them down one by one with simple examples:

---

### **1. `useState`:**
- **Purpose**: Allows you to create and manage state in a functional component.
- **What it does**: Tracks and updates values that your component uses, like variables but reactive.

#### Example:
```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // count is the state variable, setCount is the function to update it.

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
}

export default Counter;
```

#### Key points:
- `useState(0)` initializes the state with `0`.
- `setCount()` updates the value of `count`.
- When the state changes, React re-renders the component to show the updated state.

---

### **2. `useCallback`:**
- **Purpose**: Memorizes a function so it’s not re-created on every render unless dependencies change.
- **What it does**: Prevents unnecessary re-renders of child components or prevents recreating functions when not needed.

#### Example:
```jsx
import React, { useState, useCallback } from 'react';

function Parent() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []); // No dependencies, so this function never changes.

  return (
    <div>
      <p>Count: {count}</p>
      <Child onIncrement={increment} />
    </div>
  );
}

function Child({ onIncrement }) {
  console.log('Child rendered');
  return <button onClick={onIncrement}>Increment</button>;
}

export default Parent;
```

#### Key points:
- Without `useCallback`, the `increment` function would be re-created on every render, causing the `Child` component to re-render.
- `useCallback` ensures the same instance of the function is reused until dependencies change.

---

### **3. `useEffect`:**
- **Purpose**: Side-effect management (e.g., fetching data, subscriptions, DOM updates).
- **What it does**: Runs code after the component renders (or re-renders) and can clean up after itself.

#### Example:
```jsx
import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(interval); // Cleanup when the component unmounts or effect dependencies change.
    };
  }, []); // Empty array = run only once when the component mounts.

  return <div>Seconds: {seconds}</div>;
}

export default Timer;
```

#### Key points:
- `useEffect` runs after rendering.
- **Cleanup function** (`return () => {}`) is called when the component unmounts or dependencies change.
- Dependencies (`[]`) control when the effect runs.

---

### **4. `useRef`:**
- **Purpose**: Directly access/manipulate DOM elements or persist a value across renders without causing re-renders.
- **What it does**: Provides a mutable object that persists throughout the component lifecycle.

#### Example (Accessing DOM):
```jsx
import React, { useRef } from 'react';

function InputFocus() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus(); // Access the DOM input element directly.
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

export default InputFocus;
```

#### Example (Persistent value):
```jsx
import React, { useState, useRef } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const renderCount = useRef(0);

  renderCount.current += 1; // Updates but does not cause a re-render.

  return (
    <div>
      <p>Count: {count}</p>
      <p>Rendered: {renderCount.current} times</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;
```

#### Key points:
- `useRef` does not trigger re-renders.
- Useful for keeping track of values or accessing DOM elements directly.

---

### Summary of Their Purposes:
| Hook        | Purpose                                                                 |
|-------------|-------------------------------------------------------------------------|
| **`useState`** | State management within functional components.                        |
| **`useCallback`** | Memorizes functions to avoid re-creating them unnecessarily.         |
| **`useEffect`** | Runs side effects (e.g., fetch data, set up subscriptions).           |
| **`useRef`** | Access DOM elements or persist values across renders without re-render. |

