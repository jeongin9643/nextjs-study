import StockLayout from "../../layouts/my-stock-layout";
import Axios from "axios";
import { useEffect, useState } from "react";

function MyStock() {
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
    <>
      {list.map((item) => {
        return <div key={item.id}>{item.title}</div>;
      })}
    </>
  );
}

export default MyStock;

MyStock.getLayout = function getLayout(page) {
  return <StockLayout>{page}</StockLayout>;
};
