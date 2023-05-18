import { useEffect, useState } from "react";
import Todo from "./ui/Todo";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  // const [addTodo, setAddTodo] = useState(false);

  function fetchTodoList() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setTodos(json));
  }

  function createTodo() {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: "foo",
        body: "bar",
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => setTodos((prev) => [...prev, json]));
  }

  function updateTodo(id) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        id,
        title: "foo",
        body: "bar",
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }

  useEffect(() => {
    fetchTodoList();
  }, []);

  console.log("todos", todos);
  return (
    <section className="todolist__section">
      <div className="add__todo-container">
        <button className="add__todo-btn">Add Todo</button>
        <form className="todo-form" onSubmit={(e) => e.preventDefault()}>
          <input id="title" type="text" placeholder="Title" />
          <input id="note" type="text" placeholder="Note" />
          <button type="submit">Add</button>
        </form>
      </div>

      <div>
        <button onClick={() => createTodo()}>Add</button>
        <button onClick={() => updateTodo(1)}>Update</button>
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
