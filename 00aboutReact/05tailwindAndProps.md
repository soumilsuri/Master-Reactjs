# React, Tailwind, and Props

## Setting up Vite and TailwindCSS
To set up a React project with Vite and integrate TailwindCSS, follow the steps in the official TailwindCSS documentation: [TailwindCSS Vite Setup Guide](https://tailwindcss.com/docs/guides/vite).

This guide provides a comprehensive walkthrough, including installing dependencies, configuring files, and verifying the setup.

---

## Understanding React Props
Props (short for properties) are a way of passing data from parent to child components in React. They allow components to be dynamic and reusable by providing specific data values.

Here's an example to explain props:

### App.jsx
```jsx
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Card from './components/card';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button className="text-3xl font-bold rounded-md bg-violet-400 mb-4">
        Hello tailwind
      </button>
      <Card price="0.01" />
      <Card name="monkey boy" />
    </>
  );
}

export default App;
```

### Card.jsx
```jsx
import React from 'react';

const Card = ({ name = "Bored ape nft accidental", price = "free" }) => {
  return (
    <>
      <div
        className="flex flex-col rounded-xl p-4"
        style={{
          border: '0.88px solid',
          backdropFilter: 'saturate(180%) blur(14px)',
          background: '#ffffff0d',
        }}
      >
        <div>
          <img
            src="https://res.cloudinary.com/ddcg0rzlo/image/upload/v1652470298/9StaF0UBJfih_df0248.gif"
            alt="nft-gif"
            width="400"
            height="400"
            className="rounded-xl"
          />
        </div>
        <div className="flex flex-col rounded-b-xl py-4">
          <div className="flex justify-between">
            <h1 className="font-RubikBold">{name}</h1>
            <h1 className="font-bold font-RubikBold">Price</h1>
          </div>
          <div className="flex justify-between font-mono">
            <p>#345</p>
            <p>{price}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
```

---

### Key Points:
1. **Default Props**: The `Card` component has default values for `name` and `price`, which ensures fallback values when no props are passed.
   - `name = "Bored ape nft accidental"`
   - `price = "free"`

2. **Dynamic Data**: When the `Card` component is rendered in `App.jsx`, different props like `price` and `name` can be passed to customize the display.

3. **Reusable Component**: By using props, the `Card` component is highly reusable. It can display any data provided to it dynamically, making it versatile.

---

This setup showcases how to:
1. Configure a React project with Vite and TailwindCSS.
2. Leverage props for dynamic and reusable components in React.

