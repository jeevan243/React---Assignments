import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { TodoOne } from "./todorender";

export const Todoinput = () => {
  const [todo, setTodo] = useState("");
  const [todoData, getTododata] = useState([]);

  const [page, setPage] = useState(1);
  console.log(page);

  let obj = {
    todo: todo,
    id: Date.now(),
    status: false,
  };
  //useeffect

  useEffect(() => {
    getData();
  }, [page]);

  //

  //delete

  function Delete(todo) {
    axios.delete(`http://localhost:3001/todos/${todo.id}`);
    getData();

    console.log("here");
  }

  const getData = () => {
    axios
      .get(`http://localhost:3001/todos?_limit=2&_page=${page}`)
      .then((res) => {
        getTododata(res.data);
      });
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  return (
    <>
      <input type="text" className="todo-Input" onChange={handleChange} />{" "}
      <button
        onClick={() => {
          axios.post("http://localhost:3001/todos", obj, getData());
        }}
      >
        Add Todo
      </button>
      <TodoOne todoData={todoData} Delete={Delete} />
      <br />
      <br />
      <button
        onClick={() => {
          setPage(page - 1);
        }}
      >
        Prev
      </button>
      <button
        onClick={() => {
          setPage(page + 1);
        }}
      >
        Next
      </button>
    </>
  );
};
