import StockLayout from "../../layouts/my-stock-layout";

function MyStock() {
  return <div>재고 index.js 입니다</div>;
}

export default MyStock;

MyStock.getLayout = function getLayout(page) {
  return <StockLayout>{page}</StockLayout>;
};
