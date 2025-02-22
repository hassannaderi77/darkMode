
import { useContext } from "react";
import "./Navbar.css"

import { MdOutlineDarkMode , MdOutlineLightMode } from "react-icons/md";
import { ThemeContext } from "../context/ThemeContext";


function Navbar() {

    const {theme, setTheme} = useContext(ThemeContext)

    const toggleTheme = () => {
        if(theme == "light") {
            setTheme("dark")
        } else {
            setTheme("light")
        }
    }

    return (
        <>
            <div className={`navbar ${theme}`}>
                <div className="icon" onClick={toggleTheme}>
                    {theme == "dark" ?  <MdOutlineLightMode /> : <MdOutlineDarkMode />}
                </div>
            </div>
        </>
    );
}

export default Navbar;