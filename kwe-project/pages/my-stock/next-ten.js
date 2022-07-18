import MyStockLayout from "../../layouts/my-stock-layout";
import { useRouter } from "next/router";
import Axios from "axios";
import { useEffect, useState } from "react";

function NextTen() {
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
      {list.slice(10,20).map((item) => {
          return <div key={item.id}>{ item.id}. {item.title}</div>;
      })}
    
    </div>
  );
}

export default NextTen;
NextTen.getLayout = function getLayout(page) {
  return <MyStockLayout>{page}</MyStockLayout>;
};
