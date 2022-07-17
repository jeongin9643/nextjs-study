import StockLayout from "../layouts/stock-layout";

function Stock() {
  return <div>재고입니다</div>;
}

export default Stock;

Stock.getLayout = function getLayout(page) {
  return <StockLayout>{page}</StockLayout>;
};
