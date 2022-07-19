import MyStockLayout from "../../layouts/my-stock-layout";
import { useRouter } from "next/router";
import Axios from "axios";
import { useEffect, useState } from "react";

function FirstTen() {
  const router = useRouter();
  const { id } = router.query;
  const [list, setList] = useState([]);

  const API_URL = "https://jsonplaceholder.typicode.com/todos";

  function getData() {
    Axios.get(API_URL).then((res) => {
      console.log(res.data);
      setList(res.data);
    });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {list.slice(0, 10).map((item) => {
        // <div key={item.id}>{item.id}. {item.title}</div>;
        return (
          <div key={item.id} className="card mb-2" style={{ width: "100%" }}>
            <img
              src="/assets/img/bootstrap-logo.svg"
              className="card-img-top mt-3 ms-3"
              alt="..."
              style={{ height: "20px", width: "20px" }}
            />
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">{item.id}</p>
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
