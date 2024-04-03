// useEffect() = React Hook that tells REACT DO SOME CODE WHEN (pick one):
//!         -> This component re-renders
//!         -> This component mounts
//!         -> The state of a value

// ? useEffect( function , [dependencies]);

//! 1~ useEffect( () => {})             -> runs after every re-render
//! 2~ useEffect( () => {}, [])         -> runs ONLY on mount (mount is when you append to the DOM)
//! 3~ useEffect( () => {}, [value])    -> runs on mount + when value changes


//? USES:
//! 1-> Event Listeners
//! 2-> DOM Manipulation
//! 3-> Subscriptions (real-time updates)
//! 4-> Fetching data from API.
//! 5-> Clean-Up when a component unmounts.


import React, {useState, useEffect} from "react"
function MyComponent() {

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");

    useEffect(() => {
        document.title = `Count: ${count}`;

        return () => {
            // CLEAN-UP CODE.
        }
    },[count, color]); // when one of these values change - values as in count and color.

    function addCount(){
        setCount(c => c + 1);
    }
    function subtractCount(){
        setCount(c => c - 1);
    }
    function changeColor(){
        setColor(c => c === "green" ? "red" : "green" );
    }

    return(
        <>
            <p style={{color: color}}>
                Count: {count}
            </p>

            <button onClick={addCount}>Add</button>
            <button onClick={subtractCount}>subtract</button>
            <button onClick={changeColor}>Change Color</button>
        </>
    );

}

export default MyComponent;