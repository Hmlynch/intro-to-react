import { useState, useEffect } from 'react';

export default function Counter(props) {
    // const [count, setCount] = useState(props.default ? props.default : 0) //if statement states if there is a prop, set to prop, else set to zero
    const [count, setCount] = useState(props.default || 0)
    console.log("Component Running")
    console.log(props)

    const [title] = useState(props.name || "DEFAULT COUNTER")
  
    function increment(incrementor) {
      setCount(count + incrementor)
      // count++
    }

    function decrement(decromenter) {
      setCount(count - decromenter)
    }
    function reset() {
      setCount(props.default || 0)
    }
  
    return (
      <div className="counter">
        <h2>{ title }</h2>
        Count: {count}
        <button onClick={ () => increment(1) }>Increment</button>
        <button onClick={ () => increment(2) }>Increment By 2</button>
        {
          (count > 0) ?
          // Output if condition is met
          (
            <>
          <button onClick={ () => decrement(1) }>Decrement</button>
          </>
          ) :
          // Output if condition is not met (else)
          <></>
        }
        {
          (count > 1) ?
          <button onClick={ () => decrement(2) }>Decrement By 2</button> :
          <></>
        }
        <button onClick={ reset }>Reset</button>
      </div>
    );
  }