import MyStockLayout from "../../layouts/my-stock-layout";
import { useRouter } from "next/router";

function MyStock() {
  const router = useRouter();
  const { id } = router.query;
  return <p> 재고: {id} </p>;
}
export default MyStock;
MyStock.getLayout = function getLayout(page) {
  return <MyStockLayout>{page}</MyStockLayout>;
};
