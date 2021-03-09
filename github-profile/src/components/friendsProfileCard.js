//TECH IMPORTS 
import React from "react";
//STYLING IMPORTS
import "../index.css";
//COMPONENT IMPORTS 

function FriendsProfileCard (props){

    const { friends }=props;

 return (
     <div>
     <div className="friendsProfileCard">
         {friends.map((friend)=>{
             return (
                <div>
                <h2>{friend.login}</h2>
                <a href={friend.html_url}>Link to Github</a>
                <img src={friend.avatar_url} alt="selfie from github profile" />
                <p>Followers: {friend.followers} </p>
                <p>Following: {friend.following} </p>
                </div>
             )
         })}
     </div>
     </div>
 )   
}

export default FriendsProfileCard;