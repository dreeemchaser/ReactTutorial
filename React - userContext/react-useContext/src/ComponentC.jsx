// useContext() = React Hook that allows you to share values
//                between multiple levels of components WITHOUT
//                passing props through each level.


import React, {useState, useEffect, useContext} from "react"
import ComponentD    from "./ComponentD.jsx";
import {UserContext} from "./ComponentA.jsx"


function ComponentC() {

    const user = useContext(UserContext);

    return(
        <>
            <div className="box">
                <h1> Component C</h1>
                <h2>{`Hello Again ${user}`}</h2>
                <ComponentD/>
            </div>
        </>
    );
}

export default ComponentC;