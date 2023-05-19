import { useRef, useState } from "react";
import BarsIcon from "../../asserts/BarsIcon";
import EditIcon from "../../asserts/EditIcon";
import DeleteIcon from "../../asserts/DeleteIcon";
import TodoModal from "../TodoModal";

const Todo = ({ todo, updateTodo, deleteTodo }) => {
  const currSettingRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [checked, setChecked] = useState(todo.completed);

  const showMenu = () => {
    currSettingRef?.current.classList.add("show");
  };

  return (
    <li className="todo__container">
      {showModal && (
        <TodoModal
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
            onChange={() => setChecked((prev) => !prev)}
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
                console.log("Edit");
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
