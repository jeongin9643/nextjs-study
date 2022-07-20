import MyStockLayout from "../../layouts/my-stock-layout";
import { useRouter } from "next/router";
import Axios from "axios";
import { useEffect, useState } from "react";

function FirstTen() {
  const router = useRouter();
  const { id } = router.query;
  const [todos, setTodos] = useState([]);

  const API_URL = "https://jsonplaceholder.typicode.com/todos";

  function getData() {
    Axios.get(API_URL).then((res) => {
      console.log(res.data);
      setTodos(res.data);
    });
  }

  useEffect(() => {
    getData();
  }, []);

  function handleTodoClick(id) {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.completed = !todo.completed
    setTodos(newTodos)
    console.log(todos);
  }

  return (
    <div>
      {todos.map((todo) => {
        return (
          <div key={todo.id} className="card mb-2" style={{ width: "100%" }}>
            <img
              src="/assets/img/bootstrap-logo.svg"
              className="card-img-top mt-3 ms-3"
              alt="..."
              style={{ height: "20px", width: "20px" }}
            />
            <div className="card-body">
              <h5 className={"card-title " + (todo.completed ? 'bg-warning text-decoration-line-through': 'bg-info')}>{todo.title}</h5>
              <p className="card-text">
                {todo.id}
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => handleTodoClick(todo.id)}
                />
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default FirstTen;
FirstTen.getLayout = function getLayout(page) {
  return <MyStockLayout>{page}</MyStockLayout>;
};
// useState 배열 형태로 반환