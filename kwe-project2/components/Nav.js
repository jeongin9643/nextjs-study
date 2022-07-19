import Link from "next/link";

function Nav() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            <i
              className="bi bi-bootstrap-fill"
              style={{ color: "#642DEB" }}
            ></i>{" "}
            KWE
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link href="/dashboard">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/warehouse-in">
                  <a className="nav-link active" aria-current="page" href="#">
                    입고
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/warehouse-out">
                  <a className="nav-link active" aria-current="page" href="#">
                    출고
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/inventory">
                  <a className="nav-link active" aria-current="page" href="#">
                    재고
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/sign-in">
                  <a className="nav-link active" aria-current="page" href="#">
                    Sign-in
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/sign-up">
                  <a className="nav-link active" aria-current="page" href="#">
                    Sign-up
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
