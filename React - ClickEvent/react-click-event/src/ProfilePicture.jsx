
function ProfilePicture() {

    const imageURL = './src/assets/ProfilePicture.jpg';

    const handledClick = (e) => e.target.style.display = 'none';

    return (
        <img onClick={ (e) => handledClick(e)} src={imageURL}   alt={"Picture"}/>
    );

}
export default ProfilePicture;