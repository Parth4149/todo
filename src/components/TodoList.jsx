import { useEffect, useState, useRef } from "react";
import Todo from "./ui/Todo";

const TodoList = () => {
  const [data, setData] = useState([]);
  const [todos, setTodos] = useState([]);

  function fetchTodoList() {
    try {
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response) => response.json())
        .then((json) => {
          setTodos(json);
          setData(json);
        });
    } catch (e) {
      console.log(e);
    }
  }

  const createTodo = async ({ id, userId, title, body }) => {
    console.log(id, userId, title, body);
    fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "POST",
      body: JSON.stringify({
        id,
        userId,
        title,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => setTodos((prev) => [...prev, json]));
  };

  const updateTodo = async ({ id, userId, title }) => {
    console.log("updateTodo");
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        id,
        userId,
        title,
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

  const deleteTodo = async (id) => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: "DELETE",
    }).catch(() =>
      console.ward(
        "Important: resource will not be really updated on the server but it will be faked as if."
      )
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(formData.get("title"), formData.get("completed"));
    console.log(todos.length);
    const obj = {
      id: todos.length + 1,
      userId: Math.floor((todos.length + 1) / 10) + 1,
      title: formData.get("title") ?? "",
      body: formData.get("body") ?? "",
    };
    createTodo(obj);
  };

  const filterHandler = (e) => {
    document.querySelector("button.active")?.classList.remove("active");
    e.target.classList.add("active");
    filterTodo(e.target.id, data, setTodos);
    console.log(e.target.id);
  };

  useEffect(() => {
    fetchTodoList();
  }, []);

  // console.log("data", data);
  return (
    <section className="todolist__section">
      <div className="add__todo-container">
        <button className="add__todo-btn">Add Todo</button>
        <form className="todo-form" onSubmit={handleSubmit}>
          <input id="title" name="title" type="text" placeholder="Title" />
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
          <Todo
            todo={todo}
            key={todo.id}
            updateTodo={updateTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    </section>
  );
};

function filterTodo(filter, todos, setTodos) {
  let count = 0;
  if (todos) {
    const filteredData = todos.filter((todo) => {
      let completed = todo.completed === true ? "completed" : "pending";
      if (filter == completed || filter == "all") {
        count++;
        return todo;
      }
    });
    setTodos(filteredData);
  }
  console.log(count);
  if (count === 0) {
    return `You don't have any task here`;
  }
  // let checkTask = taskBox.querySelectorAll(".todo__container");
}

export default TodoList;
