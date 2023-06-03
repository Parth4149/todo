import { useRef, useState } from "react";
import { useTodoContext } from "../../Context";

import BarsIcon from "../../asserts/BarsIcon";
import EditIcon from "../../asserts/EditIcon";
import DeleteIcon from "../../asserts/DeleteIcon";

import UpdateTodoModal from "../UpdateTodoModal";

const Todo = ({ todo }) => {
  const currSettingRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [checked, setChecked] = useState(todo.completed);

  const { updateTodo, deleteTodo, todos, updateAllData } = useTodoContext();

  const showMenu = () => {
    currSettingRef?.current.classList.add("show");
  };

  const updateHandler = (e) => {
    console.log(e.target.id);
    const completed = !checked;
    setChecked(completed);
    const updatedTodos = todos.map((todo) =>
      todo.id === e.target.id ? { ...todo, completed } : todo
    );

    updateAllData(updatedTodos);
  };

  return (
    <li className="todo__container">
      {showModal && (
        <UpdateTodoModal
          todo={todo}
          setShowModal={setShowModal}
          updateTodo={updateTodo}
        />
      )}
      <div className="todo__inner">
        <label htmlFor={todo.id}>
          <input
            type="checkbox"
            name="completed"
            checked={checked}
            id={todo.id}
            onChange={updateHandler}
          />
          <p className={`todo__title ${checked === true && "checked"}`}>
            {todo.title}
          </p>
        </label>

        <button
          className="settings"
          onFocus={showMenu}
          onBlur={() => currSettingRef?.current.classList.remove("show")}
        >
          <div className="settings__icon">
            <BarsIcon />
          </div>
          <ul className="task-menu" ref={currSettingRef}>
            <li
              role="button"
              onClick={() => {
                document.getElementById("modalTitle")?.focus();
                setShowModal(true);
              }}
            >
              <EditIcon /> Edit
            </li>
            <li role="button" onClick={() => deleteTodo(todo.id)}>
              <DeleteIcon /> Delete
            </li>
          </ul>
        </button>
      </div>
    </li>
  );
};

export default Todo;
