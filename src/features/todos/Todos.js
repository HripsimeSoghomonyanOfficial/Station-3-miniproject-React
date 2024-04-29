import { useDispatch, useSelector } from "react-redux";
import { editTodo, selectTodos } from "./todosSlice";
import { useState } from "react";
import { addTodo, checkTodo, deleteTodo } from "./todosSlice";
import style from "./ToDo.module.css";

function Todos(params) {
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();
  const [addText, setAddText] = useState("");
  const [editId, setEditId] = useState(0);
  const [editText, setEditText] = useState(" ");

  return (
    <div className={style.all}>      
      <h1>ToDo List</h1>
      <input
        className={style.input}
        value={addText}
        onChange={(e) => {
          setAddText(e.target.value);
        }}
      />
      <button
        className={style.button}
        onClick={() => {
          if (addText.trim()) {
            dispatch(addTodo(addText));
            setAddText("");
          }
        }}
      >
        Add
      </button>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            {editId === todo.id ? (
              <input
                className={style.input1}
                value={editText}
                onChange={(fs) => {
                  setEditText(fs.target.value);
                }}
              />
            ) : (
              <span>{todo.title}</span>
            )}
            <button
              className={style.button}
              onClick={() => {
                dispatch(deleteTodo(todo.id));
              }}
            >
              Delete
            </button>
            <button
              className={style.button}
              onClick={() => {
                editId === todo.id ? setEditId(0) : setEditId(todo.id);
                if (editId === todo.id && editText.trim()) {
                  dispatch(editTodo({ text: editText, id: todo.id }));
                } else {
                  setEditText(todo.title);
                }
              }}
            >
              {editId === todo.id ? "Save" : "Edit"}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Todos;
