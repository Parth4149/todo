import { useEffect, useState } from "react";
import Todo from "./ui/Todo";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  // const [addTodo, setAddTodo] = useState(false);

  const fetchTodoList = async () => {
    try {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => setTodos(json));
    } catch (e) {
      console.log(e);
    }
  };

  const createTodo = async ({ id, userId, title, body }) => {
    console.log(id, userId, title, body);
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        body,
        userId,
        id,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => setTodos((prev) => [...prev, json]));
  };

  const updateTodo = async () => {
    console.log("updateTodo");
    const id = 101;
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        id,
        title: "foo1",
        body: "bar1",
        userId: 11,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => setTodos((prev) => [...prev, json]))
      .catch((error) => {
        console.error(error);
        console.warn(
          "Important: resource will not be really updated on the server but it will be faked as if."
        );
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(formData.get("title"), formData.get("body"));
    console.log(todos.length);
    const obj = {
      id: todos.length + 1,
      userId: Math.floor((todos.length + 1) / 10) + 1,
      title: formData.get("title") ?? "",
      body: formData.get("body") ?? "",
    };
    createTodo(obj);
  };

  useEffect(() => {
    fetchTodoList();
  }, []);

  console.log("todos", todos);
  return (
    <section className="todolist__section">
      <div className="add__todo-container">
        <button className="add__todo-btn">Add Todo</button>
        <form className="todo-form" onSubmit={handleSubmit}>
          <input id="title" name="title" type="text" placeholder="Title" />
          <input id="body" name="body" type="text" placeholder="Note" />
          <button type="submit">Add</button>
        </form>
      </div>

      <div>
        <button onClick={() => createTodo()}>Add</button>
        <button onClick={() => updateTodo()}>Update</button>
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
