import AdminController from "@/components/layouts/admin/AdminController";
import AdminLayout from "@/components/layouts/admin/AdminLayout";
import FrontendLayout from "@/components/layouts/frontend/FrontendLayout";
import Loading from "@/components/layouts/frontend/Loading";
import store, { persistor } from "@/features/redux/store";
import "@/styles/globals.css";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    let timer;

    const handleStart = () => {
      setLoading(true);

      // Ensure the loading screen stays visible for at least 3 seconds
      timer = setTimeout(() => {
        setLoading(false);
      }, 3000);
    };

    const handleStop = () => {
      // Stop loading after the route change is complete
      clearTimeout(timer);
      setTimeout(() => setLoading(false), 3000); // Ensure the minimum duration
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      clearTimeout(timer);
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router]);

  const isAdminRoute = router.pathname.startsWith("/admin");

  const Layout = isAdminRoute ? AdminController : FrontendLayout;
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Head>
            <link rel="icon" href="/images/frontend/favicon.png" />
            <title>A4-Service</title>
          </Head>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </PersistGate>
          </Provider>
        </>
      )}
    </>
  );
}
