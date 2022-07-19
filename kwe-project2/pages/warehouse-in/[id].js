import WarehouseInLayout from "../../layouts/warehouse-in-layout";
import { useRouter } from 'next/router'

function WarehouseIn() {
    const router = useRouter()
    const {id} = router.query
    return (
        <p> 입고: {id} </p>
    );
}
export default WarehouseIn;
WarehouseIn.getLayout = function getLayout(page) {
    return <WarehouseInLayout>{page}</WarehouseInLayout>
}