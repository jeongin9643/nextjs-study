import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Link from "next/link";

const WarehouseOutLayout = ({ children }) => {
  return (
    <div>
      <Nav />
      <div className="container">
        <div className="row">
          <div className="col-3 border-top border-end p-2">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Link href="/warehouse-out">
                  <a className="nav-link active" aria-current="page" href="#">
                    출고1
                  </a>
                </Link>
              </li>
              <li className="list-group-item">
                <Link href="/warehouse-out">
                  <a className="nav-link active" aria-current="page" href="#">
                    출고2
                  </a>
                </Link>
              </li>
              <li className="list-group-item">
                <Link href="/warehouse-out">
                  <a className="nav-link active" aria-current="page" href="#">
                    출고3
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-9 border-top p-2" style={{ minHeight: "300px" }}>
            {children}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WarehouseOutLayout;
