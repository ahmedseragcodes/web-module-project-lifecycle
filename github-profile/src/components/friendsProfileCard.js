//TECH IMPORTS 
import axios from "axios";
import React, { useEffect } from "react";
//STYLING IMPORTS
import "../index.css";
//COMPONENT IMPORTS 
import { FOLLOWERS_BASE_URL, MYFOLLOWERS_KEY } from "../constants/constants";

function FriendsProfileCard (props){

    const { friends, setFriends }=props;

    //USES HELPER FUNCTION IMPORTED THROUGH PROPS TO SET FRIENDS RECEIVEd FROM API INTO STATE UPON COMPONENT MOUNT
    useEffect(()=>{
        axios.get(`${FOLLOWERS_BASE_URL}/${MYFOLLOWERS_KEY}`)
        .then((res)=>{
            console.log("FRIENDSPROFILECARD COMP, SUCCEEDED GETTING FRIENDS", res);
            setFriends(res.data);
        })
        .catch((err)=>{
            console.log("FRIENDSPROFILECARD COMP, FAILED GETTING FRIENDS", err);
        })
    },[])
  

 return (
     <div>
     <div className="friendsContainer">
         {friends.map((friend)=>{
             return (
                <div className="friendsProfileCard">
                <h2>{friend.login}</h2>
                <a href={friend.html_url}>Link to Github</a>
                <img src={friend.avatar_url} alt="selfie from github profile" />
                </div>
             )
         })}
     </div>
     </div>
 )   
}

export default FriendsProfileCard;