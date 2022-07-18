import WarehouseOutLayout from "../../layouts/warehouse-out-layout";
import { useRouter } from 'next/router'

function WarehouseOut() {
  const router = useRouter()
  const { id } = router.query
  return <p>출고: {id}</p>
}
export default WarehouseOut;

WarehouseOut.getLayout = function getLayout(page) {
  return <WarehouseOutLayout>{page}</WarehouseOutLayout>;
};