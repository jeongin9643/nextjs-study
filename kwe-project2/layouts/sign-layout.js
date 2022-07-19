import Nav from "../components/Nav";
import Footer from "../components/Footer";

const SignLayout = ({ children }) => {
  return (
    <div>
      <Nav />
      <div className="container">
        <div className="row">
          <div className="col py-5">
            {children}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignLayout;
