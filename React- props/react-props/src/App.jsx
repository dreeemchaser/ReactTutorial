// PropTypes: mechanism that ensures that the value passed is of the correct dataType.

import Student from "./Students.jsx";
import PropTypes from "prop-types";
function App() {
    return(
        <>
            <Student name={"Alexander"}
                     age={"30"}
                     isStudent={true}
            />
            <Student name={"Tia"}
                     age={42}
                     isStudent={false}
            />
            <Student name={"Myrah"}
                     age={22}
                     isStudent={false}
            />
            <Student name={"Lary"}

                     
            />
        </>
    );
}

Student.protoTypes = {
    name : PropTypes.string,
    age : PropTypes.number,
    isStudent : PropTypes.bool
}

Student.defaultProps = {
    name : "Guest",
    age : 0,
    isStudent : false
}


export default App
