import Navbar from "./Navbar";
import TodoList from "./TodoList";
import Footer from "./Footer";
import { TodoProvider } from "../Context";

const App = () => {
  console.log();
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
