import { useSelector } from "react-redux";
import Checkbox from "./Checkbox";
import "./module.DisplayTodo.css";

export default function DisplayTodo() {
  const todos = useSelector((state) => state.todos);
  return (
    <section>
      Add Todo
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="list-view">
            
              <span>{todo.text}</span>
            <div className="title">
              <Checkbox id={todo.id} />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
