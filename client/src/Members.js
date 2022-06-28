import React, { useState,useEffect } from "react";
import MemberCard from "./MemberCard";

function Members(){
    const [members,setMembers]=useState([]);

    useEffect(()=>{
        fetch("/members")
        .then(r=>r.json())
        .then(members=>setMembers(members))
    },[]);

    const memberCard=members.map((member)=>{
        return <MemberCard member={member}/>
      })
    return(
        <div>
            <div className="web-name">
            <h1>Members</h1>
            </div>
            <div className="main-display">
            {memberCard}
            </div>
        </div>
    )
}

export default Members;