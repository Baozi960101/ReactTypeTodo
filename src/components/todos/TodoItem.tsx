import styled from "styled-components";

interface Props {
  todo: Todo;
  index: number;
  toggleTodo: ToggleTodoStatus;
  deleteTodo: DeleteTodo;
}

const Card = styled.div`
  width: 500px;
  margin: 50px auto 0 auto;
  border-radius: 8px;
  background-color: #ffffff;
  padding: 20px 30px;
  box-sizing: border-box;

  & + & {
    margin-top: 30px;
  }
`;

const CardTitle = styled.div`
  text-align: center;
  color: black;
  font-size: 20px;
`;

const OptionArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const Btn = styled.button`
  border-radius: 8px;
  box-sizing: border-box;
  padding: 10px 20px;
  color: white;
  cursor: pointer;
`;

const StatusBtn = styled(Btn)<{ status: boolean }>`
  background-color: ${(props) => (props.status ? "green" : "blue")};
`;

const DeleteBtn = styled(Btn)`
  background-color: red;
`;

const TodoItem: React.FC<Props> = ({ todo, index, toggleTodo, deleteTodo }) => {
  return (
    <>
      <Card>
        <CardTitle>{todo.text}</CardTitle>
        <OptionArea>
          <StatusBtn
            status={todo.complete}
            onClick={() => {
              toggleTodo(index);
            }}
          >
            {todo.complete ? "已完成" : "未完成"}
          </StatusBtn>
          <DeleteBtn
            onClick={() => {
              deleteTodo(index);
            }}
          >
            刪除
          </DeleteBtn>
        </OptionArea>
      </Card>
    </>
  );
};

export default TodoItem;
