import { useRef } from "react";
import BarsIcon from "../../asserts/BarsIcon";
import EditIcon from "../../asserts/EditIcon";
import DeleteIcon from "../../asserts/DeleteIcon";

const Todo = ({ todo }) => {
  const currSettingRef = useRef(null);

  const showMenu = () => {
    currSettingRef?.current.classList.add("show");
  };

  return (
    <li className="todo__container">
      <div className="todo__inner">
        <div className="todo__title">{todo.title}</div>
        <div className="todo__body">{todo.body}</div>
        <button
          className="settings"
          onFocus={showMenu}
          onBlur={() => currSettingRef?.current.classList.remove("show")}
        >
          <div className="settings__icon">
            <BarsIcon />
          </div>
          <ul className="task-menu" ref={currSettingRef}>
            <li role="button" onClick={() => console.log("Edit")}>
              <EditIcon /> Edit
            </li>
            <li role="button" onClick={() => console.log("Delete")}>
              <DeleteIcon /> Delete
            </li>
          </ul>
        </button>
      </div>
    </li>
  );
};

export default Todo;
