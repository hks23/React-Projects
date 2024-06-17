import {createContext, useContext} from "react";

export const ThemeContext = createContext(
    {
         //initial value can be given inside {}
        themeMode: "light",
        darkTheme: ()=>{

        },
        lightTheme: ()=>{
            
        },
    }
) 

export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}