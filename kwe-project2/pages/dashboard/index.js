import DashboardLayout from "../../layouts/dashboard-layout";

function Dashboard() {
  return <div>대시보드 index.js</div>;
}

export default Dashboard;

Dashboard.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
