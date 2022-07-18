import StockLayout from "../../layouts/stock-layout";
import { useRouter } from 'next/router'

function Stock() {
  const router = useRouter()
  const { id } = router.query
  return <p>재고: {id}</p>
}
export default Stock;

Stock.getLayout = function getLayout(page) {
  return <StockLayout>{page}</StockLayout>;
};