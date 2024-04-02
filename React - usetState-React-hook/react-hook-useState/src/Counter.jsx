import React, {useState, useEffect, useRef} from 'react';
function Counter() {

    const [count, setCount] = useState(0);
    const increment = () => {

        // Reacts puts your UPDATER function in a queue (waiting line).
        setCount(c  => c + 1000000);
    }
    // UPDATE ?
    // REACT -batches together state updates for performance reasons.
    const decrement = () => {
        setCount(c => c - 1);
    }
    const reset = () => {
        setCount(0);
    }

return(
    <>
        <div className="counter-container">
            <p className={"countDisplay"}>{count}</p>
            <button className="counter-button" onClick={decrement}>Decrement</button>
            <button className="counter-button" onClick={reset}>Reset</button>
            <button className="counter-button" onClick={increment}>Increment</button>
        </div>
    </>

);

}

export default Counter;