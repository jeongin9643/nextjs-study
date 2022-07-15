/* import Head from 'next/head'

export default function Home() {
  return <div> nextjs</div>;
}
 */

import Axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Divider, Header } from "semantic-ui-react";
import ItemList from "../src/component/ItemList";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [list, setList] = useState([]);

  const API_URL =
    "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";

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
      <Head>
        <title>HOME | 코딩앙마</title>
      </Head>
      <button type="button" className="btn btn-outline-primary">Primary</button>
<button type="button" className="btn btn-outline-secondary">Secondary</button>
<button type="button" className="btn btn-outline-success">Success</button>
<button type="button" className="btn btn-outline-danger">Danger</button>
<button type="button" className="btn btn-outline-warning">Warning</button>
<button type="button" className="btn btn-outline-info">Info</button>
<button type="button" className="btn btn-outline-light">Light</button>
<button type="button" className="btn btn-outline-dark">Dark</button>
      <Header as="h3" style={{ paddingTop: 40 }}>
        베스트 상품
      </Header>
      <Divider />
      <ItemList list={list.slice(0, 9)} />
      <Header as="h3" style={{ paddingTop: 40 }}>
        신상품
      </Header>
      <Divider />
      <ItemList list={list.slice(9)} />
    </div>
  );
}

// axios