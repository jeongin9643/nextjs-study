import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  const getLayout = Component.getLayout || ((page) => page)
  
  return getLayout(<Component {...pageProps} />);
  // return (
  //   <>
  //     <MainLayout>
  //       <Component {...pageProps} />
  //     </MainLayout>
  //   </>
  // );
}

export default MyApp;
