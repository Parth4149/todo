export const getTodosFromLocalStorage = () => {
  let todos = localStorage.getItem("todos");
  if (todos) {
    todos = JSON.parse(todos);
  } else {
    todos = [];
  }
  return todos;
};

export function filterTodo(filter, todos, setTodos) {
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
  if (count === 0) {
    return `You don't have any task here`;
  }
}

