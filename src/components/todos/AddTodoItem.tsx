import { FormEvent, useState } from "react";
import styled from "styled-components";

interface Props {
  creatTodoItem: AddTodo;
}

const Area = styled.form`
  box-sizing: border-box;
  width: 500px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  margin: 30px auto;
`;

const TodoInput = styled.input`
  width: 80%;
  height: 100%;
  box-sizing: border-box;
`;

const Btn = styled.button`
  width: 20%;
  height: 100%;
  font-size: 16px;
  background-color: blue;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;

const AddTodoItem: React.FC<Props> = ({ creatTodoItem }) => {
  const [text, setText] = useState<string>("");

  const createAddTodoItem = (e: FormEvent) => {
    e.preventDefault();
    creatTodoItem(text);
    setText("");
  };

  return (
    <>
      <Area>
        <TodoInput
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          type="text"
        />
        <Btn
          onClick={createAddTodoItem}
          type="submit"
        >
          送出
        </Btn>
      </Area>
    </>
  );
};

export default AddTodoItem;
