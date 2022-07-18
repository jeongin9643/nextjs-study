import WarehouseOutLayout from "../../layouts/warehouse-out-layout";

function WarehouseOut() {
  return <div>출고 index.js 입니다</div>;
}

export default WarehouseOut;

WarehouseOut.getLayout = function getLayout(page) {
  return <WarehouseOutLayout>{page}</WarehouseOutLayout>;
};
