import { useContext } from "react";
import "./Card.css";
import { ThemeContext } from "../context/ThemeContext";


function Card({title,icon}) {

  const {theme} = useContext(ThemeContext)

  return (
    <div className={`card ${theme}`}>
      <p className="icon">
            {icon}
      </p>
      <h2>{title}</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid beatae,
        id ea reprehenderit dicta repellat. Expedita sunt quo dolore praesentium
        tenetur possimus voluptatem ad mollitia distinctio! Cumque quasi nam
        praesentium.
      </p>
    </div>
  );
}

export default Card;
