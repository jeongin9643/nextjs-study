import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(()=>{
    import("bootstrap/dist/js/bootstrap");
},[])

  return (
    <>
      <div>
        navbar
      </div>
      < Component {...pageProps} />
    </>
  );
}

export default MyApp
