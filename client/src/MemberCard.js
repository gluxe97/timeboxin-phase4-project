import React from "react";

function MemberCard({member}){




    return(
        <div className="med-card">
            <h1>{member.name}</h1>
            <img src={member.image_url} alt="profile picture"/>
            <h2>Username: {member.username}</h2>
            <h3>Level:{member.level}</h3>
        </div>
    )
}

export default MemberCard;