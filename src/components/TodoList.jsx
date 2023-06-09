import { useRef } from "react";
import Todo from "./ui/Todo";
import { filterTodo } from "../utils";
import { useTodoContext } from "../Context";

const TodoList = () => {
  const { todos, setTodos, createTodo, data } = useTodoContext();
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const obj = {
      id: formData.get("title") ?? "",
      title: formData.get("title") ?? "",
      completed: false,
    };
    createTodo(obj);
    inputRef.current.value = "";
  };

  const filterHandler = (e) => {
    document.querySelector("button.active")?.classList.remove("active");
    e.target.classList.add("active");
    filterTodo(e.target.id, data, setTodos);
  };

  return (
    <section className="todolist__section">
      <div className="add__todo-container">
        <button
          className="add__todo-btn"
          onClick={() => inputRef.current.focus()}
        >
          Add Todo
        </button>
        <form className="todo-form" onSubmit={handleSubmit}>
          <input
            id="title"
            name="title"
            type="text"
            placeholder="Title"
            ref={inputRef}
          />
          <button type="submit">Add</button>
        </form>
      </div>

      <div className="controls">
        <div className="filters">
          <button onClick={filterHandler} className="active" id="all">
            All
          </button>
          <button onClick={filterHandler} id="pending">
            Pending
          </button>
          <button onClick={filterHandler} id="completed">
            Completed
          </button>
        </div>
      </div>

      <ul className="todolist">
        {todos?.map((todo) => (
          <Todo todo={todo} key={todo.id} />
        ))}
      </ul>
    </section>
  );
};

export default TodoList;
