import Link from "next/link";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">
          <i
            className="bi bi-bootstrap-fill"
            style={{
              color: "#642DEB",
            }}
          ></i>{" "}
          KWE
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link href="/">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about">
                <a className="nav-link active" aria-current="page" href="#">
                  About
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/product">
                <a className="nav-link active" aria-current="page" href="#">
                  Product
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/login">
                <a className="nav-link active" aria-current="page" href="#">
                  Login
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
