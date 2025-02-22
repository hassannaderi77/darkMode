import './App.css'
import Navbar from './component/navbar/Navbar'
import Cards from "./component/card/Cards";
import { useContext } from 'react';
import { ThemeContext } from './component/context/ThemeContext';


function App() {

  const {theme} = useContext(ThemeContext)

  return (
      <div className={`appContainer ${theme}`}>
        <Navbar />
        <Cards  />
      </div>
  )
}

export default App
