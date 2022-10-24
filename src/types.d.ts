interface Todo {
  text: string;
  complete: boolean;
}

type ToggleTodoStatus = (index: number) => void;

type DeleteTodo = (index: number) => void;

type AddTodo = (text: string) => void;
