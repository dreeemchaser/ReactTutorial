import React, {useState, useEffect} from "react"
function ReactComponent() {


    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        console.log("resize event");

        return() => {
            window.removeEventListener("resize", handleResize);
            console.log("Event removed.");
        }

    }, []);

    useEffect(() => {
        document.title = `Size: ${width} X Height: ${height}`;
    }, [width, height]);


    function handleResize() {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    return (
        <>
            <p> Window Width: {width}px</p>
            <p> Window Height: {height}px</p>
        </>
    )
}

export default ReactComponent
