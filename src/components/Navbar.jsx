import React from "react";
import { MdOutlinePerson3 } from "react-icons/md";
import "./Styles.css";
import Main from "./Main";

const Navbar = () => {
  return (
    <>
      <div className="container-fluid m-0 p-0 bg-primary">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <a className="navbar-brand" href="#"></a>
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
            <div
              className="collapse navbar-collapse justify-content-between"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mb-2 mb-lg-0" style={{marginLeft: "230px"}}>
    <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#">
            Starter
        </a>
    </li>
    <li className="nav-item">
        <a className="nav-link" href="#">
            About
        </a>
    </li>
    <li className="nav-item dropdown">
        <a
            className="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
        >
            Do Menu
        </a>
        <ul className="dropdown-menu">
            <li>
                <a className="dropdown-item" href="#">
                    Action
                </a>
            </li>
            <li>
                <a className="dropdown-item" href="#">
                    Another action
                </a>
            </li>
            <li>
                <hr className="dropdown-divider" />
            </li>
            <li>
                <a className="dropdown-item" href="#">
                    Something else here
                </a>
            </li>
        </ul>
    </li>
</ul>

              <form className="form-inline">
                <div className="imge">
                  <MdOutlinePerson3 />
                </div>
              </form>
            </div>
          </div>
        </nav>
      </div>
      <div className="mainn">
        <Main />
      </div>
    </>
  );
};

export default Navbar;
