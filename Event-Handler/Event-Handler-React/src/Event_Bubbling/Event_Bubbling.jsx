
// 4th May, 2024

export default function Event_bubbling_control(){

    const parent_test = () =>{
        console.log("Parent Block Clicked");
    }

    const child_test = (Event) =>{
        // handling Child Element from Reaching out to Parent Element, controling Event Bubble
        Event.stopPropagation();
        console.log("Child button clicked.")
    }

    return(
        <div className="parent_class" onClick={parent_test}> 
            <h3>Event Bubble Handling - Parent Block</h3>
            <button onClick={child_test}>Child Element</button>
        </div>
    )
}