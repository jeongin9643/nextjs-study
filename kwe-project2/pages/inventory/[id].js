import InventoryLayout from "../../layouts/inventory-layout";
import { useRouter } from 'next/router'

function Inventory() {
    const router = useRouter()
    const {id} = router.query
    return (
        <p> 재고: {id} </p>
    );
}
export default Inventory;
Inventory.getLayout = function getLayout(page) {
    return <InventoryLayout>{page}</InventoryLayout>
}