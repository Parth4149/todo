import Navbar from "./Navbar";
import TodoList from "./TodoList";
import Footer from "./Footer";
import { TodoProvider } from "../Context";

const App = () => {
  return (
    <>
      <Navbar />
      <TodoProvider>
        <TodoList />
      </TodoProvider>
      <Footer />
    </>
  );
};

export default App;
