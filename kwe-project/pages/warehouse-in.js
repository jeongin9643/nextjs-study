import WarehouseInLayout from "../layouts/warehouse-in-layout";

function WarehouseIn() {
  return <div>입고입니다</div>;
}

export default WarehouseIn;

WarehouseIn.getLayout = function getLayout(page) {
  return <WarehouseInLayout>{page}</WarehouseInLayout>;
};
