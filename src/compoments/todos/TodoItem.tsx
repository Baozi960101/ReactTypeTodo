import React from "react";
import styled from "styled-components";

interface TodoItemProps {
  todo: Todo;
  index: number;
  onToggleTodo: TaggleTodo;
  onDeleteTodo: DeleteTodo;
}
//把Props定義好，代表這個組件一定要含有以上東西

const Card = styled.div`
  width: 400px;
  background-color: white;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 20px 30px;
  margin: 50px auto 0 auto;

  & + & {
    margin-top: 50px;
  }
`;

const CardTitle = styled.div<{ status: boolean }>`
  width: 100%;
  text-align: center;
  color: black;
  font-size: 20px;
  text-decoration: ${(props) => (props.status ? "line-through" : "none")};
  margin-bottom: 20px;
`;

const OptionArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Btn = styled.button`
  width: 80px;
  height: 35px;
  border-radius: 5px;
  border: 0;
  cursor: pointer;
  font-weight: 500;
  font-size: 14px;
  color: white;
`;

const ToggleBtn = styled(Btn)<{ status: boolean }>`
  background-color: ${(props) => (props.status ? "green" : "blue")};
`;

const DeleteBtn = styled(Btn)`
  background-color: red;
`;

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  index,
  onToggleTodo,
  onDeleteTodo,
}) => {
  return (
    <Card>
      <CardTitle status={todo.complete}>{todo.text}</CardTitle>
      <OptionArea>
        <ToggleBtn
          onClick={() => {
            onToggleTodo(index);
          }}
          status={todo.complete}
        >
          {todo.complete ? "完成" : "未完成"}
        </ToggleBtn>
        <DeleteBtn
          onClick={() => {
            onDeleteTodo(index);
          }}
        >
          刪除
        </DeleteBtn>
      </OptionArea>
    </Card>
  );
};

export default TodoItem;
