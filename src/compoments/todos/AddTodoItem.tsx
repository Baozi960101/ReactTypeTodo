import { FormEvent, useState } from "react";
import styled from "styled-components";

interface AddTodoItemProps {
  creatTodo: AddTodo;
}

const AddTodo = styled.form`
  margin: 30px auto;
  background-color: white;
  width: 400px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
`;

const AddInput = styled.input`
  width: 80%;
  height: 40px;
  box-sizing: border-box;
  padding: 10px 10px 10px 20px;
`;

const AddBtn = styled.button`
  width: 20%;
  height: 40px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 500;
  font-size: 14px;
  color: black;
  background-color: white;
  border: 1px solid blue;
`;

const AddTodoItem: React.FC<AddTodoItemProps> = ({ creatTodo }) => {
  const [value, setValue] = useState<string>("");

  const handleOnChange = (e: FormEvent) => {
    e.preventDefault();
    creatTodo(value);
    setValue("");
  };

  return (
    <>
      <AddTodo>
        <AddInput
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <AddBtn type="submit" onClick={handleOnChange}>
          新增
        </AddBtn>
      </AddTodo>
    </>
  );
};

export default AddTodoItem;
