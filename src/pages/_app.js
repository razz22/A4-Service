import AdminLayout from "@/components/layouts/admin/AdminLayout";
import FrontendLayout from "@/components/layouts/frontend/FrontendLayout";
import "@/styles/globals.css";
import Head from "next/head";
import { useRouter } from "next/router";
export default function App({ Component, pageProps }) {
  const router = useRouter();
  const isAdminRoute = router.pathname.startsWith("/admin");

  const Layout = isAdminRoute ? AdminLayout : FrontendLayout;
  return (
    <>
      <Head>
        <link rel="icon" href="/images/frontend/favicon.png" />
        <title>A4-Service</title>
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
