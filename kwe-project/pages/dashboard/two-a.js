import DashboardLayout from "../../layouts/dashboard-layout";

function Two() {
  return <div>대시보드-two 입니다</div>;
}

export default Two;

Two.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
