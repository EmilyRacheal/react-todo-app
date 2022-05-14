import { useState } from "react";
import "./App.css";
import Header from "./componets/header/index";
import TaskList from "./componets/taskList/index";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />
      <TaskList />
    </div>
  );
}

export default App;
