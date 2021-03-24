import Header from './components/Header';
import ListTodo from './components/ListTodo';
import AddTask from './components/AddTask';
function App() {
  return (
    <div className="todo_app">
     <Header />
     <AddTask />
     <ListTodo />
    </div>
  );
}

export default App;
