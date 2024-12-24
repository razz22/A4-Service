import AdminLayout from "@/components/layouts/admin/AdminLayout";
import FrontendLayout from "@/components/layouts/frontend/FrontendLayout";
import "@/styles/globals.css";
import { useRouter } from "next/router";
export default function App({ Component, pageProps }) {
  const router = useRouter();
  const isAdminRoute = router.pathname.startsWith("/admin");

  const Layout = isAdminRoute ? AdminLayout : FrontendLayout;
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
