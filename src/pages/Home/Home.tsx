import { useState } from "react";
import TodoItem from "../../components/todos/TodoItem";
import AddTodoItem from "../../components/todos/AddTodoItem";

const initTodos: Todo[] = [
  { text: "第一個清單", complete: true },
  { text: "第二個清單", complete: false },
];

const Home: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>(initTodos);

  const creatTodoItem: AddTodo = (text: string) => {
    setTodos([
      {
        text: text,
        complete: false,
      },
      ...todos,
    ]);
  };

  const toggleTodo: ToggleTodoStatus = (index: number) => {
    const newTodos: Todo[] = todos.map((data, i) => {
      if (i === index) {
        return {
          ...data,
          complete: !data.complete,
        };
      }
      return data;
    });
    setTodos(newTodos);
  };

  const deleteTodo: DeleteTodo = (index: number) => {
    const newTodos: Todo[] = todos.filter((data, i) => {
      return i !== index;
    });
    setTodos(newTodos);
  };

  return (
    <>
      <AddTodoItem creatTodoItem={creatTodoItem} />
      {todos.map((data, index) => {
        return (
          <TodoItem
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
            index={index}
            todo={data}
          ></TodoItem>
        );
      })}
    </>
  );
};

export default Home;
