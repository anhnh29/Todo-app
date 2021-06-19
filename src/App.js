import Header from "./components/Header";
import ListTodo from "./components/ListTodo";
import AddTask from "./components/AddTask";
import ListDone from "./components/ListDone";

import { connect } from "react-redux";

function App() {
  return (
    <div className="todo_app">
      <Header />
      <AddTask />
      <ListTodo />
      <ListDone />
    </div>
  );
}

export default connect()(App);
