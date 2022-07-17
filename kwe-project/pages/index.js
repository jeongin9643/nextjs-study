import DashboardLayout from "../layouts/dashboard-layout";

export default function Dashboard() {
  return (
    <>
      <div>대시보드입니다</div>
    </>
  );
}

Dashboard.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
