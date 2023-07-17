import LayoutDashboard from "../layout/layout-dashboard";
import UploadPage from "./upload/upload-page";

export default function AdminPage() {
  return (
    <LayoutDashboard>
      <UploadPage />
    </LayoutDashboard>
  );
}
