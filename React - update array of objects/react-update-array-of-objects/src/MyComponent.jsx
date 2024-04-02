import React, {Fragment, useState} from 'react';

function MyComponent() {

    const [cars,setCars] = useState([]);
    const [carYear, setCarsYear] = useState(new Date().getFullYear()); //
    const [carMake, setCarsMake] = useState("");
    const [carModel, setCarsModel] = useState("");

    //!  Functions
    function handleAddCar(){
        const newCar = {
            year: carYear,
            make: carMake,
            model: carModel
        }

        setCars( c => [...cars, newCar]); // We put it into a function because we want to change the PREVIOUS state.

        //RESET VALUES

        setCarsYear(new Date().getFullYear());
        setCarsMake("");
        setCarsModel("");

    }
    function handleRemoveCar(index){
        setCars(c => c.filter((_, i) => i !== index));
    }
    function handleYearChange(event){
        setCarsYear(event.target.value);
    }
    function handleMakeChange(event){
        setCarsMake(event.target.value);
    }
    function handleModelChange(event){
        setCarsModel(event.target.value);
    }

    return(
        <>
            <div className="list-container">
                <h2> List of Car Objects </h2>

                <ul className={"car-list"}>
                    {cars.map((car, index) => (

                        <li key = {index}  onClick={() => handleRemoveCar(index) }>


                            {car.year} {car.make} {car.model}
                        </li>

                    ))}
                </ul>


                <input
                    type="number"
                    value={carYear}
                    onChange={handleYearChange}
                />
                <br/>

                <input
                    type="text"
                    value={carMake}
                    onChange={handleMakeChange}
                    placeholder="Enter Car Make"
                />
                <br/>

                <input
                    type="text"
                    value={carModel}
                    onChange={handleModelChange}
                    placeholder="Enter Car Model"
                />
                <br/>


                <button onClick={handleAddCar}> Submit</button>
            </div>
        </>
    );

}

export default MyComponent;