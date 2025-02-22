import "./Cards.css"
import Card from "./Card.jsx"
import { FaReact, FaBootstrap, FaNodeJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";


function Cards() {


    const cards = [
        {
            id : 1,
            title: "react js",
            icon : <FaReact />
        },
        {
            id : 2,
            title: "bootstrap",
            icon : <FaBootstrap />
        },
        {
            id : 3,
            title: "node js",
            icon : <FaNodeJs />
        },
        {
            id : 4,
            title: "tailwind",
            icon : <RiTailwindCssFill />
        }
    ]


    return (
        <div className="cards">
            {cards.map(card => (
                <Card key={card.id} {...card} />
            ))}
        </div>
    );
}

export default Cards;