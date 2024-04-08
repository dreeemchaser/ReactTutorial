// useContext() = React Hook that allows you to share values
//                between multiple levels of components WITHOUT
//                passing props through each level.


import React, {useState, useEffect, useContext} from "react"
import ComponentC  from "./ComponentC.jsx";
function ComponentB() {
    return(
        <>
            <div className="box">
                <h1>Component B</h1>
                <ComponentC/>
            </div>
        </>
    );
}

export default ComponentB;