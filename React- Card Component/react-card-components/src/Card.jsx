import profilePicture from './assets/profilePicture.jpg'
function Card(){
    return(
        <div className="card">
            <img
                alt={"Profile Picture - Alexander Draai."}
                src={profilePicture}
                className={"profilePicture"}
            > </img>
            <h2 className="card-title">  Alexander Draai </h2>
            <p className={"card-text"}>I am currently unemployed , i recently completed my DIP.</p>
        </div>
    );
}
export default Card