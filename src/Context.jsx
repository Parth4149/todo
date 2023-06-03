import { useContext, createContext, useState } from "react";
import { getTodosFromLocalStorage } from "./utils/index";

const TodoContext = createContext(null);

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState(getTodosFromLocalStorage());

  const createTodo = async (obj) => {
    console.log("createTodo", obj);
    const updatedTodos = [...todos, obj];
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const updateTodo = async () => {
    console.log("updateTodo");
  };

  const deleteTodo = async (id) => {
    console.log("deleteTodo", id);
  };

  return (
    <TodoContext.Provider
      value={{ todos, setTodos, createTodo, updateTodo, deleteTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => {
  return useContext(TodoContext);
};
