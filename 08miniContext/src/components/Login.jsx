import React from "react";
import { useState, useContext } from "react";
import UserContext from "../context/UserContext";
import UserContextProvider from "../context/UserContextProvider";

function Login(){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    //this setUser is coming from UserContextProvider
    const {setUser} = useContext(UserContext)

    const handleSubmit = (event)=>{
        event.preventDefault()
        setUser({username, password})
    }
    return(
        <div>
        <h1 class="relative top-0 h-auto py-4 justify-center flex bg-gradient-to-r items-center from-blue-500 via-teal-500 to-blue-500 bg-clip-text text-6xl font-extrabold text-transparent text-center select-auto">
            Login page
        </h1>

            <br /><br /><br />
            <input className="h-full w-full rounded-lg border-2 border-x border-green-500 py-2.5 px-2.5 text-center "
                type="text" 
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                placeholder="Username"
            />
            {"             "}
            <input className="h-full w-full rounded-lg border-2 border-x border-green-500 py-2.5 px-2.5 text-center my-8"
                type="text" 
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Password" 
            />

            <button onClick={handleSubmit}
                data-ripple-light="true"
                class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none 
                       disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 
                       hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
            > Submit </button>
        </div>
    )
}
export default Login