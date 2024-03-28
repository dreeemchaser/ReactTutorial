function Student(props){
    return(

        <div className={"student"}>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes" : "No"} {/*Ternary Operator? :*/}</p>
        </div>

    );
}
export default Student