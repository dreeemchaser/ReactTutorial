import PropTypes from "prop-types";
function UserGreeting(props) {

   const welcomeMessage = <h2
                                   className={"welcome-message"}> Welcome {props.username}
                                   </h2>

   const loginPrompt =     <h2
                                    className={"login-prompt"}>Please login to continue.
                                    </h2>

   // Apparently, this is a bit verbose.
   return (props.isLoggedIn ? welcomeMessage : loginPrompt);

}


UserGreeting.prototypes = {
   isLoggedIn: PropTypes.bool,
   username: PropTypes.string
}

UserGreeting.defaultProps = {
   isLoggedIn: false,
   username: "Guest"
}

export default UserGreeting