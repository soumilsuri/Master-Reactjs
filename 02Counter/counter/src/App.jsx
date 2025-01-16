import { useState } from 'react' // import the useState hook
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCount] = useState(0)
  
  let count = 0;
  const increment = () => {
    count++;
    console.log(count);
  }
  const decrement = () => {
    count--;
    console.log(count);
  }

  return (
    <>
      <div>
        <h1>What is Babel in React?</h1>
        <p>Babel is a JavaScript compiler used in React to transform modern JavaScript (ES6+ and JSX) into backward-compatible JavaScript that browsers can understand. React uses JSX (JavaScript XML), which is not natively supported by browsers. Babel converts JSX into plain JavaScript and ensures compatibility with older browsers. </p>
        <h1>
          What are Hooks?
        </h1>
        <p>
        Hooks are special tools in React that let you add features (like state and effects) to simpler functional components.
        </p>
        <li>Remember things (state): Like counting how many times a button was clicked.</li>
        <li>Do things when something changes (effects): Like fetching data when a page loads.</li>
        <br />

        {/* Without Hooks */}
        <b>Count Without Hook: {count}</b>
        <br />
        <button onClick={increment}>Increment Without Hook</button><button onClick={decrement}>Decrement Without Hook</button>
        <br />
        <br />
        {/* With Hooks */}
        <b>Count With Hook: {counter}</b>
        <br />
        <button onClick={() => setCount(counter + 1)}>Increment With Hook</button><button onClick={() => setCount(counter - 1)}>Decrement With Hook</button>
      </div>
    </>
  )
}

export default App
