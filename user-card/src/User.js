import React from 'react';

function User (props) {
    
    return (
        <div className = 'card'>
            <h1>{props.user.name}</h1>
            <p>Username: {props.user.login}</p>
            <p>Bio: {props.user.bio}</p>
            {/* <p>Followers: {props.followers.data}</p> */}
            <p>Followers: {props.user.followers}</p>
            <img src = {props.user.avatar_url} alt ='github avatar'></img>
        </div>
    )
}

export default User