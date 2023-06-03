import { useState } from "react";
import Modal from "./Modal";

const UpdateTodoModal = ({ todo, setShowModal, updateTodo }) => {
  const [title, setTitle] = useState(todo.title);

  const submitHandle = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log("TodoModal", formData.get("title"));

    updateTodo({ ...todo, title: formData.get("title") ?? todo.title });
    setShowModal(false);
  };

  return (
    <Modal>
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
    </Modal>
  );
};

export default UpdateTodoModal;
