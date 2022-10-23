import React, { useState } from "react";
import TodoItem from "../todos/TodoItem";
import AddTodoItem from "../todos/AddTodoItem";

const initTodos: Todo[] = [
 
];

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>(initTodos);

  const handleAddTodoItem: AddTodo = (text: string) => {
    const newTodo: Todo = {
      text: text,
      complete: false,
    };
    setTodos([...todos, newTodo]);
  };


  const handleToggleTodo: TaggleTodo = (index: number) => {
    const newTodo: Todo[] = todos.map((data, i) => {
      if (i === index) {
        return { ...data, complete: !data.complete };
      }
      return data;
    });
    setTodos(newTodo);
  };

  const handDeleteTodo: DeleteTodo = (index: number) => {
    const newTodo: Todo[] = todos.filter((data, i) => {
      return i !== index;
    });
    setTodos(newTodo);
  };

  return (
    <>
      <AddTodoItem creatTodo={handleAddTodoItem} />
      {todos.map((data, index) => {
        return (
          <TodoItem
            onDeleteTodo={handDeleteTodo}
            onToggleTodo={handleToggleTodo}
            index={index}
            todo={data}
          />
        );
      })}
    </>
  );
};

export default App;
