import { useContext, createContext, useState, useEffect } from "react";
import { getTodosFromLocalStorage } from "./utils/index";

const TodoContext = createContext(null);

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [data, setData] = useState([]);

  const updateAllData = (updatedTodos) => {
    setTodos(updatedTodos);
    setData(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const createTodo = (obj) => {
    const isDuplicate = todos.some((todo) => todo.id === obj.id);
    if (isDuplicate) {
      console.log("You can't create a duplicate title");
    } else {
      const updatedTodos = [...todos, obj];
      updateAllData(updatedTodos);
    }
  };

  const updateTodo = (obj) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === obj.id ? { ...obj, id: obj.title } : todo
    );
    updateAllData(updatedTodos);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    updateAllData(updatedTodos);
  };

  useEffect(() => {
    const data = getTodosFromLocalStorage();
    setTodos(data);
    setData(data);
    console.log("useEffect");
  }, []);
  console.log("Todos", todos);

  return (
    <TodoContext.Provider
      value={{
        todos,
        setTodos,
        createTodo,
        updateTodo,
        deleteTodo,
        data,
        setData,
        updateAllData,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => {
  return useContext(TodoContext);
};
