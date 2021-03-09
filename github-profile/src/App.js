//TECH IMPORTS 
import React from "react";
//STYLING IMPORTS 
import "./index.css";
//COMPONENT IMPORTS
import ProfileCard from "./components/profileCard";

class App extends React.Component {
  state={
    myProfile: "",
    friends: [],
    signInForm: "",
  }

  render(){
    return (
      <div className="catchAllContainer">
        <h1>@AhmedSeragCodes On Github</h1>
        <ProfileCard />
      </div>
    )
  }

}
export default App;
