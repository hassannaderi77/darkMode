import { useState,createContext } from "react";


export const ThemeContext = createContext()

function ThemeProvider({children}) {


    const [theme , setTheme] = useState("light")

    return (
        <ThemeContext.Provider value={{theme,setTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;