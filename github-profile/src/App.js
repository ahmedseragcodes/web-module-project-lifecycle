//TECH IMPORTS 
import React from "react";
//STYLING IMPORTS 
import "./index.css";
//COMPONENT IMPORTS
import ProfileCard from "./components/profileCard";
import { BASE_URL, API_KEY } from "./constants/constants";
import axios from "axios";

class App extends React.Component {
  state={
    myProfile: [],
    friends: [],
    signInForm: "",
  }

  //LOADS MY PROFILE INFORMATION UPON MOUNT
  componentDidMount(){
    axios.get(`${BASE_URL}/${API_KEY}`)
      .then((res)=>{
        console.log("APP COMP, SUCCEEDED GETTING MY PROFILE INFO", res);
        this.setState({
          ...this.state, myProfile: res.data
        })
      })
      .catch((err)=>{
        console.log("APP COMP, FAILED GETTING MY PROFILE INFO", err);
      })
  }

  render(){
    return (
      <div className="catchAllContainer">
        <h1>@AhmedSeragCodes On Github</h1>
        <ProfileCard myProfile={this.state.myProfile} />
      </div>
    )
  }

}
export default App;
