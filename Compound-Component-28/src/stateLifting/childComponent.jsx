
// 7th May, 2024

function ChildComponent(props){

    const childData = "I am a child Data";

    props.onChildData(childData);

    return(
        <div>
            <p>I am child component - childComponent.jsx</p>
            <p>{props.data}</p>
        </div>
    )

}

export default ChildComponent;