import React, {Fragment, useState} from 'react';

function MyComponent() {

    const [foods, setFoods] = useState(["Apple", "Coconut", "Orange"]);

    function handleAddFood(){
        const newFood = document.getElementById("foodInput").value;

        document.getElementById("foodInput").value = " ";
        setFoods(f => [...foods, newFood]);
    }
    function handleRemoveFood(index){
        setFoods( foods.filter( (_,i) => i !== index));
    }


    return(
        <>
            <div>
                <h2>List of Foods</h2>
                <ul>
                    {foods.map((food, index) => <li key={index} onClick={() =>  handleRemoveFood(index)}>{food}</li>)}
                </ul>

                <input
                    id="foodInput"
                    placeholder="Add Food.."
                />
                <button onClick={handleAddFood}>Add Food</button>

            </div>
        </>
    );

}

export default MyComponent;