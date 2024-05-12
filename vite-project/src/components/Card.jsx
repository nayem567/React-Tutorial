// storing elements in variables
const todoTitle = "Call Family";
const todoDesc = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae vitae asperiores et voluptate dignissimos voluptatum excepturi impedit quibusdam, unde optio";
const date = new Date();
const currentYear = date.getFullYear();
const monthName = date.getMonth();
const fullDate = date.getDate();

// Creating A Component - Card
function Card(props) {
  // Destructuring Props
  const {todoTitle, todoDesc} = props;
  return (
    <div className="card">
      <h3 className="toDoList">{todoTitle}</h3>
      <p>{todoDesc}</p>
      <p>
        Today is:
        {" " + fullDate + "-" + monthName + "-" + currentYear}
      </p>
    </div>
  );
}

export default Card;
