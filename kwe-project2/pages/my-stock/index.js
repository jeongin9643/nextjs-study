import MyStockLayout from "../../layouts/my-stock-layout";

function MyStock() {
  return <div>재고 index.js</div>;
}

export default MyStock;

MyStock.getLayout = function getLayout(page) {
  return <MyStockLayout>{page}</MyStockLayout>;
};
