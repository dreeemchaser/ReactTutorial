function Button(){


    const handleClick = (e) => e.target.textContent = "I have been clicked 🐕";


    return(
        <button onDoubleClick={(e) => handleClick(e)}> Click Me 👌</button>
    );
}
export default Button;