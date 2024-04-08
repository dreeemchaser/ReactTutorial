
import { useState, useEffect, useRef } from "react";

function MyComponent(){


    const inputRef1 = useRef(null); // Returns an object
    const inputRef2 = useRef(null); // Returns an object
    const inputRef3 = useRef(null); // Returns an object

    useEffect(() => {
        console.log("COMPONENT RENDERED");
    }, []);

    function handleClick1(){
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor = "pink";

        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";
    }

    function handleClick2(){
        inputRef2.current.focus();
        inputRef2.current.style.backgroundColor = "pink";


        inputRef1.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";
    }

    function handleClick3(){
        inputRef3.current.focus();
        inputRef3.current.style.backgroundColor = "pink";


        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "";
    }
    return(
        <div>
            <button onClick={handleClick1}>
                click me 1 !
            </button>
            <input ref={inputRef1}/>
            <br/><br/>

            <button onClick={handleClick2}>
                click me 2 !
            </button>
            <input ref={inputRef2}/>
            <br/><br/>

            <button onClick={handleClick3}>
                click me 3 !
            </button>
            <input ref={inputRef3}/>

        </div>
    );
}

export default MyComponent;