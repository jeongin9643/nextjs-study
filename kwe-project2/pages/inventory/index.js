import InventoryLayout from "../../layouts/inventory-layout";
import Axios from "axios";
import { useEffect, useState } from "react";

function Inventory() {
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
      {list.map((item) => {
        return <div key={item.id}>{item.title}</div>;
      })}
    </div>
  );
}

export default Inventory;

Inventory.getLayout = function getLayout(page) {
  return <InventoryLayout>{page}</InventoryLayout>;
};
