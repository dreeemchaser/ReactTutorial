import { useState, useEffect } from "react";
function MyComponent(){

// UseState function returns an array with two elements.
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(22);
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = () => {
        setName('Alexander Draai');
    }

    const incAge = () => {
        setAge(age + 1);
    }

    const toggleEmployedStatus = () => {
        setIsEmployed(!isEmployed);
    }

    return(
        <div>
            <p>Name: {name} </p>
            <button onClick={updateName}>Set Name</button>

            <p>Name: {age} </p>
            <button onClick={incAge}>Increment Age</button>

            <p>Name: {isEmployed ? "Yes" : "No"} </p>
            <button onClick={toggleEmployedStatus}>Toggle Status</button>
        </div>
    );
}

export default MyComponent;