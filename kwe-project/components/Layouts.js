import Footer from "./Footer";
import Nav from "./Nav";

const Layouts = ({ children }) => {
  return (
    <div>
      <Nav />
      <div className="container">
        <div className="row">
          <div className="col-3 bg-danger">col-8</div>
          <div className="col-9 bg-info" style={{ minHeight: "300px" }}>
            {children}
            {/* <Component {...pageProps} /> */}
          </div>
        </div>
      </div>
      {/* <div>{children}</div> */}
      <Footer />
    </div>
  );
};

export default Layouts;
