import { AdminPage } from "@/components/dashboard";
import HeaderDashboard from "@/components/dashboard/layout/header/header-dashboard";

export default async function Page() {
  return (
    <>
      <HeaderDashboard />
      <AdminPage />
    </>
  );
}
