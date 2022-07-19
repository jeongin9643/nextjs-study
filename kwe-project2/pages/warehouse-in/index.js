import WarehouseInLayout from "../../../kwe-project2/layouts/warehouse-in-layout";

function WarehouseIn() {
    return (
        <div>
            입고 index.js 
        </div>
    );
}

export default WarehouseIn;

WarehouseIn.getLayout = function getLayout(page) {
    return <WarehouseInLayout>{ page}</WarehouseInLayout>
}