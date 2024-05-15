import { useState } from "react";

function Toggle () {

    const [toggle, setToggle] = useState(true);

    const toggleButton = () =>{
        setToggle(!toggle);
    }

    return(
        <div>
            {toggle && (
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam expedita ex neque minima reprehenderit assumenda ab corporis, deserunt dolores odit, adipisci modi debitis dolore saepe ratione quibusdam provident quae tempore.</p>
            )}
            <button onClick={toggleButton}>
                {toggle ? "hide" : "show"}
            </button>
        </div>
    )
}

export default Toggle;