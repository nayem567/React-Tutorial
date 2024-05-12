import { v4 as uuidv4 } from 'uuid';

// 25th April, 2024
const todos = [
  {
    id: uuidv4(),
    title: "todo 1",
    descr: "todo 2 description",
  },
  {
    id: uuidv4(),
    title: "todo 2",
    descr: "todo 2 decription",
  },
  {
    id: uuidv4(),
    title: "todo 3",
    descr: "todo 3 description",
  },
];

const List = () => {
  return (
    <div>
      {todos.map((todo) => {
        const {id, title, descr} = todo;
        return (
         <div key={id}>
          <h2>{title}</h2>
          <p>{descr}</p>
          </div>
        );
      })}
    </div>
  );
};

export default List;
