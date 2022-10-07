import React from "react";
import { render } from "react-dom";
import TodoList from "./TodoList.js";
import TodoStore from "./TodoStore";

const styles = {
  fontFamily: "sans-serif"
};

const App = () => (
  <div style={styles}>
    <TodoList store={new TodoStore()} />
  </div>
);

render(<App />, document.getElementById("root"));
