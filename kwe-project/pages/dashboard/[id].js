import DashboardLayout from "../../layouts/dashboard-layout";
import { useRouter } from 'next/router'

function Dashboard() {
  const router = useRouter()
  const { id } = router.query
  return <p>대시보드: {id}</p>
}
export default Dashboard;

Dashboard.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};