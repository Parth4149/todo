import { useState } from "react";
import Modal from "./Modal";

const TodoModal = ({ todo, setShowModal, updateTodo }) => {
  const [title, setTitle] = useState(todo.title);

  const submitHandle = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(formData.get("title"), formData.get("body"));
    const obj = {
      id: todo.id,
      userId: todo.userId,
      title: formData.get("title") ?? todo.title,
    };
    updateTodo(obj);
    setShowModal(false);
  };

  return (
    <Modal>
      <div>
        <form onSubmit={submitHandle}>
          <input
            id="modalTitle"
            name="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </Modal>
  );
};

export default TodoModal;
