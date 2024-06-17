import React from "react";
import { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile(){
    const {user} = useContext(UserContext)

    if(!user){
        return (
            <div className="relative min-h-screen flex flex-col ">
                <div className="text-center p-4"> Please Login </div>
            </div>
        )
    }
    else{
        return (
        <div className="relative min-h-screen flex flex-col ">
            <div className="text-center p-4"> Welcome {user.username} </div>
        </div>
        )
    }
}
export default Profile